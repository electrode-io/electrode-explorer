"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("@walmart/electrode-config").config;
const github = new GitHubApi(Config.githubApi);
const githubAuthObject = require("./utils/github-auth-object");
const contentToString = require("./utils/content-to-string");

const createImports = require("./create-imports");
const saveModuleDemo = require("./save-module-demo");
const handleLibraryScoping = require("./handle-library-scoping");
const fetchComponentCode = require("./fetch-component-code");
const fetchUsage = require("./fetch-usage");

const patterns = {
  IMPORT_COMPONENT: /import ([\w]*) from "\.\.\/src\/([a-z\-\/]*)(?:\.jsx)";/g,
  INDEX_COMPONENTS: /Index\.Components\s?=\s?(\[[\w\W]*\]);/,
  EXAMPLE_REQUIRE_PATH: /require\((.*)\)/g,
  INVALID_JSON_PROPERTY_NAMES: /[\s,]([\w_]+)[\s,]{0,1}:/g,
  NEWLINES: /\n/g,
  UX_FUNCTION: /ux:(\s?\(\)[^}]+)/g
};

const replacements = [
  {
    pattern: patterns.EXAMPLE_REQUIRE_PATH,
    func: (m, p1) => p1
  },
  {
    pattern: patterns.UX_FUNCTION,
    func: `"ux":""`
  },
  {
    pattern: patterns.INVALID_JSON_PROPERTY_NAMES,
    func: (m, propertyName) => `"${propertyName}":`
  },
  {
    pattern: patterns.NEWLINES,
    func: ""
  }
];

const prepareComponentsArray = (str) => {

  replacements.forEach((replacement) =>
    str = str.replace(replacement.pattern, replacement.func));

  return str;

};

const fetchDemoIndex = (org, repoName, meta) => {

  const opts = {
    user: org,
    repo: repoName,
    path: "demo/index.jsx"
  };

  return new Promise((resolve, reject) => {
    github.repos.getContent(opts, (err, response) => {

      if (err) {
        throw err;
      }

      const indexContent = contentToString(response.content);

      const im = indexContent.match(patterns.IMPORT_COMPONENT);
      let imports = im ?
        createImports(im) :
        handleLibraryScoping(org, repoName, indexContent).then((ip) => {
          return ip;
        });

      const m = indexContent.match(patterns.INDEX_COMPONENTS);
      if (!m) {
        throw new Error(`${org}/${repoName}: demo/index.jsx does not define Index.Components`);
      }

      const componentsStr = prepareComponentsArray(m[1]);
      let components = [];

      try {

        let components = JSON.parse(componentsStr);

        Promise.each(components, component => {
          return components.examples = Promise.each(component.examples, example => {

            return fetchComponentCode(org, repoName, example.code.replace("raw!.", ""))
              .then((code) => {
                example.code = code;
              });

          }).then((arr) => {
            return Promise.resolve(arr);
          });
        }).then((comps) => {

          // If imports is still a promise, get it's value
          if (!Array.isArray(imports) && imports.isFulfilled()) {
            imports = imports.value();
          }

          return resolve({
            meta: meta,
            imports: imports,
            components: comps
          });
        });

      } catch (err) {
        console.error(`Error parsing components to Array (${org}/${repoName})`, err);
        throw new Error(`${org}/${repoName}: Could not parse Index.Components to Array`);
      }

    });
  });
};

const extractMetaData = (pkg, repoUrl) => {

  return {
    name: pkg.name,
    title: pkg.title,
    description: pkg.description,
    github: repoUrl,
    version: pkg.version
  };

};

const fetchRepo = (org, repoName, cb) => {

  github.authenticate(githubAuthObject);

  const opts = {
    user: org,
    repo: repoName,
    path: "package.json"
  };

  return new Promise((resolve, reject) => {
    github.repos.getContent(opts, (err, response) => {

      if (err) {
        console.log("error fetchRepo", err);
        return reject(err);
      }

      const packageContent = contentToString(response.content);

      let meta;
      try {

        const pkg = JSON.parse(packageContent);
        meta = extractMetaData(pkg, response.html_url.replace("blob/master/package.json", ""));

        saveModuleDemo(meta.name);

      } catch (err) {

        console.error("Error parsing package.json", err);
        return reject(new Error("Could not get package.json as JSON"));

      }

      try {
        Promise.all([
          fetchDemoIndex(org, repoName, meta),
          fetchUsage(meta)
        ]).spread((data, usage) => {
          return resolve(Object.assign({}, data, {usage}));
        });

      } catch (err) {

        console.error(`Error fetching demo index for ${org}/${repoName}`, err);
        return reject(err);

      }

    });
  });
};

module.exports = fetchRepo;
