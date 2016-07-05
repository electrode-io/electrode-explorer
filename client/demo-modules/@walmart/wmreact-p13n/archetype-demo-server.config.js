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
          "artifactId": "p13n-demo",
          "artifactVersion": "",
          "cloudEnvironment": "qa",
          "cloud": "",
          "cloudDc": "",
          "environment": "qa",
          "node": ""
        }
      }
    }
  },
  "plugins": {
    "p13nPlugin": {
      "priority": 120,
      "enable": true,
      "module": "./src/plugin/p13n-plugin.js"
    }
  },
  "ui": {
    "basePath": "",
    "quimbyUrl": "http://quimby-stg.mobile.walmart.com/tempo",
    "p13nAPI": {
      "hostName": "http://localhost:3000",
      "url": "/api/p13n"
    }
  },
  "ccm": {
    "autoLoad": true,
    "interval": 300,
    "keys": {
      "groupA": {
        "profiles": {
          "default": {
            "scopeTemplate": "/{tenantid}/{environment}/{cloudEnvironment}/{deviceType}/{node}",
            "tenantid": "01",
            "environment": "stg"
          },
          "mobile": {
            "deviceType": "mobile"
          },
          "desktop": {
            "deviceType": ""
          }
        },
        "data": {
          "atlasP13n": {
            "serviceName": "atlas-p13n",
            "+configNames": [
              "irsConfig"
            ]
          }
        }
      }
    }
  }
};
require("@walmart/electrode-server")(config);
