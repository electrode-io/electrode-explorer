import createAddressBookActions from "src/actions/address-book-actions";

describe("Address Book actions", () => {
  describe("export type", () => {
    it("exports a function", () => {
      expect(createAddressBookActions).to.be.a("function");
    });
  });

  describe("return value of exported function", () => {
    it("returns an object which contains action creators", () => {
      const configuredActions = createAddressBookActions();

      expect(configuredActions).to.be.an("object");
      expect(configuredActions.select).to.be.a("function");
    });
  });
});
