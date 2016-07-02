import signUpReducer from "src/reducers/sign-up";
import * as actionTypes from "src/actions/action-types";

describe("Sign up reducer", () => {
  it("should return a started loading state", () => {
    expect(signUpReducer({}, {type: actionTypes.START_SIGN_UP}))
      .to.have.property("loading")
      .and.to.equal(true);
  });

  it("should return an ended loading state", () => {
    expect(signUpReducer({}, {type: actionTypes.END_SIGN_UP}))
      .to.have.property("loading")
      .and.to.equal(false);
  });
});
