"use strict";

var plugin = {};

plugin.register = function (server, options, next) {
  server.route({
    method: "POST",
    path: (options.apiBase ? options.apiBase : "/api/") + "logger",
    handler: function (request, reply) {
      request.log(["payload"], JSON.stringify(request.payload, null, 2));
      reply({});
    }
  });
  next();
};

plugin.register.attributes = {
  name: "simpleLoggingPlugin",
  version: "0.0.1"
};

module.exports = plugin;
