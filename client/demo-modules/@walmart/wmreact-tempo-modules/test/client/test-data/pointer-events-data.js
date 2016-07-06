import React, {PropTypes} from "react";
import { addPointerEvents } from "src/helpers/pointer-events-none";

export class Fixture extends React.Component {
  componentDidMount() {
    if (this.props.pointerEvents) {
      addPointerEvents(this.refs.top, true);
    }
  }

  render() {
    const {topClick, bottomClick} = this.props;
    return (
      <div style={{position: "relative"}} id="fixture">
        <div ref="top" id="top" style={{
          zIndex: 5,
          position: "absolute",
          width: 30, height: 30,
          top: 20, left: 20}}
          onClick={topClick} />
        <div ref="bottom" id="bottom" style={{
          position: "absolute",
          width: 50, height: 50,
          top: 0, left: 0}}
          onClick={bottomClick} />
      </div>
    );
  }
}

Fixture.propTypes = {
  topClick: PropTypes.func.isRequired,
  bottomClick: PropTypes.func.isRequired,
  pointerEvents: PropTypes.bool
};

Fixture.defaultProps = {
  pointerEvents: false
};

/**
 * Create IE compatible event
 * @returns {MouseEvent} - Mouse event on top of click area
 */
export const createMouseEvent = () => {
  const event = window.document.createEvent("MouseEvent");
  event.initMouseEvent(
    "click", // event
    true,    // canBubble
    true,    // cancelable
    window,  // view
    0,       // detail
    0,       // screenX
    0,       // screenY
    30,      // clientX
    30,      // clientY
    false,   // ctrlKey
    false,   // altKey
    false,   // shiftKey
    false,   // metaKey
    0,       // button
    null     // relatedTarget
  );

  return event;
};

export default Fixture;
