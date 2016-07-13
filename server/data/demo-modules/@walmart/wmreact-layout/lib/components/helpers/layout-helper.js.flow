/* eslint func-style: 0 */
import classNames from "classnames";
import getColumnMap from "../utils/map-columns";

export default function layoutHelper(options, index = 0) {
  const cMap = getColumnMap(options, "sizes");
  const coMap = getColumnMap(options, "offsets");

  const classes = [];
  classes.push("Grid-col");
  for (const k in cMap) {
    classes.push(`u-size-${cMap[k][index % cMap[k].length]}-12${k}`);
  }
  for (const k in coMap) {
    classes.push(`u-offset-${coMap[k][index % coMap[k].length]}-12${k}`);
  }

  const extras = classNames({
    "valign-top": options.vertical === "top",
    "valign-middle": options.vertical === "middle",
    "valign-bottom": options.vertical === "bottom"
  });
  if (extras.length > 0) {
    classes.push(extras);
  }

  return classes;
}
