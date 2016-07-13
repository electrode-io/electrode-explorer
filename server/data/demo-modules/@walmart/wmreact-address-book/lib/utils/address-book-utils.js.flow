import isEmpty from "lodash/isEmpty";

export const addEvent = (elem, type, eventHandle) => {
  if (elem === null || typeof (elem) === "undefined") {
    return;
  }
  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent(`on${type}`, eventHandle);
  } else {
    elem[`on${type}`] = eventHandle;
  }
};

export const removeEvent = (elem, type, eventHandle) => {
  if (elem === null || typeof (elem) === "undefined") {
    return;
  }
  if (elem.removeEventListener) {
    elem.removeEventListener(type, eventHandle, false);
  } else if (elem.detachEvent) {
    elem.detachEvent(`on${type}`, eventHandle);
  } else {
    elem[`on${type}`] = null;
  }
};

export const formatPhone = (phoneNumber) => {
  if (!isEmpty(phoneNumber)) {
    return phoneNumber.toString()
      // Normalize by removing all non-digits
      .replace(/[^\d]/g, "")
      // Remove US country code if present
      .replace(/^[1]/, "")
      // Add parentheses/space/hyphen and return
      .replace(/(^.{3})(.{3})/, "($1) $2-");
  }

  return "";
};
