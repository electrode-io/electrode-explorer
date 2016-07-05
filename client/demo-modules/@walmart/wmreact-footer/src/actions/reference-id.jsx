// TODO: Add Flow validations JIRA: https://jira.walmart.com/browse/GPRDT-193
import {SET_FOOTER_REFERENCE_ID} from "../types";
import Cookies from "@walmart/electrode-cookies";

export const setFooterReferenceId = () => {
  const bstcCookieValue = Cookies.get("bstc");
  let referenceId = "";
  if (bstcCookieValue) {
    referenceId = bstcCookieValue.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    // In rare case where there are less than 10 alphanumeric chars append "A" until there
    // are 10. Will produce deterministic result.
    const charsRemaining = 10 - referenceId.length;
    referenceId = (charsRemaining > 0 ? `${referenceId}AAAAAAAAAA` : referenceId).substr(0, 10);
  }
  return {
    type: SET_FOOTER_REFERENCE_ID,
    referenceId
  };
};
