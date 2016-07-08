/* global clearTimeout, setTimeout */
import React from "react";

/**
Spinner component.
@examples
```jsx
var SpinnerExample = React.createClass({
  render() {
    return(
      <Flyout triggerText='Click' direction='top'>
        <div className='spinner-demo'>
          <Spinner loading={true} fixed={false}/>
        </div>
      </Flyout>)
  }
});

React.render(<SpinnerExample/>, mountNode);
```
@component Spinner
@import {Spinner}
@synonym loading
@playground
Spinner
!noRenderFalse!
```
var SpinnerExample = React.createClass({
  render() {
    return(
      <Flyout triggerText='Click' direction='top'>
        <div className='spinner-demo'>
          <Spinner loading={true} fixed={false}/>
        </div>
      </Flyout>)
  }
});

React.render(<SpinnerExample/>, mountNode);
```
*/
class Spinner extends React.Component {
  constructor(props: Object): void {
    super(props);
    this.state = {
      loading: props.loading
    };
    this.timeout = null;
  }

  componentWillReceiveProps(nextProps: Object): void {
    const self = this;
    if (nextProps.loading === true) {
      this.timeout = setTimeout(() => {
        self.setState({
          loading: true
        });
      }, self.props.timeout);
    } else {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.setState({
        loading: false
      });
    }
  }

  _renderSpinner(): ReactElement {
    const backdropClass = this.props.fixed ?
      "spinner-backdrop spinner-backdrop-fixed" :
      "spinner-backdrop";
    return (
      <div className={backdropClass}>
        <div className="spinner"></div>
      </div>
    );
  }

  render(): ?ReactElement {
    let markup = null;
    if (this.state.loading) {
      markup = this._renderSpinner();
    }
    return markup;
  }
}

Spinner.propTypes = {
  /**
  True if we should show the spinner to indicate loading
  */
  loading: React.PropTypes.bool,
  /**
  Time in milliseconds before the spinner appears
  */
  timeout: React.PropTypes.number,
  /**
  True if the spinner should take the entire screen (display fixed)
  */
  fixed: React.PropTypes.bool
};

export default Spinner;
