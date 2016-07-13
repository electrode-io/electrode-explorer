import * as ActionCreators from "src/redux/action-creators/shipping-pass";

describe("ShippingPass action creators", () => {
  describe("export type", () => {
    it("exports functions", () => {
      expect(ActionCreators.getModalInfo).to.be.a("function");
      expect(ActionCreators.getSubscriptionStatus).to.be.a("function");
      expect(ActionCreators.updateAutoRenew).to.be.a("function");
      expect(ActionCreators.updatePaymentPref).to.be.a("function");
    });
  });
});
