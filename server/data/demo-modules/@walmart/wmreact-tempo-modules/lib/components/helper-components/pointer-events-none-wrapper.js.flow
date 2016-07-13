import React, {PropTypes} from "react";
import { addPointerEvents } from "../../helpers/pointer-events-none";

/**
 * A wrapper for any element that needs the polyfill for `pointer-events: none` applied to it
 * Must be a class because otherwise it can't be found via ReactDOM#findDOMNode
 */
class PointerEventsNoneWrapper extends React.Component {
  componentDidMount() {
    this.props.polyfill(this);
  }

  render() {
    return this.props.children;
  }
}

PointerEventsNoneWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  polyfill: PropTypes.func
};

PointerEventsNoneWrapper.defaultProps = {
  polyfill: addPointerEvents
};

export default PointerEventsNoneWrapper;
