import { findClicks } from "./find-clicks";
import { findSplunkClick } from "./find-splunk-click";
import { findLogmonClick } from "./find-logmon-click";

export const canaryRules = [
  findClicks,
  findSplunkClick,
  findLogmonClick
];
