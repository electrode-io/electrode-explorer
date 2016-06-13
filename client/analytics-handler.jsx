/*global console*/
import { addLogMessage } from "./log-stream";
import { safeEventBuilder } from "./helpers/safe-event-builder";

export const analyticsHandler = (evt) => {
  if (evt._type === "log") {
    addLogMessage({
      tags: [evt.level],
      data: {
        content: evt.content,
        context: evt.context
      }
    });
    if (process.env.NODE_ENV !== "production") {
      console.log(["log", evt.level, evt.content]); // eslint-disable-line no-console
    }
  } else {
    /* eslint-disable no-lonely-if */
    if (process.env.NODE_ENV !== "production") {
      console.log(evt); // eslint-disable-line no-console
    }
    addLogMessage({tags: ["info"], data: safeEventBuilder(evt)});
  }
};
