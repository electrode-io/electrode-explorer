/* @flow */
import React, { PropTypes } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Image from "@walmart/wmreact-base/lib/components/image";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import { checkImageSrc } from "@walmart/wmreact-image-utils";
import FeedbackLink from "./feedback-link";

const FEEDBACK = "Feedback";
const BUTTON = "button";
/**
This component displays the GlobalFooterItem

@import {GlobalFooterItem}
@flags noVisibleRender
@component GlobalFooterItem
@playground
Global Footer Link Item
```
<GlobalFooterItem link={
  {
    "linkText": "Walmart MoneyCenter",
    "title": "Walmart MoneyCenter",
    "clickThrough": {
      "type": "url",
      "value": "http://www-e16.walmart.com/instantcredit"
    },
    "uid": "iyoJypI4"
  }
} />
```
Global Footer Link Icon
```
<GlobalFooterItem icon={true} link={
  {
    "linkText": "facebook",
    "title": "facebook",
    "clickThrough": {
      "type": "url",
      "value": "https://www.facebook.com/walmart"
    },
    "uid": "iyoJypI4"
  }
} />
```
Global Footer Image Item
```
<GlobalFooterItem link={
  {
    "linkText": "Walmart MoneyCenter",
    "title": "Walmart MoneyCenter",
    "clickThrough": {
      "type": "url",
      "value": "http:\/\/www-e16.walmart.com\/instantcredit"
    },
    "uid": "iyoJypI4"
  }
} image={
  {
    "assetName": "k2-_65ae56ce-e20a-4f67-8a4f-88fbc7f69cde.v1.jpg",
    "height": "66",
    "assetId": "2c35b6b0-481c-11e5-aa7b-3f9068f8e0a6",
    "src": "//i5.walmartimages.com/dfw/4ff9c6c9-9aee/k2-_704e0f82-62c6-4e1b-8382.v1.png",
    "width": "86",
    "size": "100",
    "contentType": "image/jpeg",
    "alt": "footer image",
    "title": "footer image",
    "uid": "9ZKpMSLd"
  }
} />
```
*/

export const _generateTarget = (newTab: boolean): ?ReactElement => {
  if (newTab) {
    return "_blank";
  }
};

export const _generateIcon = (linkText: string): ReactElement => {
  const MOBILE = "mobile";
  const linkValue = linkText.toLowerCase();
  if (linkValue === MOBILE) {
    return (
      <div>
        <Icon name={linkValue} size={20}/>
        <span className="footer-GlobalSocialIcons--mobileApps align-left">Mobile apps</span>
      </div>
    );
  } else {
    return (
      <Icon name={linkValue} size={20}/>
    );
  }
};

export const _isFeedbackLink = (linkText: string, title: string): boolean => {
  return FEEDBACK === linkText || FEEDBACK === title;
};

export const _isButtonLink = (linkType: string): boolean => {
  return linkType === BUTTON;
};

export const _generateLinkData = (linkText: string, isIcon: boolean, imageData: Object)
  : ?ReactElement => {
  if (imageData && imageData.src) {
    return (
      <Image
        className="footer-GlobalFooterItem-img display-block"
        src={checkImageSrc(imageData.src, imageData.height, imageData.width)}
        alt={imageData.alt}
        height={imageData.height}
        width={imageData.width}
        title={imageData.title}
        data-asset-id={imageData.assetId}
        data-uid={imageData.uid}
      />
    );
  } else if (isIcon) {
    return _generateIcon(linkText);
  } else {
    return linkText;
  }
};


export const _renderLink = ({autoId, className, icon, newTab, image, link}, extras = {})
: ReactElement => {
  const {
    uid,
    title,
    linkText
  } = link;

  return (
    <Link
      data-uid={uid}
      alt={title}
      {...{title, className}}
      {...getDataAutomationIdPair(autoId, "")}
      {...extras}>
      {_generateLinkData(linkText, icon, image)}
    </Link>
  );
};

const GlobalFooterItem = (props) => {
  const {
    link: {
      uid,
      title,
      linkText,
      linkType,
      onLinkClick,
      clickThrough
    },
    newTab,
    pathToAssets
  } = props;

  if (_isFeedbackLink(linkText, title)) {
    return (
      <FeedbackLink
        uid={uid}
        title={title}
        pathToAssets={pathToAssets}
        linkText={linkText}
        />
    );
  } else if (_isButtonLink(linkType)) {
    return _renderLink(props, {
      onClick: () => onLinkClick(clickThrough.value)
    });
  } else {
    return _renderLink(props, {
      target: _generateTarget(newTab),
      href: clickThrough.value
    });
  }
};

GlobalFooterItem.displayName = "GlobalFooterItem";

GlobalFooterItem.propTypes = {
  /**
  True if we are showing icon
  */
  icon: PropTypes.bool,
  /**
  True if we Open link in newTab
  */
  newTab: PropTypes.bool,
  /**
  Link object
  */
  link: PropTypes.shape({
    uid: PropTypes.string,
    title: PropTypes.string,
    linkText: PropTypes.string.isRequired,
    linkType: PropTypes.string,
    onLinkClick: PropTypes.func,
    clickThrough: PropTypes.shape({
      value: PropTypes.string.isRequired
    })
  }),
  /**
  Image object
  */
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    uid: PropTypes.string,
    title: PropTypes.string,
    assetId: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
  }),
  /**
  Any additional css classes that needs to be applied to the root element.
  */
  className: PropTypes.string,
  /**
  Used for generating unique automation id's
  */
  autoId: PropTypes.string,
  /**
  Path to opinion lab assets
  */
  pathToAssets: PropTypes.string
};

GlobalFooterItem.defaultProps = {
  icon: false,
  newTab: false,
  link: {
    uid: "",
    title: "",
    linkText: "",
    linkType: "link",
    clickThrough: {
      value: ""
    }
  },
  image: {
    src: "",
    alt: "",
    uid: "",
    title: "",
    assetId: "",
    height: "",
    width: ""
  },
  className: "",
  autoId: "",
  pathToAssets: ""
};

export default GlobalFooterItem;
