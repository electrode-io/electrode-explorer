/* @flow */
import React from "react";

import classNames from "classnames";
import Collapsable from "@walmart/wmreact-layout/lib/components/collapsable";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import Button from "@walmart/wmreact-interactive/lib/components/button";

/**
@private
*/
const SmallSection = React.createClass({
  displayName: "Comparison.SmallSection",

  propTypes: {
    product: React.PropTypes.shape({
      url: React.PropTypes.string,
      title: React.PropTypes.string
    }),
    prData: React.PropTypes.object
  },

  getInitialState(): Object {
    return {
      open: false
    };
  },

  _expandToggle(): void {
    this.setState({
      open: !this.state.open
    });
  },

  _renderComparisonTable(prData: Object, product: Object): ReactElement {
    const attrRows = [];
    prData.attributes.forEach((attr) => {
      attr.value.forEach((name, j) => {
        attrRows.push(
          <tr key={`${attr.category}-${j}`}>
            <td dangerouslySetInnerHTML={{__html: name}} />
            <td dangerouslySetInnerHTML={{__html: product.features[name]}} />
          </tr>
        );
      });
    });

    return (
      <div className="MiniComparisonContent">
        <table className="no-margin table table-first-col-font-alt font-semibold">
          <tbody>
            {attrRows}
          </tbody>
        </table>

        <div className="text-center">
          <a
            className="MiniComparisonLink font-semibold"
            href={`/ip/${product.id}`}
          >
            See more details
          </a>
        </div>
      </div>
    );
  },

  render(): ReactElement {
    return (
      <div className="MiniComparison">
        <Button
          onClick={this._expandToggle}
          fakelink
          className="MiniComparisonBtn"
        >
          <Arrange middle>
            <Arrange.Fit className="text-center">
              <img
                className="MiniComparison-image"
                src={this.props.product ? this.props.product.url : ""}
                alt=""
              />
            </Arrange.Fit>

            <Arrange.Fill>
              <p
                className="MiniComparison-title font-semibold"
                dangerouslySetInnerHTML={{__html: this.props.product ?
                  this.props.product.title : ""}}
              />
            </Arrange.Fill>

            <Arrange.Fit>
              <i className={classNames(
                "caret",
                "caret-yellow",
                {"active": this.state.open}
              )} />
            </Arrange.Fit>
          </Arrange>
        </Button>

        <Collapsable isOpen={this.state.open}>
          {this._renderComparisonTable(this.props.prData || {}, this.props.product || {})}
        </Collapsable>
      </div>
    );
  }
});

export default SmallSection;
