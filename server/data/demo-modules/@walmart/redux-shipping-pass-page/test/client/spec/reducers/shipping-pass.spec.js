import subscriptionStatus from "src/redux/reducers/shipping-pass";

describe("shippingpass reducer", () => {
  describe("Check and update status", () => {
    const initialState = {
      autoRenew: true,
      cardInfo: {type: "VISA", digits: "0000"},
      cardStatus: "VALID",
      error: false,
      loading: true,
      modalContent: undefined,
      renewalDate: "January 1, 2017",
      success: false,
      trialStatus: false
    };
    it("should successfully get subscription status", () => {
      const result = subscriptionStatus(initialState, {
        type: "GET_SUBSCRIPTION_STATUS_SUCCESS",
        payload: {
          autoRenew: true,
          cardInfo: {type: "VISA", digits: "2725"},
          cardStatus: "EXPIRED",
          expiryDate: "2018-12-31T23:59:59.951Z",
          trialStatus: "SUBSCRIBED"
        }
      });
      expect(result.autoRenew).to.equal(true);
      expect(result.cardInfo).to.deep.equal({type: "VISA", digits: "2725"});
      expect(result.cardStatus).to.equal("EXPIRED");
      expect(result.error).to.equal(false);
      expect(result.loading).to.equal(false);
      expect(result.renewalDate).to.equal("December 31, 2018");
      expect(result.trialStatus).to.equal(false);
    });

    it("should successfully update Auto Renew status", () => {
      const result = subscriptionStatus(initialState, {
        type: "UPDATE_AUTO_RENEW_SUCCESS",
        payload: {
          autoRenew: false,
          cardInfo: {type: "VISA", digits: "2725"},
          cardStatus: "EXPIRED",
          expiryDate: "2018-12-31T23:59:59.951Z",
          trialStatus: "SUBSCRIBED"
        }
      });
      expect(result.autoRenew).to.equal(false);
      expect(result.cardInfo).to.deep.equal({type: "VISA", digits: "2725"});
      expect(result.cardStatus).to.equal("EXPIRED");
      expect(result.error).to.equal(false);
      expect(result.loading).to.equal(false);
      expect(result.renewalDate).to.equal("December 31, 2018");
      expect(result.trialStatus).to.equal(false);
    });

    it("should successfully update Payment Preference", () => {
      const result = subscriptionStatus(initialState, {
        type: "UPDATE_PAYMENT_PREF_SUCCESS",
        payload: {
          autoRenew: false,
          cardInfo: {type: "MASTERCARD", digits: "1234"},
          cardStatus: "EXPIRED",
          expiryDate: "2018-12-31T23:59:59.951Z",
          trialStatus: "SUBSCRIBED"
        }
      });
      expect(result.autoRenew).to.equal(false);
      expect(result.cardInfo).to.deep.equal({type: "MASTERCARD", digits: "1234"});
      expect(result.cardStatus).to.equal("EXPIRED");
      expect(result.error).to.equal(false);
      expect(result.loading).to.equal(false);
      expect(result.renewalDate).to.equal("December 31, 2018");
      expect(result.trialStatus).to.equal(false);
    });
  });
});
