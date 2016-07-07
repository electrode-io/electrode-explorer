describe("fetch", () => {
  describe("postJson", () => {
    it("should serialize the data", () => {
      const request = require("src/redux/action-creators/fetch").postJson("someurl", {foo: "bar"});
      expect(request.payload.params.body.indexOf("foo")).to.not.equal(-1);
    });
  });
});
