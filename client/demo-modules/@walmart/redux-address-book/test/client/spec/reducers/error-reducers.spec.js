import * as reducers from "src/reducers/error-reducers";

const dummyState = {
  foo: "bar",
  alert: {},
  invalidAddressError: {}
};

const dummyAction = {
  payload: {message: "Compound Fiasco"}
};

describe("Error Reducers", () => {
  it("should return new state with cleared errors", () => {
    expect(reducers.clearError(dummyState)).to.deep.equal({
      foo: "bar",
      alert: null,
      invalidAddressError: null
    });
  });

  it("should return new state generic error", () => {
    expect(reducers.setError(dummyState, dummyAction)).to.deep.equal({
      foo: "bar",
      alert: {
        message: "Compound Fiasco",
        alertType: "warning"
      },
      invalidAddressError: {}
    });
  });

  it("should return new invalid address error", () => {
    const action = {
      payload: {responseCode: "FOO"}
    };

    expect(reducers.setError(dummyState, action)).to.deep.equal({
      foo: "bar",
      alert: {},
      invalidAddressError: {
        responseCode: "FOO"
      }
    });
  });
});
