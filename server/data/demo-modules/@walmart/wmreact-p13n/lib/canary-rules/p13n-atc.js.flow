import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconBuilder } from "../beacon/p13n-beacon";

export const p13nAtcBeaconAnalytics = (occurrence, canary) => {
  const stateObj = occurrence.get("state");
  const { configId, placementId, productId } = stateObj.action.item;
  const action = beaconBuilder(`irs-${configId}-${placementId}`,
    "ADD_TO_CART_ON_PAC", "init", {"item_id": productId});
  canary.dispatch(action);
};

export const p13nAtcBeacon = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("state").match({_type: "redux-action", "action.type": "P13N_ADD_TO_CART_REQUEST"})
  ]);

  sequence((occurrence) => {
    p13nAtcBeaconAnalytics(occurrence, canary);
  });
};

p13nAtcBeacon.identifier = "p13nAtcBeacon";

export default p13nAtcBeacon;
