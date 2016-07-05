import { checkImageSrc } from "@walmart/wmreact-image-utils/lib/utils/image-utils";

const POV_IMAGE = {
  mobile: {
    height: 178,
    width: 809
  },
  desktop: {
    height: 300,
    width: 1364
  }
};

export const getTorbitImage = (imageUrl, isMobile) => {
  const { height, width } = POV_IMAGE[isMobile ? "mobile" : "desktop"];
  return checkImageSrc(imageUrl, height, width);
};
