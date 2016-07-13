/* @flow */
import React, { PropTypes, Component } from "react";
import Image from "@walmart/wmreact-base/lib/components/image";
import Link from "@walmart/wmreact-base/lib/components/link";
import classNames from "classnames";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import Fader from "../utils/fader";
import { checkImageSrc } from "@walmart/wmreact-image-utils";

const PLACEHOLDER_IMAGE =
  "//i5.walmartimages.com/dfw/63fd9f59-ebd7/k2-_c26840ed-0ac3-478d-9173-398eaa1faef2.v1.png";

/**
 The submenu panel subcomponent for the header left hand nav. Has links for departments and
 and categories as well as a lazy loaded promo image for the given super department.

 ```jsx
 <LefthandNavPanel show={true} superDept={
   {
     name: "Electronics & Office",
     link: {
       alt: "Electronics & Office",
       assetId: "3781758",
       assetName: "35023-119032-01_INT_86995_Electronics_Flyout_207x460_1219_V1.png",
       clickThrough: {
         type: "url",
         value: "/browse/electronics/laptops/3944_3951_1089430?cat_id=3944_3951_1089430
       },
       height: "460",
       src: "http://i5.walmartimages.com/dfw/4ff9c6c9-8c13/k2-_b6e99a03-22d2-4d5e-8a0f.png",
       title: "Electronics & Office",
       width: "207",
       size: "67492",
       contentType: "image/png",
       uid: "qGxDjh9C"
     },
     departments: [{
       department: {
         linkText: "Shop Electronics",
         title: "Shop Electronics",
         clickThrough: {
           type: "url",
           value: "/cp/Electronics/3944"
         },
         uid: "p1jc5fJq"
       },
       colNum: "1",
       uid: "7LhTgYRR",
       categories: []
     }, {
       department: {
         linkText: "TV & Video",
         title: "TV & Video",
         clickThrough: {
           type: "url",
           value: "/cp/televisions-video/1060825"
         },
         uid: "pXHzlEyi"
       },
       colNum: "1",
       categories: [{
         category: {
           linkText: "TVs",
           title: "TVs",
           clickThrough: {
             type: "url",
             value: "/browse/electronics/tvs/3944_1060825_447913"
           },
           uid: "IwLIj6qT"
         },
         uid: "OAraUC3y"
       }, {
         category: {
           linkText: "DVD & Blu-ray Players ",
           title: "DVD & Blu-ray Players ",
           clickThrough: {
             type: "url",
             value: "/browse/electronics/dvd-blu-ray-players/3944_1060825_95987"
           },
           uid: "F6F3Droh"
         },
         uid: "0TMGv5cD"
       }, {
         category: {
           linkText: "Home Audio & Theater ",
           title: "Home Audio & Theater ",
           clickThrough: {
             type: "url",
             value: "/cp/Home-Audio-Theater/77622"
           },
           uid: "mQER_pBQ"
         },
         uid: "x76Q43t6"
       }],
       uid: "P_Qsh1oB"
     }, {
       department: {
         linkText: "Portable Audio",
         title: "iPod & Portable Audio",
         clickThrough: {
           type: "url",
           value: "/cp/ipods-mp3-players/96469"
         },
         uid: "gSQgXeD8"
       },
       colNum: "2",
       categories: [],
       uid: "Hp-IHs5A"
     }, {
       department: {
         linkText: "Tips & Advice",
         title: "Tips & Advice",
         uid: "2HNCL1LP",
         clickThrough: {
           type: "url",
           value: "http://wm15.walmart.com/electronics-resource-center/"
         }
       },
       colNum: "3",
       categories: [],
       uid: "-ko6h6mz"
     }],
     uid: "-QBPPMxd"
   }
 }/>

 ```

 @import {LefthandNavPanel}
 @flags noVisibleRender
 @component LefthandNavPanel
 @playground
 LefthandNavPanel
 */

