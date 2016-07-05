import React, {PropTypes} from "react";
import classNames from "classnames";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";

const heading = (text, color, extraClass = "") => {
  if (typeof text !== "string") { return null; }

  return (
    <span className={classNames("Banner-heading", extraClass)} style={{color}}>
      {text}
    </span>
  );
};

/**
 A component for displaying a multi-heading banner that is responsive
 @examples
 ```jsx
 const data = {
  "headerText1": "Black Friday",
  "backgroundColor": "#000",
  "headerColor1": "#9ed6fa",
  "headerText3": null,
  "headerText2": "Deals",
  "headerColor3": "#222",
  "headerColor2": "#f47421",
  "secondaryText1": "Your hottest offers for today.",
  "secondaryColor1": "#fff",
  "secondaryText2": null,
  "secondaryColor2": "#f47421",
  "secondaryText3": null,
  "secondaryColor3": "#222"
};
 React.render(<Banner {...data} />, mountNode);
 ```
 @component Banner
 @import {Banner}
 @playground
 ```
 const data = {
  "headerText1": "Black Friday",
  "backgroundColor": "#000",
  "headerColor1": "#9ed6fa",
  "headerText3": null,
  "headerText2": "Deals",
  "headerColor3": "#222",
  "headerColor2": "#f47421",
  "secondaryText1": "Your hottest offers for today.",
  "secondaryColor1": "#fff",
  "secondaryText2": null,
  "secondaryColor2": "#f47421",
  "secondaryText3": null,
  "secondaryColor3": "#222"
};
 React.render(<Banner {...data} />, mountNode);
 ```
 */

const BannerMessage = ({
  backgroundColor,
  headerText1,
  headerText2,
  headerText3,
  headerColor1,
  headerColor2,
  headerColor3,
  moduleType,
  secondaryText1,
  secondaryText2,
  secondaryText3,
  secondaryColor1,
  secondaryColor2,
  secondaryColor3
}) => {
  const inlineClass = "display-inline-block";
  return (
    <div className="Banner"
      style={{backgroundColor}}
      {...getTempoModuleAutomationId(moduleType, process)}>
      <div className="Banner-header display-inline-block-m font-semibold">
        {heading(headerText1, headerColor1, inlineClass)}
        {heading(headerText2, headerColor2, inlineClass)}
        {heading(headerText3, headerColor3, inlineClass)}
      </div>
      <div className="Banner-subHeader display-inline-block-m font-normal">
        {heading(secondaryText1, secondaryColor1)}
        {heading(secondaryText2, secondaryColor2)}
        {heading(secondaryText3, secondaryColor3)}
      </div>
    </div>
  );
};

BannerMessage.displayName = "Banner.Message";

BannerMessage.propTypes = {
  "backgroundColor": PropTypes.string,
  "headerColor1": PropTypes.string,
  "headerColor2": PropTypes.string,
  "headerColor3": PropTypes.string,
  "headerText1": PropTypes.string,
  "headerText2": PropTypes.string,
  "headerText3": PropTypes.string,
  "moduleType": PropTypes.string,
  "secondaryColor1": PropTypes.string,
  "secondaryColor2": PropTypes.string,
  "secondaryColor3": PropTypes.string,
  "secondaryText1": PropTypes.string,
  "secondaryText2": PropTypes.string,
  "secondaryText3": PropTypes.string
};

BannerMessage.defaultProps = {
  "backgroundColor": "",
  "headerColor1": "",
  "headerColor2": "",
  "headerColor3": "",
  "headerText1": "",
  "headerText2": "",
  "headerText3": "",
  "moduleType": ModuleTypes.VALUE_OF_DAY_MESSAGING,
  "secondaryColor1": "",
  "secondaryColor2": "",
  "secondaryColor3": "",
  "secondaryText1": "",
  "secondaryText2": "",
  "secondaryText3": ""
};

export default BannerMessage;
