import React from "react";

export default React.createClass({
  displayName: "TypeaheadListItem",

  propTypes: {
    onMouseEnter: React.PropTypes.func,
    onMouseLeave: React.PropTypes.func,
    selected: React.PropTypes.bool,
    query: React.PropTypes.string,
    children: React.PropTypes.string
  },

  getInitialState() {
    return {
      hover: false
    };
  },

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  },

  onMouseEnter(ev) {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(ev);
    }

    this.toggleHover();
  },

  onMouseLeave(ev) {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(ev);
    }

    this.toggleHover();
  },

  render() {
    const selectedSuffix = (this.props.selected || this.state.hover ? " tt-cursor" : "");
    const clsName = `tt-suggestion${selectedSuffix}`;
    return (
      <div
        {...this.props}
        className={clsName}>
        <span
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          style={{
            display: "block",
            marginTop: 0,
            height: "35px",
            padding: "9px 0 10px",
            color: this.state.hover ? "#3da1e0" : "#888",
            fontWeight: "400",
            lineHeight: 1,
            whiteSpace: "nowrap"
          }}>
          {/* query is the first n letters of children based on current search algorithm */}
          <strong
            className="tt-highlight"
            style={{color: this.state.hover ? "#3da1e0" : "#444"}} >
            {this.props.query}
          </strong>
          {this.props.children.toLowerCase().slice(this.props.query.length)}
        </span>
      </div>
    );
  }
});