class LefthandNavPanel extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      imageLoaded: props.show
    };
  }

  componentWillReceiveProps(nextProps: Object): void {
    if (nextProps.show && !this.state.imageLoaded) {
      this.setState({
        imageLoaded: true
      });
    }
  }

  _getClassNames(className: string, show: boolean): string {
    return classNames("header-GlobalLefthandNav-panel", className, {"hide-content": !show});
  }

  _renderCategories(categories: Array<Object>, prefix: string): ?Array<ReactElement> {
    const linkClassName = "header-GlobalLefthandNav-panel-link " +
      "header-GlobalLefthandNav-panel-link--small display-inline-block";

    if (categories) {
      return categories.map((cat, index) => {
        const { uid, linkText, clickThrough: { value, title } } = cat.category;
        return (
          <Link
            key={index}
            alt={title}
            className={linkClassName}
            data-uid={uid}
            href={value}
            {...getDataAutomationIdPair(`cat-${index}`, prefix)}>
            {linkText}
          </Link>
        );
      });
    }
  }

  _getColumns(departments: Object): Object {
    const linkClassName = "header-GlobalLefthandNav-panel-link " +
      "header-GlobalLefthandNav-panel-link--large arrow-link display-inline-block";

    // Columns for rendering
    // 4th column is present so there won't be errors if there a merchant accidently pubishes
    // something there. That column won't actually be displayed though.
    const columns = {"1": [], "2": [], "3": [], "4": []};

    departments.forEach((dept, index) => {
      const { uid, linkText, clickThrough: { value, title } } = dept.department;
      const automationId = `${this.props.dataAutomationId}-dept-${index}`;
      columns[dept.colNum].push(
        <div className="header-GlobalLefthandNav-panel-column-linkGroup" key={index}>
          <Link
            arrow={true}
            alt={title}
            className={linkClassName}
            data-uid={uid}
            href={value}
            {...getDataAutomationIdPair(automationId, "")}>
            {linkText}
          </Link>
          {this._renderCategories(dept.categories, automationId)}
        </div>
      );
    });

    return columns;
  }

  _renderColumns(departments: Object, columnClassName: string): Array<ReactElement> {
    const columns = this._getColumns(departments);

    return ["1", "2", "3"].map((colNum: string, index: number) => {
      return <div className={columnClassName} key={index}>{columns[colNum]}</div>;
    });
  }

  _getFaderProps(show: boolean): Object {
    return {
      type: show ? "fadeIn" : "fadeOut",
      duration: show ? 300 : 0
    };
  }

  _getImageSrc({src, height, width}, loaded: boolean): string {
    return loaded ? checkImageSrc(src, height, width) : PLACEHOLDER_IMAGE;
  }

  // Corner Image which is lazy loaded and faded in
  _renderImage(link: Object, show: boolean, loaded: boolean): ?ReactElement {
    if (link) {
      const {clickThrough: {value}, title, uid, assetId, width, height, alt, src} = link;

      return (
        <Fader {...this._getFaderProps(show)}>
          <div className="header-GlobalLefthandNav-panel-image">
            <Link
              href={value}
              alt={title}
              data-uid={uid}
              data-asset-id={assetId}
              {...getDataAutomationIdPair("image", this.props.dataAutomationId)}>
              <Image
                className="display-block"
                width={width}
                height={height}
                alt={alt}
                src={this._getImageSrc({src, height, width}, loaded)}
              />
            </Link>
          </div>
        </Fader>
      );
    }
  }

  render(): ReactElement {
    const {superDept: {departments, link}, show, className, dataAutomationId} = this.props;
    const columnClassName = "header-GlobalLefthandNav-panel-column pull-left";

    return (
      <div
        className={this._getClassNames(className, show)}
        {...getDataAutomationIdPair(dataAutomationId, "")}>
        {this._renderColumns(departments, columnClassName)}
        <div className={columnClassName}>
          {this._renderImage(link, show, this.state.imageLoaded)}
        </div>
      </div>
    );
  }
}

LefthandNavPanel.displayName = "LefthandNavPanel";

LefthandNavPanel.propTypes = {
  /**
  Super department data.
  */
  superDept: PropTypes.shape({
    link: PropTypes.object.isRequired,
    departments: PropTypes.array.isRequired
  }),
  /**
  Toggle to show component.
  */
  show: PropTypes.bool,
  /**
  Additional classes for styling.
  */
  className: PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string
};

LefthandNavPanel.defaultProps = {
  show: false,
  className: "",
  dataAutomationId: "header-GlobalLeftHandNav-panel"
};

export default LefthandNavPanel;
