import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { default as P13NImage } from "./p13n-rvi-image";
import { P13NCarousel } from "./p13n-carousel";
import { clearCurrentList, checkTrending } from "../utils/p13n-rvi-utils";
import { clearCookie } from "../utils/sps-cookie-utils";
import { transformPlacementProducts, generateGuid } from "../utils/p13n-utils";
import { fetchIrsDataMap } from "../service/p13n-fetcher";
import classnames from "classnames";

export class P13NRecommendationRvi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      parentEntities: this.props.irsData.parentEntities,
      products: this.props.products
    };
  }

  handleClick(index, productId) {
    const self = this;
    this.setState({
      selectedIndex: index,
      updateCarousel: true
    });
    fetchIrsDataMap({
      "parentItemId": productId,
      "template": "P13NRecommendation",
      "page": this.props.page,
      "clientGuid": generateGuid()
    }).then((data) => {
      const irsData = transformPlacementProducts({
        irsDataObj: data.irsData,
        resultDetail: data.resultDetail,
        visitorId: data.visitorId,
        placementId: this.props.placementId
      });
      const products = irsData.adaptedData[this.props.placementId].recommendedProducts;
      const parentEntities = this.props.irsData.parentEntities;
      const selectedIndex = this.state.selectedIndex;
      const isTrending = checkTrending(parentEntities, products, selectedIndex);
      self.setState({
        isTrending,
        updateCarousel: false,
        products: irsData.adaptedData[this.props.placementId].recommendedProducts
      });
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.updateCarousel) {
      this._renderSpinner();
    } else {
      this._removeSpinner();
    }
  }

  componentDidMount() {
    /* eslint-disable no-undef */
    const rviContainer = document.querySelector(".rvi-recommendations-container");
    const rviContainerStyle = window.getComputedStyle(rviContainer);
    const height = rviContainerStyle.getPropertyValue("height");
    const spinnerContainer = document.querySelector(".rvi-spinner-container");
    spinnerContainer.style.height = height;
  }

  _renderSpinner() {
    /* eslint-disable no-undef */
    const spinnerContainer = document.querySelector(".rvi-spinner-container");
    spinnerContainer.style.display = "block";
    const classNames = classnames("spinner-backdrop", "js-p13n-spinner-backdrop");
    ReactDOM.render((
      <div className={classNames}>
        <div className="spinner"></div>
      </div>
    ), spinnerContainer);
  }

  _removeSpinner() {
    /* eslint-disable no-undef */
    const spinnerContainer = document.querySelector(".rvi-spinner-container");
    spinnerContainer.style.display = "none";
  }

  clearRviList() {
    clearCurrentList();
    /* eslint-disable no-undef */
    const rviView = document.querySelector(".rvi-view");
    clearCookie();
    rviView.style.display = "none";
  }

  _renderP13NRVIFirstTier(parentEntities) {
    const classNames = classnames("recently-viewed-tiles",
      "u-paddedRow",
      "hide-content-max-m"
    );
    return (
      <div className={classNames}>
        {parentEntities.map((product, index) => {
          const boundClick = this.handleClick.bind(this, index, product.productId);
          return (
            <P13NImage
              product={product}
              selected={index === this.state.selectedIndex}
              onClick={boundClick}/>
          );
        })}
      </div>
    );
  }

  _renderP13NRVISecondTier(products) {
    const classNames = classnames("rvi-recommendations-container",
      "js-rvi-recommendations-container"
    );
    return (
      <div className={classNames}>
        <div className="rvi-spinner-container"></div>
        {this._renderP13NCarousel(products)}
      </div>
    );
  }

  _renderP13NCarousel(products) {
    const {isTrending} = this.state;
    return (this.state.hasOwnProperty("updateCarousel") && this.state.updateCarousel) ? null : (
      <P13NCarousel products={products} isRVI={true} isTrending={isTrending}/>
    );
  }

  render() {
    const {parentEntities, products} = this.state;
    return parentEntities && parentEntities.length > 0 ? (
      <div className={classnames("rvi-view", "js-rvi-view")}>
        <div className={classnames("rvi-ResponsiveContainer",
      "p13n-rvi-module", "hide-content-max-m")}>
          <div className={classnames("tempo-module-header", "u-paddedRow")}>
            <h5 className={classnames("tempo-module-heading", "pull-left")}>
              Inspired by your browsing history
            </h5>
            <span onClick={this.clearRviList}
              className={classnames(
                "clear-list", "js-clear-rvi-list", "pull-right", "hide-content-max-m")}>
              Clear this list</span>
          </div>
          {this._renderP13NRVIFirstTier(parentEntities)}
          {this._renderP13NRVISecondTier(products)}
        </div>
      </div>
    ) : null;
  }
}

P13NRecommendationRvi.propTypes = {
  page: PropTypes.string,
  placementId: PropTypes.string,
  irsData: PropTypes.object,
  products: PropTypes.array
};

P13NRecommendationRvi.displayName = "P13NRecommendationRvi";

export default P13NRecommendationRvi;
