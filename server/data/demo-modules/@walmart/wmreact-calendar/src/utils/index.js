/**
 * Used to prevent passing an invalid date to <DatePicker/>, especially for use in custom triggers.
 * @param {string} date Date prop provided to <Calendar/>.
 * @returns {string|object|null} If prop is valid date, returns prop. Else returns null.
 */
export const nullSafeDate = (date) => {
  const parsedDateProp = new Date(date);
  const isValidDate = !isNaN(parsedDateProp);

  if (isValidDate) {
    return date;
  }

  return null;
};
