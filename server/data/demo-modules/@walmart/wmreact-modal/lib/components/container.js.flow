import React, {Component, PropTypes, Children} from "react";
import {canUseDOM} from "exenv";

import {freezeScrollPosition, thawScrollPosition} from "../util/freeze-scroll-position";

const scope = "modal_container";
const styles = {
  base: `${scope}_base`,
  shade: `${scope}_shade`
};

export default class ModalContainer extends Component {
  componentDidMount() {
    const {freezeScroll} = this.props;

    if (freezeScroll && canUseDOM) {
      this.__scrollFrozen = true;
      freezeScrollPosition();
    }
  }

  componentWillUnmount() {
    if (this.__scrollFrozen && canUseDOM) {
      thawScrollPosition();
    }
  }

  render() {
    const {onClose = () => {}, automationId = "modal-shade", children} = this.props;
    return (
      <div className={styles.base}>
        <div className={styles.shade} onClick={() => onClose()} data-automation-id={automationId}/>
        {Children.only(children)}
      </div>
    );
  }
}

ModalContainer.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
  freezeScroll: PropTypes.bool,
  automationId: PropTypes.string
};
