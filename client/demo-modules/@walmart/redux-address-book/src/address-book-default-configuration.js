import * as fieldNames from "./enums/field-names.js";

export {default as addressFormValidator} from "./validation/create-address-form-validator";

export const avsApiUrlPrefix = "/api/checkout-avs";

export const addressApiUrlPrefix = "/api/checkout-customer/:CID/shipping-address";

export const addressFormFields = Object.keys(fieldNames);
