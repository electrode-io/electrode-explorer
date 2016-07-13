import isEmpty from "lodash/isEmpty";
import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconBuilder, generateBeacon } from "../beacon/p13n-beacon";
import map from "lodash/map";
const type = require("@walmart/canary-event-pattern/type");

export const ssrBeaconAnalytics = (occurrence, canary) => {
  let action;
  let beaconData;
  const stateObj = occurrence.get("state");
  const { irsDataMap, resultDetail, visitorId } = stateObj.state.recommendationMap;
  if (!isEmpty(irsDataMap)) {
    map(irsDataMap, (irsData) => {
      beaconData = generateBeacon(irsData, resultDetail, visitorId);
      delete beaconData.action;
      delete beaconData.action_type;
      action = beaconBuilder(irsData.placementId, "PLACEMENT", "placed", beaconData, {});
      canary.dispatch(action);
    });
  }
};

export const csrBeaconAnalytics = (occurrence, canary) => {
  let action;
  let beaconData;
  const stateObj = occurrence.get("state");
  const { irsDataMap, resultDetail, visitorId } = stateObj.state;
  if (!isEmpty(irsDataMap)) {
    map(irsDataMap, (irsData) => {
      beaconData = generateBeacon(irsData, resultDetail, visitorId);
      delete beaconData.action;
      delete beaconData.action_type;
      action = beaconBuilder(irsData.placementId, "PLACEMENT", "placed", beaconData, {});
      canary.dispatch(action);
    });
  }
};

export const p13nPlacementBeacon = (canary) => {
  const ssrSequence = createSequence(canary.event, [
    pattern.label("state").match({
      _type: "redux-initial-state",
      "state.recommendationMap": type.defined
    })
  ]);

  const csrSequence = createSequence(canary.event, [
    pattern.label("state").match({
      _type: "redux-new-state",
      "state.irsDataMap": type.defined
    })
  ]);

  ssrSequence((occurrence) => {
    ssrBeaconAnalytics(occurrence, canary);
  });

  csrSequence((occurrence) => {
    csrBeaconAnalytics(occurrence, canary);
  });

};

p13nPlacementBeacon.identifier = "p13nPlacementBeacon";

export default p13nPlacementBeacon;
