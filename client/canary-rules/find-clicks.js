import createSequence from "@walmart/canary-event-sequence";
import pattern from "@walmart/canary-event-pattern";

import { beaconMessage } from "@walmart/wmreact-analytics";

export const findClicks = (canary) => {
  const sequence = createSequence(canary.event, [
    pattern.label("click").match({ _type: "click" })
  ]);

  sequence((occurrence) => {
    const click = occurrence.get("click").event;
    const event = {
      event: {
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
      }
    };

    canary.dispatch(
      beaconMessage([
        "_tagAction",
        "MyContext",
        "My_Action",
        "MyReportingID",
        [
          [
            "mobile",
            "rawjson",
            JSON.stringify(event)
          ]
        ]
      ])
    );
  });
};

findClicks.identifier = "findClicks";
