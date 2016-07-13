/* @flow */
import React, { PropTypes, Component } from "react";
import ReactDOM from "react-dom";

import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import fireDataEvent from "@walmart/wmreact-analytics/lib/helpers/fire-data-event";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import Carousel from "@walmart/wmreact-carousel/lib/components/carousel";
import { getCarouselDecorators }
  from "@walmart/wmreact-carousel/lib/components/carousel-decorators";
import POVStory from "../helper-components/pov-story";

/**

The MiltiStory POV component has links, Images, Theme Button, dynamic pricing and theme buttons.
 * Provides link to the special Categories
 * Offers scaling and cropping on with safe zone on defined breakpoints

```jsx
<MultiStoryPOVResponsive
  isMobile={true}
  moduleData={multiStoryPOVData}/>
```
@import {MultiStoryPOVResponsive}
@component MultiStoryPOVResponsive
@playground
MultiStoryPOVResponsive
*/

class MultiStoryPOVResponsive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lazyLoadIndex: 1
    };

    this.moduleViewFired = [];
    this._loadStories = this._loadStories.bind(this);
    this._fireModuleView = this._fireModuleView.bind(this);
  }

  componentDidMount() {
    this._fireModuleView(0);
  }

  _isVisible() {
    const carouselNode = ReactDOM.findDOMNode(this.refs.carousel);
    return carouselNode.getBoundingClientRect().top >= 0;
  }

  // used to stub fireDataEvent in tests
  _fireDataEventWrapper(data) {
    return fireDataEvent(this, "module_view", data);
  }

  _fireModuleView(index) {
    if (!this._isVisible()) {
      return;
    }

    // only fire event for slide that hasn't been seen yet
    if (this.moduleViewFired[index]) {
      return;
    }
    this.moduleViewFired[index] = true;

    const { moduleId, configs: { story } } = this.props.moduleData;
    const { image: { uid, clickThrough: { type, value } } } = story[index];
    const uids = [uid];
    if (type === "map") {
      value.forEach((map, mapIndex) => {
        uids.push(`${uid}-${mapIndex}`);
      });
    }

    this._fireDataEventWrapper({ moduleId, uids });
  }

  _loadStories() {
    if (this.state.lazyLoadIndex !== null) {
      this.setState({ lazyLoadIndex: null });
    }
  }

  _renderPOVStories({ story, automationId, isMobile, lazyLoadIndex }) {

    const stories = [];
    let renderedStoryIndex = stories.length;

    story.forEach((frame) => {
      if (lazyLoadIndex !== null && renderedStoryIndex >= lazyLoadIndex) {
        stories.push(null);
      } else {
        stories.push(
          <POVStory
            isMobile={isMobile}
            key={renderedStoryIndex}
            story={frame}
            dataAutomationId={`${automationId}-${renderedStoryIndex}`}
          />
        );
      }
      renderedStoryIndex++;
    });

    return stories;
  }

  render() {
    const {
      moduleData: {
        moduleId,
        type,
        configs: {
          autoRotation,
          arrowColor,
          story
        }
      },
      isMobile,
      dataAutomationId,
      zoneId
    } = this.props;

    const initialSlideWidth = isMobile ? 878 : 1364;
    const automationId = `${dataAutomationId}-MultiStoryPOVResponsive`;

    const decoratorParams = {
      dataAutomationId: automationId,
      isLarge: true,
      isDark: arrowColor === "dark",
      isLight: arrowColor === "white",
      isNoHover: true,
      alwaysShow: true,
      dotsStyle: {
        bottom: 12
      }
    };
    const { lazyLoadIndex } = this.state;
    const RenderPOVProps = {
      story,
      automationId,
      isMobile,
      lazyLoadIndex
    };
    const autoPlay = autoRotation === "on";

    return (
      <CollectorContext moduleId={moduleId} zoneId={zoneId}>
        <div
          className="MultiStoryPOVResponsive"
          data-module={type}
          data-module-id={moduleId}
          {...getDataAutomationIdPair(automationId, "")}>
          <Carousel
            ref="carousel"
            autoplay={autoPlay}
            wrapAround={true}
            autoplayInterval={5000}
            {...{initialSlideWidth}}
            decorators={getCarouselDecorators(decoratorParams)}
            beforeSlide={this._loadStories}
            afterSlide={this._fireModuleView}>
            {this._renderPOVStories(RenderPOVProps)}
          </Carousel>
        </div>
      </CollectorContext>
    );
  }
}

MultiStoryPOVResponsive.displayName = "MultiStoryPOVResponsive";

MultiStoryPOVResponsive.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: PropTypes.shape({
    moduleId: PropTypes.string,
    type: PropTypes.string,
    configs: PropTypes.shape({
      autoRotation: PropTypes.string,
      arrowColor: PropTypes.string,
      story: PropTypes.array
    }).isRequired
  }).isRequired,
  /**
  To add proper torbit params (width and height)
  */
  isMobile: PropTypes.bool,
  /**
  Tempo module type for analytics and automation testing
  */
  dataAutomationId: PropTypes.string,
  /**
  * Zone ID for analytics
  */
  zoneId: PropTypes.number
};

MultiStoryPOVResponsive.defaultProps = {
  isMobile: false,
  dataAutomationId: "",
  zoneId: 0
};

MultiStoryPOVResponsive.contextTypes = {
  analytics: PropTypes.object
};

export default MultiStoryPOVResponsive;
