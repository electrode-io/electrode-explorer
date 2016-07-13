export const APMMessage = (data) => {
  return {
    _type: "apm",
    tags: ["apm"],
    data
  };
};

export const isAPMMessage = (message) => {
  return message._type === "apm";
};

export const beaconMessage = (data) => {
  return {
    _type: "beacon",
    data
  };
};

export const isBeaconMessage = (message) => {
  return message._type === "beacon";
};

export const logmonMessage = (data) => {
  return {
    _type: "logmon",
    tags: ["logmon"],
    data
  };
};

export const isLogmonMessage = (message) => {
  return message._type === "logmon";
};

export const isSplunkMessage = (message) => {
  return message._type === "splunk";
};

export const splunkMessage = (data) => {
  return {
    _type: "splunk",
    tags: ["splunk"],
    data
  };
};
