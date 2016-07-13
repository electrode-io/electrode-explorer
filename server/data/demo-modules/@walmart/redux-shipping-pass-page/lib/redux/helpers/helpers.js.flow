const checkLifecycleStatus = (status) => {
  if (status === "TRIAL") { return true; }
  return false;
};

const checkCardValidity = (status) => {
  if (status === "VALID") { return true; }
  return false;
};

const formatDate = (dateString) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August",
  "September", "October", "November", "December"];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate().toString();
  const year = date.getFullYear().toString();

  return `${month}${" "}${day}${", "}${year}`;
};

export {
  checkLifecycleStatus,
  checkCardValidity,
  formatDate
};
