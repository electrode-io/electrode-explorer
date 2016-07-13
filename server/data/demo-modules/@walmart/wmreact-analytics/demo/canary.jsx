/* eslint no-console: 0, no-undef: 0 */
const canary = require("@walmart/canary")();
import findClicks from "./rules/find-clicks";

canary.log((evt) => {
  console.log(["log", evt]);
});

canary.message((message) => {
  console.log(["message", message]);
});

canary.applyRules([findClicks]);

export default canary.process;

