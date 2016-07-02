/* @flow */
import React from "react";
import layoutHelper from "@walmart/wmreact-layout/lib/components/helpers/layout-helper";
import ProductShortDescription
from "@walmart/wmreact-product-typography/lib/components/product-short-description";
import ProductTitle from "@walmart/wmreact-product-typography/lib/components/product-title";
import Image from "@walmart/wmreact-base/lib/components/image";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import { checkImageSrc } from "@walmart/wmreact-image-utils/lib/utils/image-utils";

const {
  Component,
  PropTypes
} = React;

const DEFAULT_WIDTH = 450;
const DEFAULT_HEIGHT = 450;

const AUTOMATION_CONTEXT = "DetailedHeroImage";

/**
 A Hero image with a description.
 ```jsx
 <div>
   <DetailedHeroImage
     title="Here Is A Collection Item"
     description={`It is pretty cool and even describes itself
      <div>It can even take HTML</div>`}
     imageWidth={400}
     imageHeight={250}
     imageUrl="http://loremflickr.com/400/250/puppy"
   />
 </div>
 ```
 @import {DetailedHeroImage}
 @component DetailedHeroImage
 @playground
 DetailedHeroImage
 ```
 <div>
   <DetailedHeroImage
     title="Here Is A Collection Item"
     description={`It is pretty cool and even describes itself
      <div>It can even take HTML</div>`}
     imageWidth={400}
     imageHeight={250}
     imageUrl="http://loremflickr.com/400/250/puppy"
   />
 </div>
 ```
*/

const sizes = layoutHelper({
  "large-sizes": [6],
  "medium-sizes": [6],
  "small-sizes": [12]
}).join(" ");

const styles = {
  "DetailedHeroImage-Image": "DetailedHeroImage-Image",
  "DetailedHeroImage-Image-Container": `DetailedHeroImage-Image-Container ${sizes}`,
  "DetailedHeroImage-Separator": "DetailedHeroImage-Separator",
  "DetailedHeroImage-HeadingContainer": "DetailedHeroImage-HeadingContainer",
  "DetailedHeroImage-DescriptionContainer":
    `DetailedHeroImage-DescriptionContainer ${sizes} hide-content-max-m`,
  "DetailedHeroImage": "DetailedHeroImage"
};

class DetailedHeroImage extends Component {
  _renderImage({imageUrl, title, imageWidth, imageHeight}): ReactElement {
    return (
      <div
        className={styles["DetailedHeroImage-Image-Container"]}
        {...getDataAutomationIdPair(AUTOMATION_CONTEXT, "Image", process)}
      >
        <Image
          width={imageWidth}
          height={imageHeight}
          alt={title}
          className={styles["DetailedHeroImage-Image"]}
          src={checkImageSrc(imageUrl, imageHeight, imageWidth)}/>
      </div>
    );
  }

  _renderDescription(title, description, onClick): ReactElement {
    return (
      <div className={styles["DetailedHeroImage-DescriptionContainer"]}>
        <div className={styles["DetailedHeroImage-HeadingContainer"]}>
          {this._renderTitle(title)}
        </div>

        <hr className={styles["DetailedHeroImage-Separator"]} />

        <ProductShortDescription
          content={description}
          onClick={onClick}
          moreInfoLabel="Read more…"
          big={true}
          {...getDataAutomationIdPair(AUTOMATION_CONTEXT, "Description", process)}
        />
      </div>
    );
  }

  _renderTitle(title): ReactElement {
    return (
      <ProductTitle
        title={title}
        big={true}
        maxLines={2}
        {...getDataAutomationIdPair(AUTOMATION_CONTEXT, "Title", process)}
      />
    );
  }

  render(): ReactElement {
    const {
      title,
      description,
      onClick
    } = this.props;
    return (
      <div className="DetailedHeroImage-Container">
        <div className="hide-content-m">
          {this._renderTitle(title)}
        </div>
        <div className="DetailedHeroImage Grid">
          {this._renderImage(this.props)}
          {this._renderDescription(title, description, onClick)}
        </div>
      </div>
    );
  }
}

DetailedHeroImage.displayName = "DetailedHeroImage";

DetailedHeroImage.propTypes = {
  /**
  The title of the item or collection.
  */
  title: PropTypes.string.isRequired,
  /**
  The description of the item or collection.
  */
  description: PropTypes.string.isRequired,
  /**
  The width of the hero image.
  */
  imageWidth: PropTypes.number,
  /**
  The height of the hero image.
  */
  imageHeight: PropTypes.number,
  /**
  This is a URL of the hero image.
  */
  imageUrl: PropTypes.string.isRequired,
  /**
  Click handler for read more link
  */
  onClick: PropTypes.func
};

DetailedHeroImage.defaultProps = {
  imageWidth: DEFAULT_WIDTH,
  imageHeight: DEFAULT_HEIGHT,
  onClick: () => {}
};

export default DetailedHeroImage;
