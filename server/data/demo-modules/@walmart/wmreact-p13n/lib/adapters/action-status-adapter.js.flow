/* flow */
import get from "lodash/get";
import ActionStatus from "../enums/action-status";

export class ActionStatusAdapter {
  adapt(product, addToCartStatus): ?string {
    // Add To Cart components should always get the `IN_PROGRESS` status, but
    // should only get `ADDED_TO_CART` or `ADD_TO_CART_ERROR` if they're the
    // latest result.
    const productId = product.usItemId;
    const placementId = product.placementId;
    const request = get(addToCartStatus.requestsById, `${placementId}.${productId}`);
    const isLatestResult = addToCartStatus.latestResultId === `${placementId}-${productId}`;
    if (isLatestResult || get(request, "status") === ActionStatus.IN_PROGRESS) {
      return request.status;
    }
  }
}
