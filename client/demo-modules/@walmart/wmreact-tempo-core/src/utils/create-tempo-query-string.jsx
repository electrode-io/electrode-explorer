export const createTempoQueryString = (defaultConfig, config, options) => {
  const tenant = options.tenant || config.tenant || defaultConfig.tenant;
  const channel = options.channel || config.channel || defaultConfig.channel;
  const pageType = options.pageType || config.pageType;
  const pageId = options.pageId || config.pageId || null;

  let queryString = `?tenant=${tenant}&channel=${channel}&pageType=${pageType}`;

  if (pageId) {
    queryString += `&pageId=${pageId}`;
  }

  return queryString;
};
