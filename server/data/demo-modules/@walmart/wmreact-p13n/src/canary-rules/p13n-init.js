import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconBuilder } from "../beacon/p13n-beacon";

export const p13nInitBeaconAnalytics = (occurrence, canary) => {
  const stateObj = occurrence.get("state");
  const { page, clientGuid } = stateObj.action.opts;
  const action = beaconBuilder(page, "INIT", "inited", {
    "client_guid": clientGuid
  }, {});
  canary.dispatch(action);
};

export const p13nInitBeacon = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("state").match({
      _type: "redux-action",
      "action.type": "REQUEST_RECOMMENDATION"
    })
  ]);

  sequence((occurrence) => {
    p13nInitBeaconAnalytics(occurrence, canary);
  });
};

p13nInitBeacon.identifier = "p13nInitBeacon";

export default p13nInitBeacon;
