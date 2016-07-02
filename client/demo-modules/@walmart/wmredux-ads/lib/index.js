"use strict";

module.exports = {
  Ads: require("./components/connected/ads").default,
  AdsReducers: require("./reducers/ads").default,
  showAdsAction: require("./actions/ads").showAdsAction
};