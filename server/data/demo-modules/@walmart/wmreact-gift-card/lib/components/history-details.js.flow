import React from "react";
import classNames from "classnames";
import Moment from "moment";

import Price from "@walmart/wmreact-product-offers/lib/components/price/price-base";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import Button from "@walmart/wmreact-interactive/lib/components/button";

const tranxType = {
  redemption: "Purchase made",
  refund: "Value added",
  create: "Card purchased",
  activate: "Activated",
  cancel: "Value added",
  reload: "Value added"
};

class HistoryDetails extends React.Component {
  _renderHistoryRows(tranx, idx) {
    const info = (tranx.info === "9115") ? "Walmart.com" : `Walmart store# ${tranx.info}`;
    return (
      <div className={classNames("Grid row", {"even": (idx % 2 === 0)})}>
        <div className="Grid-col u-size-1-6-m">
          <span className="font-semibold hide-content-l">Date: </span>
          <span>{Moment.utc(tranx.date, "x").format("MM/DD/YYYY")}</span>
        </div>
        <div className="Grid-col u-size-2-6-m">
          <span className="font-semibold hide-content-l">Description: </span>
          <span>{`${tranxType[tranx.type]} : ${info}`}</span>
        </div>
        <div className="Grid-col u-size-1-4-m">
          <span className="font-semibold hide-content-l">Transaction: </span>
          <span><Price className="pull-right-l balance" price={tranx.amount}/></span>
        </div>
        <div className="Grid-col u-size-1-5-m">
          <span className="font-semibold hide-content-l">Balance: </span>
          <span><Price className="pull-right-l balance" price={tranx.balance}/></span>
        </div>
      </div>
    );
  }

  _closeModal() {
    this.props.onClose();
  }

  render() {
    const isZeroBalance = this.props.balance === 0;
    return (
      <div ref="history-modal-gc">
        <div className="hide-content-l m-header-gc">
          <Button
            fakelink
            automationId="close-gift-card-history"
            onClick={() => this._closeModal()}>
            <span>Back</span>
          </Button>
        </div>
        <div className="modal-wrapper-gc">
          <Heading.H2>Gift card history</Heading.H2>
          <div className="gift-card-info">
            <div className="gift-card-fullname">{this.props.label}</div>
            <Layout medium={2} x-small={1} padding>
              <div className="gift-card-info">
                <span className="font-semibold">Ending in: </span>
                {this.props.lastFour}
              </div>
              <div className={
                  classNames("pull-right-l gift-card-info", {"zero-balance": isZeroBalance})
                }>
                <span className="font-semibold">Balance: </span>
                <Price className={classNames({
                  "balance": !isZeroBalance
                })} price={this.props.balance}/>
              </div>
            </Layout>
          </div>
          <div className="Grid">
            <div className="history-grid-header hide-content-max-m">
              <div className="Grid-col u-size-1-6-m">
                <span className="font-semibold">Date</span>
              </div>
              <div className="Grid-col u-size-2-6-m">
                <span className="font-semibold">Description</span>
              </div>
              <div className="Grid-col u-size-1-4-m">
                <span className="font-semibold pull-right">Transaction</span>
              </div>
              <div className="Grid-col u-size-1-5-m">
                <span className="font-semibold pull-right">Balance</span>
              </div>
            </div>
            {this.props.history.map((t, idx) => this._renderHistoryRows(t, idx))}
          </div>
        </div>
      </div>
    );
  }
}

HistoryDetails.propTypes = {
  label: React.PropTypes.string.isRequired,
  lastFour: React.PropTypes.string.isRequired,
  balance: React.PropTypes.number.isRequired,
  history: React.PropTypes.array,
  currency: React.PropTypes.string.isRequired,
  onClose: React.PropTypes.func
};

export default HistoryDetails;
