/* @flow */
/* eslint prefer-const:0, react/prop-types: 0 */
import React, { Component, PropTypes } from "react";

import classNames from "classnames";

import { fireStatelessUIEvent } from "@walmart/wmreact-analytics";

export const EMPTY_PIXEL
  = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";

/**
Image component that conforms to our standard sizings.
@examples
```jsx
<Image src="foo.jpg" size={50} />
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Image
@import {Image}
@playground
```
<div>
  <Image src="http://placehold.it/1000x1000" size={30}/>
  <Image src="http://placehold.it/1000x1000" size={45}/>
  <Image src="http://placehold.it/1000x1000" size={50}/>
  <Image src="http://placehold.it/1000x1000" size={60}/>
  <Image src="http://placehold.it/1000x1000" size={100}/>
  <Image src="http://placehold.it/1000x1000" size={125}/>
  <Image src="http://placehold.it/1000x1000" size={150}/>
  <Image src="http://placehold.it/1000x1000" size={180}/>
</div>
```
*/
class Image extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      mounted: false
    };
  }
  /*
    We do this on did mount because
    we want this to run only _after_
    the client has taken over. Generally,
    you do not want to set start in didMount
    because then the client will see the wrong
    behavior. However, this is exactly what we want
    here.
  */
  /* eslint-disable react/no-did-mount-set-state */
  componentDidMount() {
    const { ondemand } = this.props;

    if (!ondemand) {
      this.setState({
        mounted: true
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { ondemand, src } = nextProps;
    const { mounted } = this.state;

    if (!mounted && ondemand && (src !== this.props.src)) {
      this.setState({ mounted: true });
    }
  }

  /* eslint-enable */

  render() {
    const {
      size,
      onClick,
      className,
      hidden,
      children,
      src,
      lazy,
      ondemand,
      ...other
     } = this.props;
    // size: number, other: object

    const _onClick = (event: Object) => {
      fireStatelessUIEvent(this.props, this.context, event);
      onClick(event);
    };

    let extras = {};
    if (size) {
      extras[`img-${size}`] = true;
    }
    const loadSrc = !ondemand && !lazy || this.state.mounted
      ? src
      : EMPTY_PIXEL;
    return (
      <img
        {...other}
        src={loadSrc}
        onClick={_onClick}
        className={classNames(
          extras,
          className,
          hidden ? "hide-content" : ""
        )}
      >
        {children}
      </img>
    );
  }
}

const validateDimension = (props) => {
  if (props.lazy && !props.size && (!props.width && !props.height)) {
    return new Error(`If you use lazy (set to ${props.lazy} ) you should
      also supply size(${props.size}) or height &
      width (${props.height} & ${props.width}).`);
  }
};

Image.propTypes = {
  lazy: PropTypes.bool,
  size: PropTypes.number,
  height: validateDimension,
  width: validateDimension,
  onClick: PropTypes.func,
  className: PropTypes.string,
  src: PropTypes.string,
  ondemand: PropTypes.bool
};

Image.defaultProps = {
  lazy: false,
  onClick: () => {},
  className: "",
  hidden: false,
  ondemand: false
};

Image.contextTypes = {
  analytics: React.PropTypes.object
};

export default Image;
