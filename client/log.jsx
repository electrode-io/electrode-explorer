import { addLogMessage } from "./log-stream";
import { canary } from "./canary";

class Log {
  info(data) {
    this.log(["info"], data);
  }

  warn(data) {
    this.log(["warn"], data);
  }

  fatal(data) {
    this.log(["fatal"], data);
  }

  error(data) {
    this.log(["error"], data);
  }

  debug(data) {
    this.log(["debug"], data);
  }

  trace(data) {
    this.log(["trace"], data);
  }

  log(level, data) {
    addLogMessage({tags: level, data});
    canary.process({
      type: "_log",
      level,
      content: data
    });
  }
}

export const log = new Log();
