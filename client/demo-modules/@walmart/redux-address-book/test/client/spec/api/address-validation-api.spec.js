import STATUS from "src/enums/address-validation-status";
import {expect} from "chai";
import Promise from "bluebird";

const addressValidationApiInjector = require(
  "inject!src/api/address-validation-api"
);

const dummyAddress = {
  addressLineOne: "123 Main St",
  addressLineTwo: "apt 1",
  city: "O'Connor Heights",
  state: "",
  postalCode: "LS3 6EU"
};

describe("Address Validation API", () => {
  let addressApiValidationModule;
  let RESPONSE_TYPE;
  let configuredApi;
  let api;

  const fetchStub = sinon.stub();

  beforeEach(() => {
    fetchStub.returns(Promise.resolve({validationStatus: STATUS.SUCCESS}));

    addressApiValidationModule = addressValidationApiInjector({
      "./fetch": fetchStub
    });

    const {RESPONSE_TYPE: _RESPONSE_TYPE, "default": _api} = addressApiValidationModule;

    api = _api;
    configuredApi = api();

    RESPONSE_TYPE = _RESPONSE_TYPE;
  });

  describe("validateAddress", () => {
    let validateAddress;

    beforeEach(() => {
      validateAddress = configuredApi.validateAddress.bind(configuredApi);
    });


    it("takes address object and returns the results of fetch, which calls the AVS API", () => {
      expect(validateAddress(dummyAddress) instanceof Promise).to.be.true;
    });

    it("calls _parseAddressValidationSuccessResponse after a successful fetch", () => {
      sinon.spy(configuredApi, "_parseAddressValidationSuccessResponse");

      return validateAddress(dummyAddress)
        .then(() => {
          expect(configuredApi._parseAddressValidationSuccessResponse).to.have.been.calledOnce;
        });
    });

    it("calls _parseAddressValidationErrorResponse after a rejected fetch", () => {
      fetchStub.returns(Promise.reject({}));

      sinon.spy(configuredApi, "_parseAddressValidationSuccessResponse");
      sinon.spy(configuredApi, "_parseAddressValidationErrorResponse");

      return validateAddress(dummyAddress)
        .then(() => {
          expect(configuredApi._parseAddressValidationSuccessResponse).to.not.have.been.called;
          expect(configuredApi._parseAddressValidationErrorResponse).to.have.been.calledOnce;
        })
        // The above code throws by design. The catch statement prevents the test from breaking.
        .catch(() => null);
    });

    it("throws or rejects when response parsing results in a responseCode that is different from " +
      "the expected success code", () => {
      fetchStub.returns(Promise.reject({}));

      return validateAddress(dummyAddress)
        .catch((error) => {
          expect(error).to.exist;
        });
    });

    it("does not throw or reject when success code is as expected", () => {
      return validateAddress(dummyAddress)
        .then((response) => {
          expect(response).to.exist;
        })
        .catch((thrownError) => {
          throw new Error(
            `this catch callback should not get called but it was called with: ${
              JSON.stringify(thrownError)
            }`
          );
        });
    });
  });

  describe("_getUnmatchedCount", () => {
    it("takes the success response and counts the number of unmatched fields", () => {
      const _getUnmatchedCount = configuredApi._getUnmatchedCount.bind(configuredApi);

      expect(_getUnmatchedCount({postalCodeStatus: RESPONSE_TYPE.UNMATCHED})).to.equal(1);

      expect(_getUnmatchedCount({})).to.equal(0);

      expect(_getUnmatchedCount({
        postalCodeStatus: RESPONSE_TYPE.UNMATCHED,
        cityStatus: RESPONSE_TYPE.UNMATCHED
      })).to.equal(2);
    });
  });

  describe("_isSuccessful", () => {
    it("takes the response object and validates the \"validationStatus\" key", () => {
      const _isSuccessful = configuredApi._isSuccessful.bind(configuredApi);

      expect(_isSuccessful({validationStatus: STATUS.SUCCESS})).to.equal(true);
      expect(_isSuccessful({validationStatus: "whatever"})).to.equal(false);
    });
  });

  describe("_cityModified", () => {
    it("takes response object and verifies that city is the only key that has " +
      "been modified", () => {
      const _cityModified = configuredApi._cityModified.bind(configuredApi);

      expect(_cityModified({
        cityStatus: RESPONSE_TYPE.MODIFIED,
        stateStatus: RESPONSE_TYPE.VALIDATED,
        postalCodeStatus: RESPONSE_TYPE.VALIDATED
      })).to.equal(true);

      expect(_cityModified({
        cityStatus: RESPONSE_TYPE.VALIDATED,
        stateStatus: RESPONSE_TYPE.VALIDATED,
        postalCodeStatus: RESPONSE_TYPE.VALIDATED
      })).to.equal(false);

      expect(_cityModified({
        cityStatus: RESPONSE_TYPE.MODIFIED
      })).to.equal(false);
    });
  });

  describe("_stateModified", () => {
    it("takes response object and verifies that state is the only key that has " +
      "been modified", () => {
      const _stateModified = configuredApi._stateModified.bind(configuredApi);

      expect(_stateModified({
        stateStatus: RESPONSE_TYPE.MODIFIED,
        cityStatus: RESPONSE_TYPE.VALIDATED,
        postalCodeStatus: RESPONSE_TYPE.VALIDATED
      })).to.equal(true);

      expect(_stateModified({
        cityStatus: RESPONSE_TYPE.VALIDATED,
        stateStatus: RESPONSE_TYPE.VALIDATED,
        postalCodeStatus: RESPONSE_TYPE.VALIDATED
      })).to.equal(false);

      expect(_stateModified({
        stateStatus: RESPONSE_TYPE.MODIFIED
      })).to.equal(false);
    });
  });

  describe("_postalCodeModified", () => {
    it("takes response object and verifies that postal code is the only key that has " +
      "been modified", () => {
      const _postalCodeModified = configuredApi._postalCodeModified.bind(configuredApi);

      expect(_postalCodeModified({
        postalCodeStatus: RESPONSE_TYPE.MODIFIED,
        stateStatus: RESPONSE_TYPE.VALIDATED,
        cityStatus: RESPONSE_TYPE.VALIDATED
      })).to.equal(true);

      expect(_postalCodeModified({
        cityStatus: RESPONSE_TYPE.VALIDATED,
        stateStatus: RESPONSE_TYPE.VALIDATED,
        postalCodeStatus: RESPONSE_TYPE.VALIDATED
      })).to.equal(false);

      expect(_postalCodeModified({
        postalCodeStatus: RESPONSE_TYPE.MODIFIED
      })).to.equal(false);
    });
  });

  describe("_parseAddressValidationErrorResponse", () => {
    it("takes response object and normalizes it", () => {
      expect(configuredApi._parseAddressValidationErrorResponse(
        {foo: "bar", validationStatus: RESPONSE_TYPE.FAILURE}
      )).to.deep.equal({
        serverResponse: {foo: "bar", validationStatus: RESPONSE_TYPE.FAILURE},
        responseCode: STATUS.STREET_NUMBER_UNMATCHED
      });
    });
  });

  describe("_parseAddressValidationSuccessResponse", () => {
    let parse;

    beforeEach(() => {
      parse = configuredApi._parseAddressValidationSuccessResponse.bind(configuredApi);
    });

    it("should parse successful validation response", () => {
      const serverResponse = {validationStatus: STATUS.SUCCESS};

      expect(parse(dummyAddress, serverResponse))
        .to.contain.keys({responseCode: STATUS.SUCCESS});
    });

    it("should parse modified city response", () => {
      const serverResponse = {
        validationStatus: RESPONSE_TYPE.FAILURE,
        postalCodeStatus: RESPONSE_TYPE.VALIDATED,
        stateStatus: RESPONSE_TYPE.VALIDATED,
        cityStatus: RESPONSE_TYPE.MODIFIED
      };

      expect(parse(dummyAddress, serverResponse))
        .to.contain.keys({
          responseCode: STATUS.SUCCESS,
          updatedValue: dummyAddress.city
        });
    });

    it("should parse modified state response", () => {
      const serverResponse = {
        validationStatus: RESPONSE_TYPE.FAILURE,
        postalCodeStatus: RESPONSE_TYPE.VALIDATED,
        stateStatus: RESPONSE_TYPE.MODIFIED,
        cityStatus: RESPONSE_TYPE.VALIDATED
      };

      expect(parse(dummyAddress, serverResponse))
        .to.contain.keys({
          responseCode: STATUS.STATE_MODIFIED,
          updatedValue: dummyAddress.state
        });
    });

    it("should parse modified postal code response", () => {
      const serverResponse = {
        validationStatus: RESPONSE_TYPE.FAILURE,
        postalCodeStatus: RESPONSE_TYPE.MODIFIED,
        stateStatus: RESPONSE_TYPE.VALIDATED,
        cityStatus: RESPONSE_TYPE.VALIDATED
      };

      expect(parse(dummyAddress, serverResponse))
        .to.contain.keys({
          responseCode: STATUS.POSTALCODE_MODIFIED,
          updatedValue: dummyAddress.postalCode
        });
    });
  });
});
