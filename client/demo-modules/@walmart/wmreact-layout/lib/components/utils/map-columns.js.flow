/* eslint func-style: 0 */
function mapColumns(options) {
  const colMap = {1: 12, 2: 6, 3: 4, 4: 3, 6: 2, 12: 1};

  const cMap = {};

  if (colMap[options["x-small"]]) {
    cMap[""] = [colMap[options["x-small"]]];
  } else {
    cMap[""] = [12];
  }
  if (colMap[options.small]) {
    cMap["-s"] = [colMap[options.small]];
  }
  if (colMap[options.medium]) {
    cMap["-m"] = [colMap[options.medium]];
  }
  if (colMap[options.large]) {
    cMap["-l"] = [colMap[options.large]];
  }
  if (colMap[options["x-large"]]) {
    cMap["-xl"] = [colMap[options["x-large"]]];
  }

  return cMap;
}

export default function getColumnMap(options, mapType) {
  let cMap = [];
  if (mapType === "sizes") {
    cMap = mapColumns(options);
  }

  if (options[`x-small-${mapType}`]) {
    cMap[""] = options[`x-small-${mapType}`];
  }
  if (options[`small-${mapType}`]) {
    cMap["-s"] = options[`small-${mapType}`];
  }
  if (options[`medium-${mapType}`]) {
    cMap["-m"] = options[`medium-${mapType}`];
  }
  if (options[`large-${mapType}`]) {
    cMap["-l"] = options[`large-${mapType}`];
  }
  if (options[`x-large-${mapType}`]) {
    cMap["-xl"] = options[`x-large-${mapType}`];
  }

  return cMap;
}
