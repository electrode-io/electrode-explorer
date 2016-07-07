describe("gift cards reducer", () => {
  describe("add card", () => {
    const reducer = require("src/redux/reducers/gift-cards").default;
    it("should replace existing item if found", () => {
      const result = reducer({cards: [{id: "1"}]}, {
        type: "CREATE_GIFT_CARD_SUCCESS",
        payload: {id: "1", foo: "bar"}
      });
      expect(result.cards.length).to.equal(1);
      expect(result.cards[0]).to.have.property("foo", "bar");
    });

    it("should add item if not found", () => {
      const result = reducer({cards: []}, {
        type: "CREATE_GIFT_CARD_SUCCESS",
        payload: {id: "1", foo: "bar"}
      });
      expect(result.cards.length).to.equal(1);
    });
  });
});
