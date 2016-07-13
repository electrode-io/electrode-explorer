import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import Tile from "@walmart/wmreact-product-card/lib/components/tile";
import ProductCTAAddToCart from
"@walmart/wmreact-product-buttons/lib/components/product-cta-add-to-cart";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { addToCart, clearLatestAddToCartResult } from "../actions/add-to-cart";
import { AddToCartAdapter } from "../adapters/add-to-cart-adapter";
import { ActionStatusAdapter } from "../adapters/action-status-adapter";

const addToCartAdapter = new AddToCartAdapter();
const actionStatusAdapter = new ActionStatusAdapter();

export class P13NTile extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.product !== nextProps.product
      || this.props.enableATC !== nextProps.enableATC
      || this.props.actionStatus !== nextProps.actionStatus;
  }

  _onAddToCart(product) {
    const { onAddToCart } = this.props;
    return () => {
      onAddToCart(product, 1);
    };
  }

  _renderATCButton(onAddToCart) {
    const { actionStatus, onCloseAddedToCartFlyout } = this.props;
    return (
      <div>
        <ProductCTAAddToCart
          actionStatus={actionStatus}
          onAddToCart={onAddToCart}
          onCloseAddedToCartFlyout={onCloseAddedToCartFlyout}
          displayingCartIcon={true}
          buttonStyle={"inverse"}
          flyoutDirection="center"
          flyoutAlign="bottom"
          checkoutMsg={"Added to cart"} />
      </div>
    );
  }

  _renderControls(product) {
    const onAddToCart = this._onAddToCart(product).bind(this);
    if (product.atcEnabled) {
      if (product.atcButtonType === "addToCart") {
        return this._renderATCButton(onAddToCart);
      } else {
        return (
          <div className="p13n-atc-more">
            <Button className="btn-block"
              inverse={true}
              onClick={() => window.location.href = product.url}>
              See Details
            </Button>
          </div>
        );
      }
    }
    return null;
  }

  _renderParentTileTitle(index, isRVI, isTrending) {
    return isRVI && !isTrending && index === 0 ? (
      <div className="parent-heading-container">
        <h5 className="parent-heading font-semibold">Item you viewed</h5>
      </div>
    ) : null;
  }

  render() {
    const {
      index,
      product,
      onClick,
      isRVI,
      isTrending
    } = this.props;
    return (
      <div className="p13n-tile">
        {this._renderParentTileTitle(index, isRVI, isTrending)}
        <Tile
          key={index}
          {...product}
          onClick={onClick}
        />
        {this._renderControls(product)}
      </div>
    );
  }
}

P13NTile.displayName = "P13NTile";

P13NTile.propTypes = {
  "enableATC": PropTypes.bool,
  "isRVI": PropTypes.bool,
  "isTrending": PropTypes.bool,
  "index": PropTypes.number,
  "product": PropTypes.object,
  "onAddToCart": PropTypes.func,
  "onCloseAddedToCartFlyout": PropTypes.func,
  "actionStatus": PropTypes.object,
  "onClick": PropTypes.func
};

P13NTile.defaultProps = {
  "index": 0,
  "enableATC": true
};

export const mapStateToProps = (state, ownProps) => {
  const actionStatus = actionStatusAdapter.adapt(
    ownProps.product, state.recommendationMap.addToCartStatus);
  return {
    actionStatus
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product, quantity) => {
      const item = addToCartAdapter.adapt(product, quantity);
      dispatch(addToCart(item));
    },
    onCloseAddedToCartFlyout: () => {
      dispatch(clearLatestAddToCartResult());
    }
  };
};

const StatefulP13NTile = connect(mapStateToProps, mapDispatchToProps)(P13NTile);

export default StatefulP13NTile;
