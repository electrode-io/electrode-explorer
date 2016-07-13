import React, {Component, PropTypes} from "react";
import isEmpty from "lodash/isEmpty";
import classNames from "classnames";
import SideBarMenuModuleFlyout from "./sidebar-menu-module-flyout";

/**
 A component for displaying a LeftNav Menu Item
 @examples
 ```jsx
 const data = {
  "uid": "WcaenllV",
  "url": "/cp/1229722",
  "title": "Apple",
  "maxItemPerColumn": 10,
  "subMenuData": [
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    }
    ]
  };

 React.render(<SideBarMenuModule.Item {...data} />, mountNode);
 ```
 @component SideBarMenuModuleItem
 @import {SideBarMenuModuleItem}
 @playground
 ```
 const data = {
  "uid": "WcaenllV",
  "url": "/cp/1229722",
  "title": "Apple",
  "maxItemPerColumn": 10,
  "subMenuData": [
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    }
    ]
  };
  eact.render(<SideBarMenuModule.Item {...data} />, mountNode);
 ```
 */

export default class SideBarMenuModuleItem extends Component {
  constructor(props): void {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);

    this.state = {
      active: false
    };
  }

  _onMouseEnter(): void {
    this.setState({ active: true });
  }

  _onMouseLeave():void {
    this.setState({ active: false });
  }

  _onFocus(): void {
    this.setState({ active: true });
  }

  _onBlur(): void {
    this.setState({ active: false });
  }

  // render the menu item.
  _renderItem():ReactElement {
    const { subMenuData, url, title } = this.props;
    const hasChildren = !isEmpty(subMenuData);
    const classes = classNames("SideBarMenu-toggle", {
      "SideBarMenu-arrow": hasChildren,
      "is-active": this.state.active && hasChildren > 0
    });
    const arrowElement = hasChildren ?
    <span className="wmicon wmicon-14 wmicon-caret-up rotate-90dge"/>
    : null;
    return (
      <a className={classes} href={url}
        onFocus={this._onFocus}
        onBlur={this._onBlur}>
        <span>{title}</span>
        {arrowElement}
      </a>
    );
  }

  render():ReactElement {
    const { subMenuData, maxItemPerColumn } = this.props;
    return (
      <li
        className="SideBarMenuModuleItem"
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
        {this._renderItem()}
        <SideBarMenuModuleItem.Flyout
          subMenuData={subMenuData}
          maxItemPerColumn={maxItemPerColumn}
          active={this.state.active}/>
      </li>
    );
  }
}

SideBarMenuModuleItem.displayName = "SideBarMenuModule.Item";

SideBarMenuModuleItem.Flyout = SideBarMenuModuleFlyout;

SideBarMenuModuleItem.propTypes = {
  uid: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subMenuData: PropTypes.array,
  maxItemPerColumn: PropTypes.number
};

SideBarMenuModuleItem.defaultProps = {
  uid: "",
  maxItemPerColumn: 10,
  subMenuData: []
};
