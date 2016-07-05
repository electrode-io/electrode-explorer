//TODO: use shipping pass redux component https://jira.walmart.com/browse/GPRDT-291
import { isSubscribed } from "@walmart/wmreact-shipping-pass";
import { GET_SHIPPING_PASS } from "../types";

export const getShippingPass = (shippingPass = isSubscribed()) => {
  return {
    type: GET_SHIPPING_PASS,
    shippingPass
  };
};
