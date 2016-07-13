import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconBuilder } from "../beacon/p13n-beacon";
import findLastKey from "lodash/findLastKey";

export const p13nBootstrapBeaconAnalytics = (occurrence, canary) => {
  const stateObj = occurrence.get("state");
  const { irsDataMap, opts } = stateObj.action;
  if (irsDataMap) {
    const lastKey = findLastKey(irsDataMap);
    const action = beaconBuilder(opts.page, "BOOTSTRAP", "success", {
      "module_id": irsDataMap[lastKey].placementId,
      "module": opts.page,
      "client_guid": opts.clientGuid
    }, {});
    canary.dispatch(action);
  }
};

export const p13nBootstrapBeacon = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("state").match({
      _type: "redux-action",
      "action.type": "RECEIVE_IRSDATAMAP"
    })
  ]);

  sequence((occurrence) => {
    p13nBootstrapBeaconAnalytics(occurrence, canary);
  });
};

p13nBootstrapBeacon.identifier = "p13nBootstrapBeacon";

export default p13nBootstrapBeacon;
