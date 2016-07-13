import addressFormValidator from "src/validation/create-address-form-validator";

describe("createAddressFormValidator", () => {
  it("is a function that returns a function", () => {
    expect(addressFormValidator).to.be.a("function");
    expect(addressFormValidator()).to.be.a("function");
  });
});
