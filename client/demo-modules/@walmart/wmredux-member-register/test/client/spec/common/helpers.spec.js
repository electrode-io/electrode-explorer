import { getDefaultEmail, handleResponse } from "src/common/helpers";
import Promise from "bluebird";

describe("Helpers", () => {
  let sandbox = null;
  let success = null;
  let error = null;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    success = sandbox.spy();
    error = sandbox.spy();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should return the transient state", () => {
    const result = getDefaultEmail({
      customer: {email: "default@state.com"},
      signUp: {tempForm: {email: "transient@state.com"}}
    });

    expect(result).to.equal("transient@state.com");
  });

  it("should throw error object", () => {
    const result = handleResponse(
        Promise.reject({email: "abc@gmail.com", password: "password"}), success, error,
        {});
    return result.then(() => {throw new Error("unexpected");}, () => {});
  });
  it("should not throw error object", () => {
    const result = handleResponse(Promise.reject({}), success, error, {});
    return result;
  });

});
