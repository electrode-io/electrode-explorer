import * as automationUtils from "src/index";
import sinon from "sinon";

describe("Automation id instance method tests", () => {
  let sandbox;
  let getDataAutomationId;
  beforeEach(() => {
    getDataAutomationId = automationUtils.getDataAutomationId;
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("getDataAutomationId", () => {
    describe("when automation id requested for non production envs", () => {
      beforeEach(() => {
        sandbox.stub(process, "env", {"NODE_ENV": "test"});
      });

      describe("with both id and context", () => {
        it("should combine both id and context", () => {
          expect(getDataAutomationId("someId", "someContext"))
            .to.eql("someContext-someId");
        });
      });

      describe("with only id and no context", () => {
        it("should combine both id and context", () => {
          expect(getDataAutomationId("someId")).to.eql("someId");
        });
      });

      describe("with no id and no context", () => {
        it("should combine both id and context", () => {
          expect(getDataAutomationId()).to.be.undefined;
        });
      });
    });

    describe("when automation id requested for production env", () => {
      beforeEach(() => {
        sandbox.stub(process, "env", {"NODE_ENV": "production"});
      });

      it("should not return any id", () => {
        expect(getDataAutomationId("someId", "someContext")).to.be.undefined;
      });
    });
  });

  describe("getDataAutomationIdPair", () => {
    let getDataAutomationIdPair;
    let automationId;
    beforeEach(() => {
      getDataAutomationIdPair = automationUtils.getDataAutomationIdPair;
      automationId = getDataAutomationId("id", "context");
    });

    describe("while in production", () => {
      beforeEach(() => {
        sandbox.stub(process, "env", {"NODE_ENV": "production"});
      });

      it("should return an empty object", () => {
        expect(getDataAutomationIdPair("id", "context")).to.deep.equal({
          "data-tl-id": automationId
        });
      });
    });

    describe("while not in production", () => {
      beforeEach(() => {
        sandbox.stub(process, "env", {"NODE_ENV": "test"});
      });

      it("should return an object with a data-automation-id", () => {
        expect(getDataAutomationIdPair("id", "context")).to.deep.equal({
          "data-automation-id": automationId
        });
      });
    });
  });
});
