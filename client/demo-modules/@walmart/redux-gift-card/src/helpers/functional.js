import matches from "lodash/matches";
import takeWhile from "lodash/takeWhile";

const takeUntil = (arr, pred) => takeWhile(arr, (v) => !matches(pred)(v));
export {
  takeUntil
};
