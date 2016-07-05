const config = {
  "services": {
    "consumerId": "91e1b78e-261b-4676-8317-4cf5bfa24a42",
    "privateKey": {
      "file": "config/private-key-qa.pem",
      "version": 2,
      "algorithm": "RSA",
      "encoding": "PKCS#8"
    },
    "providers": {
      "@walmart/electrode-ccm-client": {
        "options": {
          "artifactId": "wpa-demo",
          "artifactVersion": "",
          "cloudEnvironment": "",
          "cloud": "",
          "cloudDc": "",
          "environment": "prod",
          "node": ""
        }
      }
    }
  },
  "plugins": {
    "wpaPlugin": {
      "enable": true,
      "module": "./src/plugin/wpa-plugin.js"
    }
  },
  "ui": {
    "basePath": ""
  },
  "ccm": {
    "autoLoad": true,
    "interval": 120,
    "uiFilter": {
      "$..midasConfig": [
        ".*"
      ]
    },
    "sources": [
      "defaults",
      "snapshot",
      "service"
    ],
    "keys": {
      "root": {
        "profiles": {
          "default": {
            "cloudEnvironment": "DEV",
            "environment": "dev"
          }
        },
        "data": {
          "midasConfig": {
            "scopeTemplate": "/{environment}/{cloudEnvironment}",
            "serviceName": "wmreact-ads",
            "+configNames": [
              "javascript",
              "status",
              "features"
            ]
          }
        }
      }
    }
  }
};
require("@walmart/electrode-server")(config);
