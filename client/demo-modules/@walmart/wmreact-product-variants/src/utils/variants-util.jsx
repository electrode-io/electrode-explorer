import {OUT_OF_STOCK, NOT_AVAILABLE} from "../enums/availability-status";

export const isDisabled = ({status}): boolean => {
  return status === OUT_OF_STOCK;
};

export const isUnavailable = ({status}): boolean => {
  return status === NOT_AVAILABLE;
};

export const isCollapsable = ({swatchToggleCount, variants}): boolean => {
  return variants.length > swatchToggleCount;
};
