"use strict";

/* Handles updating (or creating) the component
 * data for demoing. Implemented in the server
 * as we want to be able to flash updates after
 * the server is up and running, without requiring
 * a restart */
const Fs = require("fs");
const Path = require("path");
const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("@walmart/electrode-ui-config");
const ghToken = Config.ui.automaticUpdate && process.env.GHACCESS_TOKEN;
const github = new GitHubApi(Config.github);

const getStyles = (moduleName, dirName, path) => {
  // Grab stylesheets, check for dependent stylesheets & install & copy
  // require them in component.jsx render? Want to keep them separate per
  // component in case of version differences
};

const parseDir = (moduleName, dirName, path) => {

  const automationNoop = "var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };";
  const automationReq = "var _automationIdUtils = require(\"@walmart/automation-utils/lib/utils/automation-id-utils\");";
  const demoModules = Path.join(__dirname, "../../client/demo-modules/", moduleName);

  Fs.readdir(path, (err, files) => {
    if (err) {
      throw err;
    }

    files.forEach((file) => {
      // Don't process non-JS files
      if (!(/\.js$/).test(file)) {
        if (!(/\./).test(file)) {
          // crude filter to only stat probable dirs
          Fs.stat(Path.join(path, "/", file), (err, stats) => {
            if (err) throw err;

            if (stats.isDirectory()) {
              parseDir(moduleName, `/${file}`, Path.join(path, "/", file));
            }
          });
        }

        return;
      }
      const rs = Fs.createReadStream(Path.join(path, "/", file));
      if (dirName !== "") {
        try {
          Fs.mkdirSync(Path.join(demoModules, dirName));
        } catch (e) {}
      }
      const ws = Fs.createWriteStream(Path.join(demoModules, dirName, "/", file));
      ws.on("error", (err) => {
        console.log(">>>>> wrote error for " + Path.join(demoModules, dirName, "/", file) + ", err::", err);
      });
      rs.on("error", (err) => {
        console.log(`>>>>> read error for ${file}`, err);
      });
      rs.on("data", (chunk) => {
        const ch = chunk.toString();
        ws.write(ch.replace(automationReq, automationNoop));
      });
      rs.on("end", () => {
        ws.end();
      });
    });
  });
};

const saveModuleDemo = (moduleName) => {

  const spawn = require("child_process").spawn;
  const npmi = spawn("npm", ["i", moduleName]);

  npmi.on("close", (code) => {
    if (code) {
      console.log(`npm install failed for this module, code: ${code}`);
    }

    console.log(`${moduleName}: npm install finished with code ${code}`);

    // ugly, check for them rather than blindly creating (existing ones aren't overwritten)
    const demoModules = Path.join(__dirname, "../../client/demo-modules");
    try {
      Fs.mkdirSync(demoModules);
    } catch (e) {}

    const moduleNameParts = moduleName.split("/");
    try {
      Fs.mkdirSync(Path.join(demoModules, "/", moduleNameParts[0]));
    } catch (e) {}
    if (moduleNameParts.length > 1) {
      try {
        Fs.mkdirSync(Path.join(demoModules, "/", moduleNameParts[0], "/", moduleNameParts[1]));
      } catch (e) {}
    }

    const moduleBase = Path.join(__dirname, "../../node_modules/", moduleName);
    getStyles(moduleName, "", Path.join(moduleBase, "/src/styles"));
    parseDir(moduleName, "", Path.join(moduleBase, "/lib"));
  });

};

const fetchComponentCode = (org, repoName, path) => {
  github.authenticate({
    type: "oauth",
    token: ghToken
  });

  return new Promise((resolve, reject) => {
    github.repos.getContent({
      user: org,
      repo: repoName,
      path: `demo${path}`
    }, (err, response) => {
      if (err) {
        return reject(err);
      }

      return resolve(new Buffer(response.content, "base64").toString("ascii"));
    });
  });
};

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
      return resolve(localImports);
    });
  });
};

const createImports = (im) => {
  const imports = [];

  im.forEach((importStr) => {
    const innerMatch = importStr.match(/import ([\w]*) from "\.\.\/src\/([a-z\-\/]*)(?:\.jsx)?";/);
    if (innerMatch) {
      imports.push({
        ref: innerMatch[1],
        path: innerMatch[2]
      });
    }
  });

  console.log("CreateImports, imports", imports);
  return imports;
};

