export const EMPTY_IMAGE_SRC =
  "//i5.walmartimages.com/dfw/63fd9f59-21dc/k2-_29be935d-2f27-4030-949a-59d29ead73e1.v1.jpg";

const TORBIT_REGEX = /\bodn(Height|Width)=\w+\b/i;

const removeProtocol = (src) => {
  return src.replace(/^(https?):/i, "");
};

const torbitParams = (height, width) => {
  return `odnWidth=${width}&odnHeight=${height}`;
};

const url = (src, height, width, queries) => { // eslint-disable-line
  if (queries && queries.length) {
    return `${src}?${torbitParams(height, width)}&${queries.join("&")}`;
  } else {
    return `${src}?${torbitParams(height, width)}`;
  }
};

export const checkImageSrc = (src, height, width) => {
  // if no src specified, then return empty image src default
  if (!(src && src.length)) {
    return url(EMPTY_IMAGE_SRC, height, width);
  }

  src = removeProtocol(src);
  // if there is no query params, then return src with torbit params
  if (src.indexOf("?") < 0) {
    return url(src, height, width);
  }

  // Handle pre-existing query parameters
  const [ path, q ] = src.split("?");
  const args = (q && q.length && q.indexOf("&") > -1 && q.split("&")) || [];
  // only retain non-torbit image params
  const queries = args.filter((arg) => {
    return (arg && arg.length && arg.match(TORBIT_REGEX)) ? null : arg;
  });

  // return url with torbit image query params and pre-existing params
  if (queries.length) {
    return url(path, height, width, queries);
  }

  return url(path, height, width);
};
