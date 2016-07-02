var Hapi = require("hapi");
var Boom = require("boom");

var TIMEOUT = 700;

var server = new Hapi.Server();
server.connection({
  host: "localhost",
  port: 4001,
  routes: {
    cors: {
      credentials: true
    }
  }
});

server.route({
  method: "POST",
  path: "/account/api/signin",
  handler: function (request, reply) {
    var payload = request.payload;

    if(payload.username === "goodemail@test.com") {
      setTimeout(function () {
        reply({
          "status":"OK",
          "payload": {
            "firstName": "demofirst",
            "lastName": "demolast",
            "emailAddress": "goodemail@test.com",
            "cid":"00000000-00000000-00000000-00000001",
            "customerId":"00000000-00000000-00000000-00000001",
            "omsCustomerId":"0000000001"
          }
        });
      }, TIMEOUT);
    } else {
      setTimeout(function () {
        var error = Boom.forbidden();
        error.output.payload = {code: "user_auth_fail"};
        error.reformat();
        reply(error);
      }, TIMEOUT);
    }
  }
});

server.route({
  method: "POST",
  path: "/account/api/signup",
  handler: function (request, reply) {
    var payload = request.payload;

    if(payload.username === "goodemail@test.com") {
      setTimeout(function () {
        reply({
          "firstName": "demofirst",
          "lastName": "demolast",
          "emailAddress": "goodemail@test.com",
          "cid":"00000000-00000000-00000000-00000001"
        });
      }, TIMEOUT);
    } else {
      setTimeout(function () {
        var error = Boom.forbidden();
        error.output.payload = {code: "account_already_exist"};
        error.reformat();
        reply(error);
      }, TIMEOUT);
    }
  }
});

server.route({
  method: "POST",
  path: "/account/api/forgotpassword",
  handler: function (request, reply) {
    var payload = JSON.stringify(request.payload);

    setTimeout(function () {
      if (payload.indexOf("error") === -1) {
        reply({
          "status": "OK"
        });
      } else {
        var error = Boom.badData();
        error.output.payload = {
          "message": "Some error message from the server",
          "validation": {"source": "payload", "keys": ["email"]}
        };

        reply(error);
      }
    }, TIMEOUT);
  }
});

server.route({
  method: "POST",
  path: "/account/api/resetpassword",
  handler: function (request, reply) {
    var payload = JSON.stringify(request.payload);

    setTimeout(function () {
      if (payload.indexOf("error") === -1) {
        reply({
          "status": "OK"
        });
      } else {
        var error = Boom.badData();
        error.output.payload = {
          "message": "Some error message from the server",
          "validation": {"source": "payload", "keys": ["passCode"]}
        };

        reply(error);
      }
    }, TIMEOUT);
  }
});

server.start(function () {
  console.log("Server running at:", server.info.uri);
});
