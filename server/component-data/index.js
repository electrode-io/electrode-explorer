"use strict";

/* Handles updating (or creating) the component
 * data for demoing. Implemented in the server
 * as we want to be able to flash updates after
 * the server is up and running, without requiring
 * a restart */
const Path = require("path");
const updateHandler = require("./update-handler");
const fetchDocHandler = require("./fetch-doc");

const ComponentData = {};

ComponentData.register = (server, options, next) => {

  server.route({
    path: "/explorer/api/update/repo/{org}/{repoName}",
    method: "POST",
    handler: updateHandler
  });

  server.route({
    path: "/explorer/api/doc/{org}/{repoName}",
    method: "GET",
    handler: fetchDocHandler
  });

  server.route({
    method: "GET",
    path: "/explorer/data/{param*}",
    handler: {
      directory: {
        path: Path.join(__dirname, "../data"),
        listing: true
      }
    }
  });

  server.route({
    method: "GET",
    path: "/explorer/img/electrode.svg",
    handler: function (request, reply) {
      reply.file(Path.join(__dirname, "../../client/images/electrode.svg"));
    }
  });

  return next();

};

ComponentData.register.attributes = {
  name: "componentData",
  version: "1.0.0"
};

module.exports = ComponentData;
