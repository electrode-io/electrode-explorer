import pick from "lodash/pick";
import each from "lodash/each";
import mapValues from "lodash/mapValues";
import isString from "lodash/isString";
import includes from "lodash/includes";
import changedFieldsFlags from "../enums/changed-fields-flags";

const normalizeWhitespaces = (string) => {
  return string ? string.replace(/[\s\uFEFF\xA0]/g, " ") : string;
};

export const cleanseAddressData = (data) => {
  const result = {
    ...data,
    countryCode: data.countryCode || data.country
  };

  delete result.country;
  return result;
};

export const cleanseAddressRequest = (address, includeIsDefault = false) => {
  const filteredAddress = pick(address, [
    "addressLineOne",
    "addressLineTwo",
    "city",
    "firstName",
    "lastName",
    "phone",
    "postalCode",
    "state",
    "countryCode",
    "addressType"
  ]);

  if (includeIsDefault) {
    filteredAddress.isDefault = address.isDefault;
  }

  return mapValues(filteredAddress, (value, key) => {
    if (isString(value)) {
      value = normalizeWhitespaces(value);

      if (key === "city") {
        value = value.replace(/'/g, " ");
      }

      if (key === "phone") {
        // remove non-digit characters to make the backend happier
        value = value.replace(/\D/g, "");
      }
    }

    return value;
  });
};

export const getChangedFieldsArray = ({oldAddress, newAddress}) => {
  const changedFields = [];

  each(newAddress, (value, key) => {
    const fieldFlag = changedFieldsFlags[key];

    if (
      newAddress[key] !== oldAddress[key] &&
      fieldFlag !== undefined &&
      includes(changedFields, fieldFlag) === false
    ) {
      changedFields.push(fieldFlag);
    }
  });

  return changedFields;
};
