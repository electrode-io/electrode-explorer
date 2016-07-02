import signInWidgetReducer from "src/reducers/sign-in-widget";
import {POSSIBLE_STATES} from "src/actions/widget";
import {REQUEST_PASSWORD_TOKEN_SUCCESS} from "src/actions/action-types";

describe("Sign in reducer", () => {
  it("should go to reset password if a password token is successfully generated", () => {
    expect(signInWidgetReducer({}, {type: REQUEST_PASSWORD_TOKEN_SUCCESS}))
      .to.have.property("currentState")
      .and.to.equal(POSSIBLE_STATES.RESET_PASSWORD);
  });
});
