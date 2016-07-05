import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconBuilder } from "../beacon/p13n-beacon";

const findPreviousSlideClicks = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("previousSlide").match({ _type: "previousSlide" })
  ]);

  sequence(() => {
    const action = beaconBuilder("irs-401-b1", "PAGINATION", "left", {}, {});
    canary.dispatch(action);
  });
};

findPreviousSlideClicks.identifier = "findPreviousSlideClicks";

export default findPreviousSlideClicks;
