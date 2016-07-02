const createSequence = require("@walmart/canary-event-sequence");
const pattern = require("@walmart/canary-event-pattern");

const findClicks = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern().match({ event: "onClick" })
  ]);
  sequence((occurrence) => {
    canary.dispatch({
      event: occurrence.events[0].event
    });
  })
};

findClicks.identifier = "findClicks";

export default findClicks;
