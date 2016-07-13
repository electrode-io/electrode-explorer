import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";
import { beaconBuilder } from "../beacon/p13n-beacon";

const findGoToSlideClicks = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("goToSlide").match({ _type: "goToSlide" })
  ]);

  sequence(() => {
    const action = beaconBuilder("irs-401-b1", "PAGINATION", "right", {}, {});
    canary.dispatch(action);
  });
};

findGoToSlideClicks.identifier = "findGoToSlideClicks";

export default findGoToSlideClicks;
