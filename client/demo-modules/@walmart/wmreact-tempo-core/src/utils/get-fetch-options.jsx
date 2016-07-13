import ExecutionEnvironment from "exenv";

export const getFetchOptions = (req, cacheDurationInSeconds) => {
  const fetchOptions = {credentials: "same-origin"};

  if (!ExecutionEnvironment.canUseDOM) {
    cacheDurationInSeconds = cacheDurationInSeconds || 0;

    const requestHeaders = req.headers;
    const requestUrl = req.url;
    const requestPathParams = req.params;
    const requestQryParams = req.query;

    // pass on all the headers except "host"
    const {host, ...passThroughHeaders} = requestHeaders;

    fetchOptions.headers = {
      ...passThroughHeaders,
      "x-request-page-url": requestUrl.path,
      "x-request-page-params": JSON.stringify(requestQryParams),
      "x-request-path-params": JSON.stringify(requestPathParams),
      "x-request-page-cache-duration": cacheDurationInSeconds
    };
  } else {
    // Don't send these from the client request, causes cors errors
    fetchOptions.omitCorrelationId = true;
    fetchOptions.omitCsrfJwt = true;
    fetchOptions.omitContentType = true;
  }

  return fetchOptions;
};
