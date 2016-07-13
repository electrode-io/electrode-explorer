import React from "react";

export const generateMidasTileProps = (midasData, id) => {
  const { relRank, details, campaignId, adGroupId, adType, uuid } = midasData;
  const { productId, usItemId } = id;

  return {
    "data-rel-rank": relRank,
    "data-details": details,
    "data-campaign-id": campaignId,
    "data-ad-group-id": adGroupId,
    "data-ad-type": adType,
    "data-ad-uid": uuid,
    "data-product-us-item-id": usItemId,
    "data-product-id": productId
  };
};

export const renderMidasTileBeacon = (midasData) => (
  <img
    src=""
    data-triggered="0"
    data-beacon-src={midasData.impBeacon}
    className="js-ad-impression-beacon sponsored-products-imp-beacon hide-content" />
);

export const generateMidasCarouselProps = (midasModuleData) => {
  const { bucketId, details, adModule, uuid, relUuid } = midasModuleData;

  return {
    "data-bucket-id": bucketId,
    "data-details": details,
    "data-ad-module": adModule,
    "data-ad-uid": uuid,
    "data-rel-uuid": relUuid
  };
};

export const renderMidasCarouselBeacons = (midasModuleData) => {
  const { pageBeacons } = midasModuleData;
  if (!pageBeacons) {
    return null;
  }

  return (
    <span className="wpa-beacons">
      {Object.keys(pageBeacons).map((key, index) => {
        return (
          <img
            key={index}
            src=""
            data-triggered="0"
            className="js-ad-page-beacon sponsored-products-page-beacon hide-content"
            data-beacon-type={key}
            data-beacon-src={pageBeacons[key]} />
        );
      })}
    </span>
  );
};
