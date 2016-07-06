// TODO: Add Flow validations JIRA: https://jira.walmart.com/browse/GPRDT-193
import {SET_FOOTER_REFERENCE_ID} from "../types";

export const referenceId = (state = "", action) => {
  switch (action.type) {
  case SET_FOOTER_REFERENCE_ID:
    return action.referenceId;
  default:
    return state;
  }
};
