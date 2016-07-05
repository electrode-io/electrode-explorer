/* flow */
import Cookies from "@walmart/electrode-cookies";

export class AddToCartAdapter {
  adapt(product, quantity): Object {
    // If `SP` cookie is `s` => pass `SHIP_RULE_3`
    // If `SP` cookie is `t` => pass `SHIP_RULE_4`
    // For any other value of `SP` cookie => `SHIP_RULE_1`
    let shipMethodDefaultRule = "";
    switch (Cookies.get("SP")) {
    case "s":
      shipMethodDefaultRule = "SHIP_RULE_3";
      break;
    case "t":
      shipMethodDefaultRule = "SHIP_RULE_4";
      break;
    default:
      shipMethodDefaultRule = "SHIP_RULE_1";
      break;
    }

    const item = {
      id: product.usItemId,
      offerId: product.offerId,
      quantity,
      placementId: product.placementId,
      configId: product.configId,
      shipMethodDefaultRule
    };
    return item;
  }
}
