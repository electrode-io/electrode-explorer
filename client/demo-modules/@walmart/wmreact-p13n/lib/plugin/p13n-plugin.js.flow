import { getIrsPluginPath } from "../routes/p13n-routes";
import { irsServiceFetch } from "../service/p13n-service";

const p13nPlugin = {
  apiRecommendationHandler() {
    return function (request, reply) {
      irsServiceFetch(request, reply);
    };
  },

  register: function register(server, options, next) {
    server.route({
      method: "GET",
      path: getIrsPluginPath(server.app.config.ui.basePath),
      handler: p13nPlugin.apiRecommendationHandler()
    });
    next();
  }
};

p13nPlugin.register.attributes = {
  name: "p13nPlugin",
  version: "0.0.1"
};

export default p13nPlugin;
