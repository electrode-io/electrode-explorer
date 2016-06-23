"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("@walmart/electrode-ui-config");
const ghToken = Config.ui.automaticUpdate && process.env.GHACCESS_TOKEN;
const github = new GitHubApi(Config.ui.githubApi);
const createImports = require("./create-imports");

const handleLibraryScoping = (org, repoName, content) => {
  // fetch src/index.js(x)
  // get imports there - could be several formats :/
  // return array with path like it was from /demo
  github.authenticate({
    type: "oauth",
    token: ghToken
  });

  return new Promise((resolve, reject) => {
    github.repos.getContent({
      user: org,
      repo: repoName,
      path: "src/index.js"
    }, (err, response) => {
      if (err) {
        return reject(err);
      }

      const indexContent = new Buffer(response.content, "base64").toString("ascii");
      let ic = "";
      const localImports = [];

      // make these configurable so you can pass in a regex to match and a function to handle the replacement.
      if ((/export {\s?default/).test(indexContent)) {
        ic = indexContent.replace(/export {\s?default as ([\w-]+)\s?} from "([\.\/\-a-z]+)";/g, (m, ref, path) => {
          const modPath = path.replace("./", "../src/");
          localImports.push(`import ${ref} from "${modPath}";`);
          return `import ${ref} from "${modPath}";`;
        });
      }

      if ((/module\.exports/).test(indexContent)) {
        ic = indexContent.replace(/([\w]+):\s?require\("([\.\/\-a-z]+)"\)(?:\.default),?/g, (m, ref, path) => {
          const modPath = path.replace("./", "../src/");
          localImports.push(`import ${ref} from "${modPath}";`);
          return;
        });
      }

      // TODO: work out what other formats index.js can be in and handle those too
      return resolve(createImports(localImports));
    });
  });
};

module.exports = handleLibraryScoping;
