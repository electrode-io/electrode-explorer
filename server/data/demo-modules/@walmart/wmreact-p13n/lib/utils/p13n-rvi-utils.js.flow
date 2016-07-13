import isArray from "lodash/isArray";
import without from "lodash/without";
import dropRight from "lodash/dropRight";
import uniq from "lodash/uniq";

const localStorageName = "rvis";
const totalCount = 9;
const isCompatible = typeof window !== "undefined";

export const clearCurrentList = () => {
  /* eslint-disable no-undef */
  localStorage.removeItem(localStorageName);
};

export const getCurrentList = () => {
  /* eslint-disable no-undef */
  const currentValue = localStorage.getItem(localStorageName);
  let current;
  if (currentValue) {
    try {
      current = JSON.parse(currentValue);
    } catch (exception) {
      clearCurrentList();
    }
    if (!isArray(current)) {
      current = [];
    }
  } else {
    current = [];
  }
  return current;
};

export const getRecentlyViewedItems = (excludeItemId) => {
  if (!isCompatible) {
    return [];
  }
  const recentlyViewedItems = getCurrentList();
  return excludeItemId ? without(recentlyViewedItems, excludeItemId) : recentlyViewedItems;
};

export const addRecentlyViewedItem = (itemId) => {
  /* eslint-disable no-undef */
  const currentList = getCurrentList();
  // Add itemId to beginning of the array. Most recently viewed item first.
  currentList.unshift(itemId);
  const updatedList = dropRight(uniq(currentList), currentList.length - totalCount);
  localStorage.setItem(localStorageName, JSON.stringify(updatedList));
};

export const iniRecentlyViewedItem = () => {
  /* eslint-disable no-undef */
  const currentList = ["46519410", "49072427", "46429973", "48174532", "40572267"];
  if (isCompatible) {
    localStorage.setItem(localStorageName, JSON.stringify(currentList));
  }
};

export const checkTrending = (parentEntities, products, selectedIndex) => {
  const parentItemId = parentEntities[selectedIndex].usItemId;
  const itemId = products[0].usItemId;
  return parentItemId !== itemId;
};
