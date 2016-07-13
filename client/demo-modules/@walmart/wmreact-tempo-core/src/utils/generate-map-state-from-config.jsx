export const generateMapStateFromConfig = (config) => (state = {}, options = {}) => {
  const pageType = options.pageType || config.pageType;
  const pageId = options.pageId || config.pageId;

  if (pageId) {
    return state[pageType][pageId];
  } else {
    return state[pageType];
  }
};
