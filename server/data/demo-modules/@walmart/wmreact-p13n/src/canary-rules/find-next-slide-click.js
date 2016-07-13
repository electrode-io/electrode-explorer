import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconBuilder } from "../beacon/p13n-beacon";

const findNextSlideClicks = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("nextSlide").match({ _type: "nextSlide" })
  ]);

  sequence(() => {
    const action = beaconBuilder("irs-401-b1", "PAGINATION", "right", {}, {});
    canary.dispatch(action);
  });
};

findNextSlideClicks.identifier = "findNextSlideClicks";

export default findNextSlideClicks;
