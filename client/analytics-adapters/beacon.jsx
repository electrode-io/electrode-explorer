import ExecutionEnvironment from "exenv";

export const sendBeaconMessage = (message) => {
  if (ExecutionEnvironment.canUseDOM) {
    window._bcq.push(message);
  }
};
