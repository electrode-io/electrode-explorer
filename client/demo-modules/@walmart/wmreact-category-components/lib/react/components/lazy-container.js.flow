import React, { PropTypes, Component } from "react";

export default class LazyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };
    this._scrollHandler = this._scrollHandler.bind(this);
  }

  _scrollHandler() {
    window.removeEventListener("scroll", this._scrollHandler);
    this.setState({
      isLoaded: true
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this._scrollHandler);
  }

  render() {
    return this.state.isLoaded
      ? (<span>{this.props.children}</span>)
      : null;
  }
}

LazyContainer.displayName = "LazyContainer";

LazyContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
