import resizeImageMap from "src/helpers/resize-image-map";

describe("resizeImageMap", () => {
  let imageDOMStub;
  let originalCoords;
  let naturalImageSize;

  beforeEach(() => {
    imageDOMStub = {
      complete: true,
      useMap: "#foo",
      height: 1287,
      width: 283
    };

    naturalImageSize = {
      naturalWidth: 1364,
      naturalHeight: 300
    };

    originalCoords = ["110,56,650,178"];
  });

  describe("when the image hasn't loaded", () => {
    it("should return the original coordinates when not done loading", () => {
      Object.assign(imageDOMStub, {complete: false});
      const result = resizeImageMap(imageDOMStub, originalCoords, naturalImageSize);
      expect(result).to.eql(originalCoords);
    });
  });

  describe("when the image doesn't have a map", () => {
    it("should return the original coordinates when not done loading", () => {
      Object.assign(imageDOMStub, {useMap: undefined});
      const result = resizeImageMap(imageDOMStub, originalCoords, naturalImageSize);
      expect(result).to.eql(originalCoords);
    });
  });

  describe("when the image size hasn't changed", () => {
    it("should return the original coordinates when not done loading", () => {
      Object.assign(imageDOMStub, { height: 300, width: 1364 });
      const result = resizeImageMap(imageDOMStub, originalCoords, naturalImageSize);
      expect(result).to.eql(originalCoords);
    });
  });

  it("calculates the image map based on image size", () => {
    const imageBreakpoint1 = Object.assign({}, imageDOMStub, { width: 1287, height: 283 });
    const result1 = resizeImageMap(imageBreakpoint1, originalCoords, naturalImageSize);
    expect(result1).to.eql(["103,52,613,167"]);

    const imageBreakpoint2 = Object.assign({}, imageDOMStub, { width: 809, height: 178 });
    const result2 = resizeImageMap(imageBreakpoint2, originalCoords, naturalImageSize);
    expect(result2).to.eql(["65,33,385,105"]);

    const imageBreakpoint3 = Object.assign({}, imageDOMStub, { width: 546, height: 120 });
    const result3 = resizeImageMap(imageBreakpoint3, originalCoords, naturalImageSize);
    expect(result3).to.eql(["44,22,260,71"]);
  });
});
