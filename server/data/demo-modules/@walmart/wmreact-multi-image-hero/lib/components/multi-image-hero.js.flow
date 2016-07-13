import React, {PropTypes} from "react";
import BundleImage from "./bundle-image";
import CarouselList from "./carousel-list";
import ImageList from "./image-list";
import some from "lodash/some";

//Number of sections in the bundle where we show carousel at lower breakpoints
const CAROUSEL_CUTOFF = 2;

const getDetails = (section) => {
  return section.type === "STANDARD" || section.numberComponents < 2 ?
    "Standard item" : `${section.numberComponents} options`;
};

const getCarousel = (children) => {
  return children.length <= CAROUSEL_CUTOFF ? null :
    (<div className="hide-content-l">
      <CarouselList>
        {children}
      </CarouselList>
    </div>);
};

const getImageList = (children) => {
  const responsiveClass = children.length <= CAROUSEL_CUTOFF ? null :
    "hide-content display-block-l";
  return (
    <div className={responsiveClass}>
      <ImageList>
        {children}
      </ImageList>
    </div>
  );
};

const getHeroBracket = (numberSections) => {
  return numberSections <= 1 ? null :
  (
    <div className="heading-hero">
      <div className="hero-bracket">
        <div className="hero-text-wrapper text-center">
          <div className="hero-text display-inline-block text-center font-semibold">
            Bundle Includes
          </div>
        </div>
      </div>
    </div>
  );
};

/**
Hero component for a bundle containing one or several items
@param {object} props - React properties
@returns {ReactElement} The rendered component
@examples
```jsx
<MultiImageHero bundleData={{
  bundleType: "CHOICE_BUNDLE",
  sections: [{
    type: "STANDARD",
    numberComponents: 1,
    title: "Thing 1",
    imageUrl: "image.png"
  },
  {
    type: "REQUIRED",
    numberComponents: 2,
    title: "Thing 2",
    imageUrl: "image.png"
  }]
}} />

```
@component MultiImageHero
@import {MultiImageHero}
@playground
MultiImageHero
```jsx
<MultiImageHero bundleData={{
  bundleType: "CHOICE_BUNDLE",
  sections: [{
    type: "STANDARD",
    numberComponents: 1,
    title: "Thing 1",
    imageUrl: "image.png"
  },
  {
    type: "REQUIRED",
    numberComponents: 2,
    title: "Thing 2",
    imageUrl: "image.png"
  }]
}} />
```
*/
const MultiImageHero = (props) => {
  const {
    bundleData
  } = props;

  const shouldDecorate = bundleData.bundleType === "CHOICE_BUNDLE";
  const shouldShowDetails = some(bundleData.sections,
    (section) => section.numberComponents > 1);

  const images = bundleData.sections.map((section) => (
    <BundleImage
      title={section.title}
      imageUrl={section.imageUrl}
      details={getDetails(section)}
      decorate={shouldDecorate}
      showDetails={shouldShowDetails}
      />
  ));

  return (
    <div className="multi-image-hero">
      {getHeroBracket(images.length)}
      {getImageList(images)}
      {getCarousel(images)}
  </div>
  );
};

MultiImageHero.propTypes = {
  bundleData: PropTypes.shape({
    bundleType: PropTypes.oneOf(["CHOICE_BUNDLE", "NON_CONFIG"]).isRequired,
    sections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      numberComponents: PropTypes.number.isRequired,
      type: PropTypes.oneOf(["STANDARD", "REQUIRED"]).isRequired,
      imageUrl: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
};

export default MultiImageHero;
