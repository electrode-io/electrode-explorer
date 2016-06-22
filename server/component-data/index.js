"use strict";

/* Handles updating (or creating) the component
 * data for demoing. Implemented in the server
 * as we want to be able to flash updates after
 * the server is up and running, without requiring
 * a restart */
const Path = require("path");
const UpdateHandler = require("./update-handler");

const ComponentData = {};

ComponentData.register = (server, options, next) => {

  server.route({
    path: "/portal/api/update/repo/{org}/{repoName}",
    method: "POST",
    handler: UpdateHandler
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

  // Temporary Example
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
