/* eslint valid-jsdoc: 0 */
import React from "react";
import ReactTextTruncate from "react-text-truncate";
import ExecutionEnvironment from "exenv";

/**
 Isomorphic text truncation. Uses `react-text-truncate` when doing a client-side
 render, otherwise visually truncates using CSS `max-height`.
 */
const _getMaxHeight = (lineHeight, maxLines) => {
  if (typeof maxLines !== "number") {
    return "none";
  }
  if (typeof lineHeight === "number") {
    return `${lineHeight * maxLines}em`;
  }
  const match = lineHeight.match(/([-\d.]+)(.*)/);
  if (match) {
    const number = parseFloat(match[1]);
    const units = match[2] || "em";
    return `${number * maxLines}${units}`;
  }
  // Let the browser try to deal with it.
  return `calc(${lineHeight} * ${maxLines})`;
};

const TextTruncate = (props) => {
  const { serverLineHeight, line: maxLines, doInsertHTMLTitle, ...rest } = props;
  const maxHeight = _getMaxHeight(serverLineHeight, maxLines);
  const style = { maxHeight, overflow: "hidden" };
  if (ExecutionEnvironment.canUseDOM) {
    if (doInsertHTMLTitle) {
      return <div style={style} dangerouslySetInnerHTML={{__html: props.text}} />;
    } else {
      return <ReactTextTruncate line={maxLines} {...rest}/>;
    }
  }
  return (
    <div style={style} dangerouslySetInnerHTML={{__html: props.text}} />
  );
};

TextTruncate.propTypes = {
  /**
   The CSS `line-height` to use when visually truncating text in a
   server-side render.
   */
  serverLineHeight: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  /**
   The text to (potentially) truncate; passed along to `react-text-truncate`.
   */
  text: React.PropTypes.string,
  /**
   The maximum number of lines to render; passed along to `react-text-truncate`.
   */
  line: React.PropTypes.number,
  /**
  A flag to enable title inserted as HTML
  */
  doInsertHTMLTitle: React.PropTypes.bool
};

TextTruncate.defaultProps = {
  serverLineHeight: 1.5 // Default for many Walmart titles
};
TextTruncate._getMaxHeight = _getMaxHeight;

export default TextTruncate;
