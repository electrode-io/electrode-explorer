export const clearError = (state) => ({...state, alert: null, invalidAddressError: null});

export const setError = (state, action) => {
  const defaultType = "warning";
  const defaultMessage =
    "We're having trouble with your request. Please wait a moment and then try again.";

  const error = action.payload;
  const alert = {
    message: error.message || defaultMessage,
    alertType: error.alertType || defaultType
  };

  const patch = error.responseCode ? {invalidAddressError: error} : {alert};

  return {...state, ...patch};
};
