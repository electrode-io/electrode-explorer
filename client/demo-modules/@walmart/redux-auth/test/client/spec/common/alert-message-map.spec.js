import alertMessageMap from "src/common/alert-message-map";

describe("Alert message map", () => {
  it("should return the default alert object", () => {
    const alert = alertMessageMap.getAlert("an_invalid_code");

    expect(alert.message.replace(/ /g, ""))
      .to.equal(`Something went wrong with your request.
        Please try again later.`.replace(/ /g, ""));
    expect(alert.alertType)
      .to.equal("error");
  });
});
