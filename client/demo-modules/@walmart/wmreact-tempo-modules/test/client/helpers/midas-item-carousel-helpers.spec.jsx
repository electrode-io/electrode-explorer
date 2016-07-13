import {
  generateMidasTileProps,
  renderMidasTileBeacon,
  generateMidasCarouselProps,
  renderMidasCarouselBeacons
} from "src/helpers/midas-item-carousel-helpers";

describe("Midas Item Carousel Helpers", () => {
  it("generateMidasTileProps should return the expected props", () => {
    const relRank = "0";
    const details = "1";
    const campaignId = "2";
    const adGroupId = "3";
    const adType = "a";
    const uuid = "4";
    const productId = "5";
    const usItemId = "6";

    const midasData = { relRank, details, campaignId, adGroupId, adType, uuid };
    const id = { usItemId, productId };
    const expected = {
      "data-rel-rank": relRank,
      "data-details": details,
      "data-campaign-id": campaignId,
      "data-ad-group-id": adGroupId,
      "data-ad-type": adType,
      "data-ad-uid": uuid,
      "data-product-us-item-id": usItemId,
      "data-product-id": productId
    };

    expect(generateMidasTileProps(midasData, id)).to.eql(expected);
  });

  it("renderMidasTileBeacon return the expected image beacon", () => {
    const src = "foo";
    expect(renderMidasTileBeacon({ impBeacon: src })).to.shallowly.have.props("data-beacon-src")
      .eq(src);
  });

  it("generateMidasCarouselProps should return the expected props", () => {
    const bucketId = "0";
    const details = "1";
    const adModule = "a";
    const uuid = "2";
    const relUuid = "3";

    const midasModuleData = { bucketId, details, adModule, uuid, relUuid };
    const expected = {
      "data-bucket-id": bucketId,
      "data-details": details,
      "data-ad-module": adModule,
      "data-ad-uid": uuid,
      "data-rel-uuid": relUuid
    };

    expect(generateMidasCarouselProps(midasModuleData)).to.eql(expected);
  });

  describe("renderMidasCarsouselBeacons", () => {
    it("returns null if no pageBeacons present", () => {
      expect(renderMidasCarouselBeacons({})).to.be.null;
    });

    it("returns the expected image beacons", () => {
      const midasData = { pageBeacons: { a: "foo", b: "bar" } };
      expect(renderMidasCarouselBeacons(midasData)).to.shallowly.find("img").to.have.length(2);
    });
  });
});
