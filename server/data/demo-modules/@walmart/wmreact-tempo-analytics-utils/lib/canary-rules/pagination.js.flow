import pattern from "@walmart/canary-event-pattern";
import ModuleAnalyticsUtils from "../utils/module-analytics-utils";
import { beaconMessage } from "@walmart/wmreact-analytics/lib/helpers/event-types";

const PAGINATION_TYPES = ["nextSlide", "previousSlide", "goToSlide"];

const paginationPattern = pattern.match((event) => {
  return PAGINATION_TYPES.indexOf(event.payload._type) !== -1;
});

const createPaginationMessage = (payload) => {
  return ModuleAnalyticsUtils.buildPaginationAnalytics(
    payload._type,
    payload.context.zoneId,
    payload.event.target);
};

export const pagination = (canary) => {
  canary.event((event) => {
    if (paginationPattern.matches(event)) {
      canary.dispatch(beaconMessage(createPaginationMessage(event.payload)));
    }
  });
};

pagination.identifier = "pagination";
