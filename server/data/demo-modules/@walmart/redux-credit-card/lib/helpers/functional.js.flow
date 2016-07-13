import matches from "lodash/matches";
import takeWhile from "lodash/takeWhile";
import drop from "lodash/drop";

const takeUntil = (arr, pred) => takeWhile(arr, (v) => !matches(pred)(v));
/**
 * Similar to a non mutable splice, match an item and replace it with new ones
 * @param {[]} arr - your array
 * @param {object} pred - predicate for the item to be removed, lodash/matches styled
 * @param {...object} newParts - any new items you want to inject where the old item were
 * @returns {[]} the resulting array
 */
const replaceWith = function (arr, pred, ...newParts) {
  const head = takeUntil(arr, pred);
  const tail = drop(arr, head.length + 1);
  return [...head, ...newParts, ...tail];
};

export {
  takeUntil,
  replaceWith
};
