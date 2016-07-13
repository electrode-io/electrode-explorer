import queryString from "querystring";
import _ from "lodash";

const MOBILE_PRG = "mWeb";

export const buildPresoUri = ({ categoryId, req, isMobile }) => {
  /*eslint-disable camelcase */
  const url = req.url || {};
  const { search_redirect, redirect_query, _mock, _empty } = url.query || {};

  const queryParams = {
    ...{ search_redirect, redirect_query, _mock, _empty },
    ...{ cat_id: categoryId }
  };
  /*eslint-enable camelcase */

  const filteredQueryParams = _.pickBy(queryParams,
    (value) => value !== undefined);

  if (isMobile) {
    filteredQueryParams.prg = MOBILE_PRG;
  }

  const queryToSend = queryString.stringify(filteredQueryParams);
  const headers = req.headers || {};

  return `http://${headers.host}/category/api/modules?${queryToSend}`;
};

export const isEmptyModules = (modules) => {
  const { top = [], center = [], left = [] } = modules || {};
  return !(top.length || center.length || left.length);
};
