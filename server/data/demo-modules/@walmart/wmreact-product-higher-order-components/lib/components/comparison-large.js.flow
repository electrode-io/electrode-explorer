/* @flow */
import React from "react";

import Layout from "@walmart/wmreact-layout/lib/components/layout";
import Carousel from "@walmart/wmreact-carousel/lib/components/carousel";

import getProductData from "./comparison-get-data";

/**
Large factor comparison table.
@examples
```jsx
<Comparison.Large productData={comparisonData}/>
```
@component Comparison.Large
@import {Comparison}
@playground
Comparison.Large
```
<Comparison.Large productData={comparisonData}/>
```
*/
const Large = React.createClass({
  displayName: "Comparison.Large",

  mixins: [React.PureRenderMixin],

  propTypes: {
    /**
    The product data
    */
    productData: React.PropTypes.array
  },

  getDefaultProps(): Object {
    return {
      productData: []
    };
  },

  _renderAttributeNames(prData: Object) {
    const attrRows = [];
    prData.attributes.forEach((attr, i) => {
      attrRows.push(
        <tr
          key={`attr-row-${i}`}
          className="comparison-attribute-row comparison-attribute-header">
          <th className="ComparisonKey-cell ComparisonHeaderRow">
            {attr.category || "Features"}
          </th>
        </tr>
      );

      attr.value.forEach((name, j) => {
        attrRows.push(
          <tr className="comparison-value-row" key={`${attr.category}-${j}`}>
            <td className="ComparisonKey-cell">
              <span dangerouslySetInnerHTML={{__html: name}} />
            </td>
          </tr>
        );
      });
    });

    return attrRows;
  },

  _renderAttributesTable(prData: Object): ReactElement {
    return (
      <div className="ComparisonKey">
        <table className="comparison-attributes table no-margin">
          <tbody>
            <tr className="comparison-attribute-row">
              <th>
                <div className="ComparisonHeader">
                  <img
                    className="ComparisonHeader-brandImage"
                    src={prData.brand}
                  />
                </div>
              </th>
            </tr>
            {this._renderAttributeNames(prData)}
          </tbody>
        </table>
      </div>
    );
  },

  _renderFeatures(attributes: Array, features: Object) {
    const featureRows = [];
    attributes.forEach((attr, i) => {
      featureRows.push(
        <tr
          key={`feature-${i}`}
          className="comparison-value-row comparison-split-row">
          <td className="ComparisonKey-cell ComparisonHeaderRow">&nbsp;</td>
        </tr>
      );

      attr.value.forEach((name, j) => {
        featureRows.push(
          <tr className="comparison-attribute-row" key={`${attr.category}-row-${j}`}>
            <td className="ComparisonTable-cell">
              <span dangerouslySetInnerHTML={{__html: features[name]}} />
            </td>
          </tr>
        );
      });
    });

    return featureRows;
  },

  _renderProduct(prData: Object, product: Object): ReactElement {
    return (
      <table className="comparison-values table no-margin">
        <tbody>
          <tr className="comparison-header-row">
            <th>
              <a className="ComparisonHeader" href={`/ip/${product.id}`}>
                <img className="ComparisonHeader-image" src={product.url} />
                <span
                  className="ComparisonHeader-title"
                  dangerouslySetInnerHTML={{__html: product.title}}
                />
              </a>
            </th>
          </tr>
          {this._renderFeatures(prData.attributes, product.features)}
        </tbody>
      </table>
    );
  },

  renderOriginal(prData: Object): ReactElement {
    return (
      <div className="ComparisonRoot">
        <span className="ComparisonRoot-marker font-weight-semibold">You are viewing</span>
        {this._renderProduct(prData, prData.products[0])}
      </div>
    );
  },

  _renderComparisons(prData:Object): ReactElement {
    const compares = prData.products.slice(1);
    return (
      <Carousel slidesToShow={2} slidesToScroll={1}>
        {compares.map((product, i) => {
          return (
            <div key={i}>
              {this._renderProduct(prData, product)}
            </div>
          );
        })}
    </Carousel>
    );
  },

  render(): ?ReactElement {
    if (this.props.productData) {
      const prData = getProductData(this.props.productData || []);
      return (
        <Layout small-sizes={[3, 3, 6]} className="ComparisonTable">
          {this._renderAttributesTable(prData)}
          {this.renderOriginal(prData)}
          {this._renderComparisons(prData)}
        </Layout>
      );
    }

    return null;
  }
});

export default Large;
