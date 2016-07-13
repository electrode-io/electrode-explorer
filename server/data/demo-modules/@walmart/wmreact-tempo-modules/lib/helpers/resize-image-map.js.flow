/**
 * Resizes image maps proportionately to their corresponding image
 *
 * @param {Element} image DOM element of image to resize coordinates to
 * @param {String} originalCoords Original coordinates in comma separated string format
 * @param {object} naturalImageSize contains natural Image sizes.
 * @returns {String} adjusted coordinates
 */
const resizeImageMap = (image, originalCoords, naturalImageSize) => {
  const {
    complete,
    useMap,
    width: actualWidth,
    height: actualHeight
  } = image;

  const {
    naturalWidth,
    naturalHeight
  } = naturalImageSize;

  if (
    !complete || !useMap ||
    (actualWidth === naturalWidth &&
     actualHeight === naturalHeight)
  ) {
    return originalCoords;
  }

  const resizeWidth = (width) => parseInt(width / naturalWidth * actualWidth);
  const resizeHeight = (height) => parseInt(height / naturalHeight * actualHeight);

  return originalCoords.map((coords) => (
    coords.split(",").map((coord, index) => (
      index % 2 === 0 ? resizeWidth(coord) : resizeHeight(coord)
    )).toString()
  ));
};

export default resizeImageMap;
