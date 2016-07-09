"use strict";

const ApplyToAll = require("./apply-to-all");
const AsyncFetchUsageDetail = require("./server/component-data/async-fetch-usage-detail");

ApplyToAll((file) => {

  UpdateFile(file, (repoData) => {

    if (repoData.usage && typeof repoData.usage[0] === "string") {
      AsyncFetchUsageDetail(repoData.meta);
    }

    return;

  });

});
