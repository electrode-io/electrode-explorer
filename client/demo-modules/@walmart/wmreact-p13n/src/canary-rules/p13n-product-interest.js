import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconBuilder } from "../beacon/p13n-beacon";

export const p13nProductInterestBeaconAnalytics = (occurrence, canary) => {
  const action = beaconBuilder("irs-401-b1", "PRODUCT_INTEREST", "tile", {}, {});
  canary.dispatch(action);
};

export const p13nProductInterestBeacon = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("state").match({_type: "redux-action", "action.type": "P13N_TILE_CLICKED"})
  ]);

  sequence(() => {
    p13nProductInterestBeaconAnalytics(canary);
  });
};

p13nProductInterestBeacon.identifier = "p13nProductInterestBeacon";

export default p13nProductInterestBeacon;
