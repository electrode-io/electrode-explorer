/* @flow */
import React, { PropTypes } from "react";
import ReactDOM from "react-dom";

import NukaCarousel from "nuka-carousel";
import ClientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import Decorators from "./carousel-decorators";

const BREAKPOINT_MAPPING = {
  extraSmall: "x-small",
  small: "small",
  medium: "medium",
  large: "large",
  extraLarge: "x-large"
};

/**
Responsive Carousel component base on [Nuka Carousel](http://kenwheeler.github.io/nuka-carousel/)
@examples
```jsx
<Carousel style={{marginBottom: 40}}
  framePadding="40"
  cellSpacing={20}>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>E</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>F</div>
</Carousel>
```

And something a bit more complex that adjusts settings based on media selectors:

```jsx
<Carousel style={{marginBottom: 40}}
  framePadding="40"
  cellSpacing={20}
  responsive={[
    {
      selectors: ['x-small', 'small'],
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      selectors: ['medium', 'large'],
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      selectors: ['x-large', 'xx-large'],
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]}>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>E</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>F</div>
</Carousel>
```

If you want products in your carousel you should check out
the `ProductsCarousel` in the `products` library.
@component Carousel
@import Carousel
@playground
Carousel
```
<Carousel style={{marginBottom: 40}}
  framePadding="40"
  cellSpacing={20}
  responsive={[
    {
      selectors: ['x-small', 'small'],
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      selectors: ['medium', 'large'],
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      selectors: ['x-large', 'xx-large'],
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]}>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>E</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>F</div>
</Carousel>
```
*/
export class Carousel extends React.Component {
  constructor(props) {
    super(props);

    const breakpoint = this._getBreakpoint(props.breakpoint);
    this.state = { breakpoint };
    this._resizeHandler = this._resizeHandler.bind(this);
  }

  componentDidMount() {
    const { respondTo } = this.props;

    if (respondTo === "slider") {
      ClientWidth._setClientWidthGetter(() => {
        return ReactDOM.findDOMNode(this).offsetWidth;
      });
    }

    window.addEventListener("resize", this._resizeHandler);
    //reconcile with actual screen size. Server may not know the exact breakpoint.
    this._resizeHandler();
  }

  _getBreakpoint(breakpoint) {
    breakpoint = breakpoint || ClientWidth.getCurrentBreakpoint();
    return BREAKPOINT_MAPPING[breakpoint] || breakpoint;
  }

  _resizeHandler() {
    const { screenWidth } = this.props;
    if (screenWidth) { return; } // Don't handle the cases when screenWidth is present.

    const breakpoint = this._getBreakpoint();

    if (this.state.breakpoint !== breakpoint) {
      this.setState({ breakpoint });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resizeHandler);
  }

  _getResponsiveSettings(responsive, breakpoint, screenWidth) {
    return responsive.reduce((result, current) => {
      if ((current.selectors && current.selectors.indexOf(breakpoint) > -1) ||
        screenWidth >= current.widerThan) {
        result = current.settings;
      }

      return result;
    }, null);
  }

  render() {
    const { hidden, children, responsive, screenWidth, ...originalProps } = this.props;
    const { breakpoint } = this.state;

    const classes = hidden ? "hide-content" : "";
    const settings = this._getResponsiveSettings(responsive, breakpoint, screenWidth);

    return (
      <NukaCarousel className={classes} {...originalProps} {...settings}>
        {children}
      </NukaCarousel>
    );
  }
}

Carousel.propTypes = {
  /**
   * Child components to be rendered as slides in carousel
   */
  children: PropTypes.node,
  /**
   * Decorators containing React components and styles to display over the carousel.
   */
  decorators: PropTypes.array,
  /**
   * Responsive settings for different breakpoints
   */
  responsive: PropTypes.array,
  /**
   * For hiding the component
   */
  hidden: PropTypes.bool,
  /**
   * Current active breakpoint whose settings to be used
   */
  breakpoint: PropTypes.string,
  /**
  * Current screen width for for responsive settings to be used
  */
  screenWidth: PropTypes.number,
  /**
   * Responds to window or slider width
   */
  respondTo: PropTypes.string
};

Carousel.defaultProps = {
  decorators: Decorators,
  responsive: [
    {
      selectors: ["x-small", "small", "medium", "large", "x-large"],
      settings: {}
    }
  ],
  breakpoint: "",
  screenWidth: null,
  hidden: false,
  respondTo: "window"
};

export default Carousel;
