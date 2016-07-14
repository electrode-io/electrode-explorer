"use strict";

const ApplyToAll = require("./apply-to-all");
const UpdateFile = require("./update-file");

const checkVersion = require("../server/component-data/utils/check-version");

ApplyToAll((file) => {

  UpdateFile(file, (repoData) => {

    if (repoData.usage && typeof repoData.usage[0] === "object" && repoData.usage[0].version) {
      repoData.usage.forEach((consumer, i) => {
        repoData.usage[i].version = checkVersion(repoData.meta.version, consumer.version);
      });

      return repoData;

    }

    return;

  });
});
