import {i18n} from "src/common/helpers";

describe("Helpers", () => {
  let sandbox = null;

  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it("return the internationalized string", () => {
    const testStr = "some string";
    const processedString = i18n(testStr);

    //Dumb test because i18n is just a placeholder helper
    expect(processedString).to.equal(testStr);
  });
});
