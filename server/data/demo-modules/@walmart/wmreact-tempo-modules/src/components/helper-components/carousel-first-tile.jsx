import React, { PropTypes } from "react";
import classNames from "classnames";

import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import Link from "@walmart/wmreact-base/lib/components/link";

import ThemeButton from "./theme-button";

const CarouselFirstTile = (props) => {
  const {
    alt,
    src,
    clickThrough: {
      value
    },
    title,
    uid,
    themeButton,
    dataAutomationId,
    className
  } = props;

  const style = src ? { backgroundImage: `url(${src})` } : null;

  return (
    <div
      className={classNames("CarouselFirstTile text-center", className)}
      style={style}
      title={alt}
      {...getDataAutomationIdPair(dataAutomationId, "")}>
      <Link
        className="CarouselFirstTile-link"
        title={title}
        data-uid={uid}
        href={value}
        {...getDataAutomationIdPair("link", dataAutomationId)} />
      {themeButton && themeButton.linkText &&
        <ThemeButton
          className="CarouselFirstTile-themeButton font-semibold display-inline-block"
          dataAutomationId={dataAutomationId}
          {...themeButton} />}
    </div>
  );
};

CarouselFirstTile.displayName = "CarouselFirstTile";

CarouselFirstTile.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  clickThrough: PropTypes.shape({
    value: PropTypes.string.isRequired
  }),
  title: PropTypes.string,
  uid: PropTypes.string,
  themeButton: PropTypes.object,
  dataAutomationId: PropTypes.string,
  className: PropTypes.string
};

CarouselFirstTile.defaultProps = {
  alt: "",
  title: "",
  uid: "",
  themeButton: null,
  dataAutomationId: "",
  className: ""
};

export default CarouselFirstTile;
