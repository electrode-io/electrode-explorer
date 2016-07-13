export default (password) => { // eslint-disable-line max-statements
  if (!password) {
    return {};
  }

  const upperCase = new RegExp("[A-Z]");
  const lowerCase = new RegExp("[a-z]");
  const numbers = new RegExp("[0-9]");
  const specialChars = new RegExp("([^a-zA-Z\\d])");

  let strength = 0;

  if (password.length >= 8) {
    strength += 1;
  }

  if (password.match(upperCase)) {
    strength += 1;
  }

  if (password.match(lowerCase)) {
    strength += 1;
  }

  if (password.match(numbers)) {
    strength += 1;
  }

  if (password.match(specialChars)) {
    strength += 1;
  }

  return strength;
};
