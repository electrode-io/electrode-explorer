import signInReducer from "src/reducers/sign-in";
import * as actionTypes from "src/actions/action-types";

describe("Sign in reducer", () => {
  it("should return a started loading state", () => {
    expect(signInReducer({}, {type: actionTypes.START_SIGN_IN}))
      .to.have.property("loading")
      .and.to.equal(true);
  });

  it("should return an ended loading state", () => {
    expect(signInReducer({}, {type: actionTypes.END_SIGN_IN}))
      .to.have.property("loading")
      .and.to.equal(false);
  });
});
