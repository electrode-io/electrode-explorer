// condition to check if category tiles should be added. tile should have an image and link
const validCategoryTile = (category) => {
  const { image, productImageSrc, link } = category;
  return !!((image && image.src || productImageSrc) && link && link.clickThrough);
};

export default validCategoryTile;
