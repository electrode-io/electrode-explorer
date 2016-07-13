import { fetchQuimbyData } from "../utils/fetch-quimby-data";
import { createTempoQueryString } from "../utils/create-tempo-query-string";
import { getFetchOptions } from "../utils/get-fetch-options";

const getCacheDurationInSeconds = (defaultConfig, config, options) => {
  // Use options.cacheDurationInSeconds if app pushes down via intermediate component
  if (options.cacheDurationInSeconds) {
    return options.cacheDurationInSeconds;
  // Take the config.cacheDuration if it is non null or zero otherwise us default
  } else if (config.cacheDurationInSeconds || config.cacheDurationInSeconds === 0) {
    return config.cacheDurationInSeconds;
  } else {
    return defaultConfig.cacheDurationInSeconds;
  }
};

// defaultConfig is defined at build time by tempo-core
// config is defined at build time by consuming app e.g. header
// options is for runtime overrides of defaultConfig and config
/* eslint-disable max-params */
const getQuimbyDataAction = (defaultConfig = {}, config = {}, request = {}, options = {}) => {
  return (dispatch) => {
    // config properties used here are tenant, channel, pageType, and pageId
    const generatedTempoQuery = createTempoQueryString(defaultConfig, config, options);
    const urlBase = options.urlBase || config.urlBase || defaultConfig.urlBase;

    const urlString = `${urlBase}${generatedTempoQuery}`;

    // Take the config.cacheDuration if it is non null or zero otherwise us default
    const cacheDurationInSeconds = getCacheDurationInSeconds(defaultConfig, config, options);
    const fetchOptions = getFetchOptions(request, cacheDurationInSeconds);

    // Pass enable/disable logging option to electrode fetch.
    fetchOptions.disableAnalytics = options.disableAnalytics;

    if (options.onFetchStart) {
      options.onFetchStart(urlString, fetchOptions);
    }

    // fetchQuimbyData handles logging and error handling internally via fetchJSON
    // config and options properties used here are urlBase, tenant, channel, pageType, and pageId
    return fetchQuimbyData(urlString, fetchOptions)
      .then((zoneMap) => {
        if (options.onFetchSuccess) {
          options.onFetchSuccess(zoneMap, urlString, fetchOptions);
        }

        if (options.onFetchEnd) {
          options.onFetchEnd(zoneMap, urlString, fetchOptions);
        }

        dispatch({
          type: "TEMPO_CORE_QUIMBY_DATA",
          pageType: options.pageType || config.pageType,
          pageId: options.pageId || config.pageId || null,
          zoneModuleMap: zoneMap
        });
      }).catch((err) => {
        // Notify consumers of request errors, js errors, and invalid data errors
        if (options.onFetchError) {
          options.onFetchError(err, urlString, fetchOptions);
        }

        if (options.onFetchEnd) {
          options.onFetchEnd({}, urlString, fetchOptions);
        }
      });
  };
};

// defaultConfig is hardcoded by tempo-core before exposing getGetQuimbyData
export const getQuimbyActionWithDefaults = (defaultConfig) => (...restOfArgs) => {
  return getQuimbyDataAction(defaultConfig, ...restOfArgs);
};

// exposed for testing purposes
export const originalGetQuimbyData = getQuimbyDataAction;
