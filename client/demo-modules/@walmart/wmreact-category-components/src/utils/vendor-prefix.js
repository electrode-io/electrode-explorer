/**
 * Adding vendor prefix to inline styles
 * https://facebook.github.io/react/tips/inline-styles.html
 * @param {String} key the style property
 * @param {String} value the style property value
 * @return {Object} Style object that can be fed into the style prop
 */
export default (key: string, value: string) => {
  const style = {};
  if (key.length) {
    // w3c spec
    style[key] = value;
    // vendor specific
    const vendorKey = key.charAt(0).toUpperCase() + key.slice(1);
    ["Webkit", "ms", "O"].forEach((prefix) => {
      style[`${prefix}${vendorKey}`] = value;
    });
  }
  return style;
};
