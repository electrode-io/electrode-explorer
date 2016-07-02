import alertMessageMap from "src/common/alert-message-map";

describe("Alert message map", () => {
  it("should return the default alert object", () => {
    const alert = alertMessageMap.getAlert("an_invalid_code");

    expect(alert.message.replace(/ /g, ""))
      .to.equal(`We're having trouble with your request.
        Please wait a moment and then try again.`.replace(/ /g, ""));
    expect(alert.alertType)
      .to.equal("error");
  });
});
