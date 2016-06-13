import ExecutionEnvironment from "exenv";

import { fetch } from "@walmart/electrode-fetch";

let _stream = [];

if (false && ExecutionEnvironment.canUseDOM) {
  window.setInterval(() => {
    if (_stream.length > 0) {
      fetch("/electrode-gs/api/logger", {
        disableAnalytics: true,
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_stream)
      });
      _stream = [];
    }
  }, 1000);
}

export const addLogMessage = (msg) => {
  _stream.push(msg);
};
