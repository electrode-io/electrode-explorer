"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Basic component for Buying Options Table messaging
Ex: Pick up options messaging
@examples
```jsx
<div>
 <ProductsFulfillmentMessaging
  messaging={Text/html}
  iconType="truck"
  launchModalText="Shipping Pass"
  onClickLaunchModal={() => {console.log("Some click func")}}
 />
</div>
*/

var ProductsFulfillmentMessaging = function ProductsFulfillmentMessaging(props) {
  return _react2.default.createElement(
    "div",
    { className: "arrange arrange-spaced arrange-middle prod-fulfillment" },
    _react2.default.createElement(_icon2.default, { className: "align-left arrange-fit", name: props.iconType, size: 1 }),
    _react2.default.createElement(
      "span",
      { className: "prod-fulfillment-messaging arrange-fill" },
      _react2.default.createElement("span", { className: "prod-fulfillment-messaging-text",
        dangerouslySetInnerHTML: { __html: props.messaging } }),
      _react2.default.createElement(
        _button2.default,
        { className: "launch-modal hide-content-max-m",
          onClick: props.onClickLaunchModal,
          fakelink: true },
        props.launchModalText
      )
    ),
    _react2.default.createElement("i", { className: "prod-fulfillment-messaging-view-details align-right arrange-fit arrange-middle paginator-hairline-btn paginator-hairline-btn-next hide-content-m" })
  );
};

ProductsFulfillmentMessaging.propTypes = {
  /**
  * Children to render in container
  */
  iconType: _react.PropTypes.string,
  messaging: _react.PropTypes.string,
  launchModalText: _react.PropTypes.string,
  showMessagingSection: _react.PropTypes.bool,
  onClickLaunchModal: _react.PropTypes.func
};

ProductsFulfillmentMessaging.defaultProps = {
  iconType: "",
  messaging: "",
  launchModalText: "",
  onClickLaunchModal: function onClickLaunchModal() {/*no-op*/}
};

exports.default = ProductsFulfillmentMessaging;