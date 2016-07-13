import get from "lodash/get";
/**
 * An adapter that converts store service resonse to data that can be
 * passed as props to Store Component
 */
export default class StoreAdapter {
  adapt(storeResponse, preferred) {
    const { id,
      distance,
      address,
      operationalHours,
      displayName
    } = this._adaptStoreResponse(storeResponse);
    const name = get(address, "city", "");
    const displayDistance = this._adaptDistance(distance);
    return {
      id,
      name,
      address,
      distance,
      displayDistance,
      preferred,
      operationalHours,
      displayName
    };
  }

  _adaptStoreResponse(storeResponse) {
    if (storeResponse) {
      const { id, distance, address, operationalHours, displayName } = storeResponse;
      return { id, distance, address, operationalHours, displayName };
    }
    return {};
  }

  _adaptDistance(distance) {
    return distance && `${distance} mi`;
  }

}
