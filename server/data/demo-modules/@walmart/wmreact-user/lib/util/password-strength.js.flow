const LEVEL = {
  1: "very weak",
  2: "weak",
  3: "medium",
  4: "good",
  5: "strong"
};

export default (strength) => {
  if (!strength) {
    return {};
  }

  const percentage = strength / 5 * 100;

  return {
    strength,
    percentage,
    level: LEVEL[strength]
  };
};
