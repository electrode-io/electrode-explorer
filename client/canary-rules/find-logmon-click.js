import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";

import { logmonMessage } from "@walmart/wmreact-analytics";

export const findLogmonClick = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern
      .label("click")
      .match({
        _type: "click",
        props: { analyticsID: "ship-now" }
      })
  ]);

  sequence((occurrence) => {
    const click = occurrence.get("click").event;

    const event = {
      type: "click",
      clientX: click.clientX,
      clientY: click.clientY,
      screenX: click.screenX,
      screenY: click.screenY,
      shiftKey: click.shiftKey,
      altKey: click.altKey,
      ctrlKey: click.ctrlKey,
      target: {
        baseURI: click.target.baseURI,
        localName: click.target.localName,
        className: click.target.className
      }
    };

    canary.dispatch(
      logmonMessage(event)
    );
  });
};

findLogmonClick.identifier = "findLogmonClick";
