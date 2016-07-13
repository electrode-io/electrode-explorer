import * as utils from "src/utils/address-book-utils";
import changedFieldsFlags from "src/enums/changed-fields-flags";

const dummyAddress = {
  addressLineOne: "123 Main St",
  addressLineTwo: "apt 1",
  city: "O'Connor Heights",
  state: "",
  postalCode: "LS3 6EU"
};


describe("Address Book Utils", () => {
  describe("cleanseAddressData", () => {
    it("makes sure `country` key, if exists, is renamed to `countryCode`", () => {
      expect(utils.cleanseAddressData({
        country: "hello"
      })).to.deep.equal({countryCode: "hello"});
    });
  });

  describe("cleanseAddressRequest", () => {
    it("whitelists the allowed keys in an address object", () => {
      expect(utils.cleanseAddressRequest({
        ...dummyAddress,
        foo: "bar"
      }).foo).to.not.exist;
    });

    it("can optionally allow `isDefault` key", () => {
      expect(utils.cleanseAddressRequest({
        ...dummyAddress,
        isDefault: true
      }, true).isDefault).to.exist;
    });

    it("normalizes whitespace", () => {
      expect(utils.cleanseAddressRequest({
        ...dummyAddress,
        state: "Cali\n"
      }).state).to.equal("Cali ");
    });

    it("removes apostrophe from `city` key", () => {
      expect(
        utils.cleanseAddressRequest(dummyAddress).city
      ).to.equal(dummyAddress.city.replace(/'/g, " "));
    });
  });

  describe("getChangedFieldsArray", () => {
    it("returns an array of flags representing the changed keys in an address", () => {
      expect(utils.getChangedFieldsArray({
        oldAddress: dummyAddress,
        newAddress: {...dummyAddress, city: "foo"}
      })).to.be.an("array");
    });

    it("maps each changed key to a value from `changedFieldsFlags` enum", () => {
      expect(utils.getChangedFieldsArray({
        oldAddress: dummyAddress,
        newAddress: {...dummyAddress, city: "foo"}
      })).to.deep.equal([changedFieldsFlags.city]);

      expect(utils.getChangedFieldsArray({
        oldAddress: dummyAddress,
        newAddress: {...dummyAddress, city: "foo", firstName: "bar"}
      })).to.deep.equal([
        changedFieldsFlags.city,
        changedFieldsFlags.firstName
      ]);
    });

    it("does not add the same flag twice", () => {
      expect(utils.getChangedFieldsArray({
        oldAddress: dummyAddress,
        newAddress: {...dummyAddress, addressLineOne: "foo", addressLineTwo: "bar"}
      })).to.deep.equal([
        changedFieldsFlags.addressLineOne
      ]);

      expect(utils.getChangedFieldsArray({
        oldAddress: dummyAddress,
        newAddress: {...dummyAddress, addressLineOne: "foo", addressLineTwo: "bar"}
      })).to.deep.equal([
        changedFieldsFlags.addressLineTwo
      ]);
    });
  });
});
