import passwordChecker from "src/common/password-checker";

describe("Password Checker", () => {
  it("should return empty object", () => {
    expect(passwordChecker()).to.be.empty;
  });
});
