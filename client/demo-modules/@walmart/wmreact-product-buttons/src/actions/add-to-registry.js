import { fetchJSON } from "@walmart/electrode-fetch";
import Cookies from "@walmart/electrode-cookies";

const CID_COOKIE = "hasCID";

const getSignInStatus = (cookieValue = Cookies.get(CID_COOKIE)) => {
  return {
    type: "SIGN_IN_STATUS",
    isSignedIn: cookieValue === "1",
    status: "INITIALIZED"
  };
};

const addToRegistryRequest = () => {
  return {
    type: "ADD_TO_REGISTRY_REQUEST",
    status: "LOADING"
  };
};

const addToRegistryError = () => {
  return {
    type: "ADD_TO_REGISTRY_ERROR",
    status: "ERROR"
  };
};

const addToRegistrySuccess = (serviceResponse) => {
  return {
    type: "ADD_TO_REGISTRY_SUCCESS",
    status: "SUCCESS",
    serviceResponse
  };
};

const showRegistryPrompt = (lists) => {
  return {
    type: "SHOW_REGISTRIES",
    lists
  };
};

const onRegistryPromptClose = () => {
  return {
    type: "REGISTRY_PROMPT_CLOSED",
    status: "INITIALIZED"
  };
};

const getAddToRegistryUrl = (baseUrl, registryType) => {
  return `${baseUrl}/${registryType}/items?cid:CID=`;
};

const getStoreId = () => {
  // TODO: There is some logic to compute this. This is a temp fix.
  return 12;
};


// Function called when an item is added to registry
const addToRegistry = ({offerId, quantity, price, type, addToRegistryUrl},
    dispatch, _fetch = fetchJSON) => {
  dispatch(addToRegistryRequest());
  const storeId = getStoreId();
  const postBody = {
    offerId,
    quantity,
    price,
    storeId
  };
  const url = getAddToRegistryUrl(addToRegistryUrl, type);
  _fetch(url, {
    method: "POST",
    body: JSON.stringify(postBody)
  }).then((data) => {
    return dispatch(addToRegistrySuccess(data));
  }).catch(() => {
    return dispatch(addToRegistryError());
  });
};


// Function called when a signed in user clicks on add to registry
const onAddToRegistryClicked = ({
  fetchRegistriesUrl,
  addToRegistryUrl,
  offerId,
  quantity,
  price
}) => {
  return (dispatch) => {
    dispatch(addToRegistryRequest());
    // 1. Check to see if the user has any registries
    return fetch(fetchRegistriesUrl)
    .then((res) => res.json())
    .then((res) => {
      const lists = res.searchResults.filter((result) => {
        return result.type === "BR" || result.type === "WR";
      });
      // 2.1 If the user has only one registry, just add the item to that registry
      if (lists.length === 1) {
        const type = lists[0].type;
        addToRegistry({
          offerId, quantity, price, type, addToRegistryUrl
        }, dispatch);
      } else if (lists.length >= 2) {
        // 2.2 If the user has more than one registry, show a prompt to select one
        return dispatch(showRegistryPrompt(lists));
      }
    }).catch(() => {
      return dispatch(addToRegistryError());
    });
  };
};
const actions = {
  onAddToRegistryClicked,
  addToRegistryRequest,
  addToRegistryError,
  addToRegistrySuccess,
  addToRegistry,
  getSignInStatus,
  onRegistryPromptClose
};
export default actions;
