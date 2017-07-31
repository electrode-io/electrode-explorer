"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("electrode-confippet").config;
const github = new GitHubApi(Config.githubApi);
const REPOS_USAGE_INCLUDE = Config.REPOS_USAGE_INCLUDE;
const REPOS_USAGE_EXCLUDE = Config.REPOS_USAGE_EXCLUDE;
const contentToString = require("../utils/content-to-string");
const checkVersion = require("../utils/check-version");
const githubAuthObject = require("../utils/github-auth-object");
const uniqBy = require("lodash/uniqBy");

const shouldIncludeRepo = repo => {
  let shouldExclude = false;
  REPOS_USAGE_EXCLUDE.some(r => {
    if (repo.indexOf(r) !== -1) {
      shouldExclude = true;
      return true;
    }
  });
  return !shouldExclude && REPOS_USAGE_INCLUDE.some(org => repo.indexOf(org) === 0);
};

const getOrgRepo = uri => {
  if (!uri || typeof uri !== "string") {
    throw new Error("uri problem for ", JSON.stringify(uri));
  }

  const parts = uri.replace("://", "").split("/");
  return {
    org: parts[1],
    repo: parts[2]
  };
};

const getVersion = (moduleSearchedFor, moduleVersion, githubUri) => {
  github.authenticate(githubAuthObject);

  const orgRepo = getOrgRepo(githubUri);

  return new Promise((resolve, reject) => {
    if (typeof githubUri !== "string") {
      return reject("Not a string");
    }

    github.repos.getContent(
      {
        user: orgRepo.org,
        repo: orgRepo.repo,
        path: "package.json"
      },
      (err, res) => {
        if (err) {
          return reject(err);
        }

        const pkg = JSON.parse(contentToString(res.content));

        const version =
          (pkg.dependencies && pkg.dependencies[moduleSearchedFor]) ||
          (pkg.devDependencies && pkg.devDependencies[moduleSearchedFor]) ||
          "unknown";

        return resolve({
          uri: githubUri,
          displayName: `${orgRepo.org}/${orgRepo.repo}`,
          version: checkVersion(moduleVersion, version),
          description: pkg.description
        });
      }
    );
  });
};

const searchUsage = (moduleName, page, items) => {
  const opts = {
    q: `${moduleName}:+in:file+language:json+filename:package.json`,
    page,
    per_page: 100
  };

  return new Promise((resolve, reject) => {
    github.search.code(opts, (err, res) => {
      if (err) {
        console.log("error fetchUsage", err);
        return reject(err);
      }
      res.data.items.forEach(item => {
        items.push(item);
      });

      if (res.data.items.length < 100) {
        return resolve(items);
      }

      return resolve(searchUsage(moduleName, page + 1, items));
    });
  });
};

const fetchUsage = meta => {
  github.authenticate(githubAuthObject);

  const moduleParts = meta.name.split("/");
  const moduleName = moduleParts[1] || meta.name;
  const items = [];

  return searchUsage(moduleName, 0, items).then(items => {
    const promises = [];
    const usage = [];
    items.forEach(item => {
      if (
        meta.github.indexOf(item.repository.html_url) === -1 &&
        shouldIncludeRepo(item.repository.full_name)
      ) {
        const promise = getVersion(meta.name, meta.version, item.repository.html_url)
          .then(detail => {
            usage.push(detail);
          })
          .catch(err => {
            if (err.code === 404) {
              console.log("Missing package.json?: " + meta.github);
            } else {
              console.log(err);
            }
          });
        promises.push(promise);
      }
    });

    return Promise.all(promises).then(() => {
      usage.sort(function compare(a, b) {
        if (a.displayName < b.displayName) {
          return -1;
        }
        if (a.displayName > b.displayName) {
          return 1;
        }
        return 0;
      });
      return uniqBy(usage, "uri");
    });
  });
};

module.exports = fetchUsage;
