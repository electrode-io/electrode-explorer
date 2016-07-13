import validCategoryTile from "src/helpers/category-tile-helpers";

describe("validCategoryTile", () => {
  const image = { src: "foo.jpg" };
  const productImageSrc = "bar.jsg";
  const link = { clickThrough: {} };

  it("should return true for valid image and valid link", () => {
    expect(validCategoryTile({ image, link })).to.be.true;
    expect(validCategoryTile({ productImageSrc, link })).to.be.true;
  });

  it("should return false for no image or no link", () => {
    expect(validCategoryTile({ link })).to.be.false;
    expect(validCategoryTile({ image })).to.be.false;
    expect(validCategoryTile({})).to.be.false;
  });
});
