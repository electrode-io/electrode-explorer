/* @flow */
import React, { Component } from "react";
import classNames from "classnames";

/**
@private
*/
export default class TileBrick extends Component {
  _renderBrickTitle(): ReactElement {
    return (
      <p className={classNames("heading-d", "brick-heading")}>
        {this.props.title}
      </p>
    );
  }

  _renderBrickFooter(): ReactElement {
    const options = [];

    if (this.props.quantities) {
      this.props.quantities.forEach((quantity: string, index: number) => {
        options.push(<option key={index}>{quantity}</option>);
      });
    }

    return (
      <div className={classNames("brick-footer", "form-inline")}>
        <label>{this.props.unitLabel}</label>
        <select>{options}</select>
        <b className="pull-right">${this.props.price}</b>
      </div>
    );
  }

  _renderBrickImage(): ReactElement {
    return (
      <img className="product-image"
        src={this.props.imageSrc}
        alt={this.props.altText} />
    );
  }

  render(): ReactElement {
    return (
      <div className="brick">
        <div className="brick-primary">
          {this._renderBrickImage()}
          {this._renderBrickTitle()}
        </div>
        {this._renderBrickFooter()}
      </div>
    );
  }
}

TileBrick.displayName = "Tile.Brick";

TileBrick.propTypes = {
  title: React.PropTypes.string,
  quantities: React.PropTypes.array,
  unitLabel: React.PropTypes.string,
  price: React.PropTypes.number,
  imageSrc: React.PropTypes.string,
  altText: React.PropTypes.string
};

