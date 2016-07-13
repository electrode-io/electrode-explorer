import Cookies from "@walmart/electrode-cookies";

// By default "SP" is the cookie to get shipping pass
const shippingPassValue = Cookies.get("SP");

export const isSubscribed = (value = shippingPassValue) => {
  return value === "s";
};

export const isTargeted = (value = shippingPassValue) => {
  return value === "t";
};

export const isNonTargeted = (value = shippingPassValue) => {
  return value === "n";
};
