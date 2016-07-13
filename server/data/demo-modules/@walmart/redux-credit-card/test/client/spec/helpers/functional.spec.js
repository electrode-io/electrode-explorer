describe("functional", () => {
  describe("replaceWith", () => {
    const replaceWith = require("src/helpers/functional").replaceWith;
    it("place a new item last if no replacement target is found", () => {
      const result = replaceWith([], {id: "1"}, {id: "1", foo: "bar"});
      expect(result.length).to.equal(1);
    });
  });
});
