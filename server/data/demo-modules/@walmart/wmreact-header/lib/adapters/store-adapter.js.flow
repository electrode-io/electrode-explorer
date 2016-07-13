import get from "lodash/get";
/**
* An adapter that converts store service resonse to data that can be
* passed as props to Store Component
*/
export default class StoreAdapter {
  adapt(storeResponse, preferred) {
    const { id, distance, address } = this._adaptStoreResponse(storeResponse);
    const name = get(address, "city", "");
    const displayAddress = get(address, "address1", "");
    const displayDistance = this._adaptDistance(distance);
    return {
      id,
      name,
      address: displayAddress,
      distance: displayDistance,
      preferred
    };
  }

  _adaptDistance(distance) {
    return distance && `${distance} mi`;
  }

  _adaptStoreResponse(storeResponse) {
    if (storeResponse) {
      const { id, distance, address } = storeResponse;
      return { id, distance, address };
    }
    return {};
  }
}