const fetchRepo = (org, repoName, cb) => {
  github.authenticate({
    type: "oauth",
    token: ghToken
  });

  return new Promise((resolve, reject) => {
    github.repos.getContent({
      user: org,
      repo: repoName,
      path: "package.json"
    }, (err, res) => {
      if (err) {
        return reject(err);
      }

      const packageContent = new Buffer(res.content, "base64").toString("ascii");
      let pkg;
      try {
        pkg = JSON.parse(packageContent);
      } catch (e) {
        return reject(new Error("Could not get package.json as JSON"));
      }

      const meta = {
        name: pkg.name,
        title: pkg.title,
        description: pkg.description,
        github: res.html_url.replace("blob/master/package.json", ""),
        version: pkg.version
      };

      saveModuleDemo(meta.name);

      github.repos.getContent({
        user: org,
        repo: repoName,
        path: "demo/index.jsx"
      }, (err, response) => {
        if (err) {
          return reject(err);
        }

        const indexContent = new Buffer(response.content, "base64").toString("ascii");

        let imports = [];
        let im = indexContent.match(/import ([\w]*) from "\.\.\/src\/([a-z\-\/]*)(?:\.jsx)";/g)
        if (!im) {
          handleLibraryScoping(org, repoName, indexContent).then((im) => {
            imports = createImports(im);
          });
        } else {
          imports = createImports(im);
        }

        const m = indexContent.match(/Index\.Components\s?=\s?(\[[\w\W]*\]);/);
        if (!m) {
          return reject(new Error("no Index.Components specified"));
        }

        let componentsStr = m[1];
        componentsStr = componentsStr.replace(/require\((.*)\)/g, (m, p1) => p1);
        ["title", "examples", "options", "image", "synonyms", "type", "code", "noRender"].forEach((k) => {
          componentsStr = componentsStr.replace(new RegExp(`${k}:`, 'g'), `"${k}":`);
        });
        componentsStr = componentsStr.replace("\n", "");

        let components = [];
        try {
          components = JSON.parse(componentsStr);
        } catch (err) {
          return reject(new Error("JSON parsing failed for components"));
        }
        let pending = 0;
        components.forEach((component) => {
          component.examples.forEach((example) => {
            ++pending;
            fetchComponentCode(org, repoName, example.code.replace("raw!.", "")).then(
              (code) => {
                example.code = code;
                --pending;

                if (!pending) {
                  let sins = 0;
                  const sinful = setInterval(() => {
                    console.log("sinful interval");
                    console.log("imports", imports);
                    if (sins > 20) {
                      clearInterval(sinful);
                      return console.log("IMPORTS FAIL; GIVING UP");
                    }
                    ++sins;
                    if (imports.length) {
                      clearInterval(sinful);
                      return resolve({
                        meta: meta,
                        imports: imports,
                        components: components
                      });
                    }
                  }, 500);
                }
              }
            );
          });
        });
      });
    });
  });
};

const ComponentData = {};

ComponentData.register = (server, options, next) => {

  server.route({
    path: "/portal/api/update/repo/{org}/{repoName}",
    method: "POST",
    handler: function (request, reply) {

      if (!ghToken) {
        // No token? No automatic updates.
        return reply("Automatic updating requires a Github access token. No token found.");
      }

      const { org, repoName } = request.params;

      fetchRepo(org, repoName).then((result) => {
        const orgDataPath = Path.join(__dirname, `../data/${org}`);

        try {
          Fs.statSync(orgDataPath);
        } catch (err) {
          Fs.mkdirSync(orgDataPath);
        }

        Fs.writeFile(`${orgDataPath}/${repoName}.json`, JSON.stringify(result), (err) => {
          if (err) {
            return reply("An error occurred saving this repo");
          }

          // update the map of known orgs
          const orgMap = Path.join(__dirname, `../data/orgs.json`);
          let orgs = Fs.readFileSync(orgMap);
          try {
            orgs = JSON.parse(orgs);

            if (!orgs[org]) {
              orgs.orgs[org] = {
                repos: [],
                hash: {}
              };
            }

            if (!orgs[org].hash[repoName]) {
              orgs[org].hash[repoName] = 1;
              orgs.orgs[org].repos.push({
                name: repoName,
                link: `${org}/${repoName}`
              });
            }

            Fs.writeFileSync(orgMap, JSON.stringify(orgs));
          } catch (err) {
            console.error("Problem checking org map", err);
          }
          return reply(`${org}:${repoName} done`);
        });
      }).catch((e) => {
        return reply(`Error encountered: ${e.message}`);
      });
    }
  });

  server.route({
    method: "GET",
    path: "/portal/data/{param*}",
    handler: {
      directory: {
        path: Path.join(__dirname, "../data"),
        listing: true
      }
    }
  });

  // Move this after demo
  server.route({
    method: "GET",
    path: "/portal/img/electrode.png",
    handler: function (request, reply) {
      reply.file(Path.join(__dirname, "../../client/images/electrode.png"));
    }
  });

  return next();

};

ComponentData.register.attributes = {
  name: "portalComponentData",
  version: "1.0.0"
};

module.exports = ComponentData;
