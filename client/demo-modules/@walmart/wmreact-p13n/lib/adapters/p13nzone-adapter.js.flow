import get from "lodash/get";
import { getPlacementSuffix } from "../utils/p13n-utils";

export default class P13NZoneAdapter {
  constructor(state, ownProps) {
    this.page = ownProps.page;
    this.placementId = getPlacementSuffix(ownProps.placementId);
    this.irsData = ownProps.irsData ?
      ownProps.irsData : get(state, `recommendationMap.irsDataMap.${this.placementId}`);
  }

  /**
   * Adapt the state to return the props necessary for P13N
   * @returns {{products: *}} the Product Collection props
   */
  adapt() {
    const recommendedProducts = this.irsData.recommendedProducts;
    return {"products": recommendedProducts};
  }
}
