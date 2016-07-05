import Copy from "@walmart/wmreact-base/lib/components/copy";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";
import React, { PropTypes } from "react";

import { noop } from "../common/utils";

const StoreTile = ({ store, shouldLink, isMyStore, onClick }) => {
  const { id, address } = store;

  const _onClick = (storeId, ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    onClick(storeId);
  };

  // --------------------------------------------------------------------------

  const _renderTileBody = () => (
    <div className="StoreCarousel-addressBlock">
      <Copy className="StoreCarousel-storeName StoreCarousel--truncated">
        {isMyStore && <Icon size={14} name="star" />}
        {address.city}
      </Copy>
      <div className="StoreCarousel-storeAddress StoreCarousel--truncated">
        {address.address1}
      </div>
    </div>
  );

  return (
    <div className="StoreCarousel-tile">
      {shouldLink ?
        <Link href={`/store/${id}`} onClick={_onClick.bind(null, id)}>
          {_renderTileBody()}
        </Link> :
        _renderTileBody()
      }
    </div>
  );
};

StoreTile.propTypes = {
  onClick: PropTypes.func,
  shouldLink: PropTypes.bool,
  isMyStore: PropTypes.bool,
  store: PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.shape({
      city: PropTypes.string,
      address1: PropTypes.string
    })
  }).isRequired
};


StoreTile.defaultProps = {
  onClick: noop(),
  shouldLink: true,
  isMyStore: false
};

export default StoreTile;
