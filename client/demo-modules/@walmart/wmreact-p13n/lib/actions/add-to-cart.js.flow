import { fetchJSON } from "@walmart/electrode-fetch";
import { canary } from "../canary";
import { getAddToCartEndpoint } from "../config/p13n-config";

export const P13N_ADD_TO_CART_REQUEST = "P13N_ADD_TO_CART_REQUEST";
export const P13N_ADD_TO_CART_SUCCESS = "P13N_ADD_TO_CART_SUCCESS";
export const P13N_ADD_TO_CART_FAILURE = "P13N_ADD_TO_CART_FAILURE";
export const P13N_CLEAR_LATEST_ADD_TO_CART_RESULT = "P13N_CLEAR_LATEST_ADD_TO_CART_RESULT";

export const addToCartRequest = (item) => {
  return {
    type: P13N_ADD_TO_CART_REQUEST,
    item
  };
};

export const addToCartSuccess = (item, responseJson) => {
  const action = {
    type: P13N_ADD_TO_CART_SUCCESS,
    item
  };
  const addedCountInfo = {
    addedQuantity: item.quantity
  };
  const addedItem = responseJson.items[0];
  if (addedItem.entityErrors && addedItem.entityErrors.length > 0) {
    const error = addedItem.entityErrors.filter((err) => {
      return err.code === "400.CART_SERVICE.725" ||
        err.code === "400.CART_SERVICE.712";
    })[0];
    if (error) {
      // exceeds the max quantity
      // if hints has ADJUSTED, it means some of the items have been added
      // if hints is DETAIL, it means none has been added
      if (error.hints.MAX_QTY_HINT_ADJUSTED) {
        addedCountInfo.maxAddQuantity = error.hints.MAX_QTY_HINT_ADJUSTED.maxQuantity;
        addedCountInfo.addedQuantity = error.hints.MAX_QTY_HINT_ADJUSTED.adjustedQuantity;
      } else if (error.hints.MAX_QTY_HINT_DETAIL) {
        addedCountInfo.maxAddQuantity = error.hints.MAX_QTY_HINT_DETAIL.maxQuantity;
        addedCountInfo.addedQuantity = 0;
      }
    }
  }
  action.addedCountInfo = addedCountInfo;

  return action;
};

export const addToCartFailure = (item, error) => {
  return {
    type: P13N_ADD_TO_CART_FAILURE,
    item,
    error
  };
};

export const clearLatestAddToCartResult = () => {
  return {
    type: P13N_CLEAR_LATEST_ADD_TO_CART_RESULT
  };
};

export const addToCart = (item) => {
  return (dispatch) => {
    dispatch(clearLatestAddToCartResult());
    dispatch(addToCartRequest(item));
    // post payload doesn't need item id
    const {id, placementId, configId, ...postData} = item;
    const options = {
      credentials: "include",
      omitCorrelationId: true,
      omitCsrfJwt: true,
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    };
    const translate = (resp) => (resp);

    if (item) {
      return fetchJSON(getAddToCartEndpoint(), options, translate).then((response) => {
        if (response.status < 400) {
          response.json().then((responseJson) => {
            const addToCartMsg = {
              _type: "postAddToCart",
              responseJson
            };
            canary.process(addToCartMsg);
            dispatch(addToCartSuccess(item, responseJson));
          });
        } else {
          throw new Error("Add-to-cart service call encounters an error");
        }
      }).catch((error) => {
        dispatch(addToCartFailure(item, error));
      });
    } else {
      // bad json response missing offer id
      dispatch(addToCartFailure(item, P13N_ADD_TO_CART_FAILURE));
    }
  };
};
