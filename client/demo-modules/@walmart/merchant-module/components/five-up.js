"use strict";

exports.__esModule = true;
exports.FiveUp = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The five up merchant module component.
 For example this is how we use this component.
 ```jsx
 <FiveUp
   size={"100"}
   MERCH_RULE_ID={MERCH_RULE_ID}
   MESSAGE_PART1={MESSAGE_PART1}
   PART1_URL={PART1_URL}
   IMAGE1={IMAGE1}
   MESSAGE_PART2={MESSAGE_PART2}
   PART2_URL={PART2_URL}
   IMAGE2={IMAGE2}
   MESSAGE_PART3={MESSAGE_PART3}
   PART3_URL={PART3_URL}
   IMAGE3={IMAGE3}
   MESSAGE_PART4={MESSAGE_PART4}
   PART4_URL={PART4_URL}
   IMAGE4={IMAGE4}
   MESSAGE_PART5={MESSAGE_PART5}
   PART5_URL={PART5_URL}
   IMAGE5={IMAGE5}
 />
 ```
 @import {FiveUp}
 @component FiveUp
 @playground
FiveUp
 ```
 <FiveUp
   size={"100"}
   MERCH_RULE_ID={MERCH_RULE_ID}
   MESSAGE_PART1={MESSAGE_PART1}
   PART1_URL={PART1_URL}
   IMAGE1={IMAGE1}
   MESSAGE_PART2={MESSAGE_PART2}
   PART2_URL={PART2_URL}
   IMAGE2={IMAGE2}
   MESSAGE_PART3={MESSAGE_PART3}
   PART3_URL={PART3_URL}
   IMAGE3={IMAGE3}
   MESSAGE_PART4={MESSAGE_PART4}
   PART4_URL={PART4_URL}
   IMAGE4={IMAGE4}
   MESSAGE_PART5={MESSAGE_PART5}
   PART5_URL={PART5_URL}
   IMAGE5={IMAGE5}
 />
 ```
 */

var FiveUp = exports.FiveUp = function FiveUp(_ref) {
  var size = _ref.size;
  var MESSAGE_PART1 = _ref.MESSAGE_PART1;
  var PART1_URL = _ref.PART1_URL;
  var IMAGE1 = _ref.IMAGE1;
  var MESSAGE_PART2 = _ref.MESSAGE_PART2;
  var PART2_URL = _ref.PART2_URL;
  var IMAGE2 = _ref.IMAGE2;
  var MESSAGE_PART3 = _ref.MESSAGE_PART3;
  var PART3_URL = _ref.PART3_URL;
  var IMAGE3 = _ref.IMAGE3;
  var MESSAGE_PART4 = _ref.MESSAGE_PART4;
  var PART4_URL = _ref.PART4_URL;
  var IMAGE4 = _ref.IMAGE4;
  var MESSAGE_PART5 = _ref.MESSAGE_PART5;
  var PART5_URL = _ref.PART5_URL;
  var IMAGE5 = _ref.IMAGE5;
  // eslint-disable max-params

  var moduleConfig = [{ messsagePart: MESSAGE_PART1, partUrl: PART1_URL, image: IMAGE1 }, { messsagePart: MESSAGE_PART2, partUrl: PART2_URL, image: IMAGE2 }, { messsagePart: MESSAGE_PART3, partUrl: PART3_URL, image: IMAGE3 }, { messsagePart: MESSAGE_PART4, partUrl: PART4_URL, image: IMAGE4 }, { messsagePart: MESSAGE_PART5, partUrl: PART5_URL, image: IMAGE5 }];

  var imageContainer = moduleConfig.map(function (value, index) {
    return _react2.default.createElement(
      "div",
      { className: "merchant-module-5 arrange-fit", key: index + 1 },
      _react2.default.createElement(
        "div",
        { className: "merchant-module-image" },
        _react2.default.createElement(
          "a",
          { href: value.partUrl },
          _react2.default.createElement("img", { height: size, width: size, src: value.image })
        ),
        _react2.default.createElement(
          "div",
          { className: "merchant-module-text" },
          _react2.default.createElement(
            "a",
            { href: value.partUrl },
            value.messsagePart
          )
        )
      )
    );
  });

  return _react2.default.createElement(
    "div",
    { className: "merchant-module-container" },
    _react2.default.createElement(
      "div",
      { className: "merchant-module merchant-module-5-up arrange arrange-equal" },
      imageContainer
    )
  );
};

FiveUp.displayName = "MerchantModuleFiveUp";

FiveUp.defaultProps = {
  MERCH_RULE_ID: "",
  MESSAGE_PART1: "",
  PART1_URL: "",
  IMAGE1: "",
  MESSAGE_PART2: "",
  PART2_URL: "",
  IMAGE2: "",
  MESSAGE_PART3: "",
  PART3_URL: "",
  IMAGE3: "",
  MESSAGE_PART4: "",
  PART4_URL: "",
  IMAGE4: "",
  MESSAGE_PART5: "",
  PART5_URL: "",
  IMAGE5: ""
};

FiveUp.propTypes = {
  MERCH_RULE_ID: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.string,
  MESSAGE_PART1: _react2.default.PropTypes.string,
  PART1_URL: _react2.default.PropTypes.string,
  IMAGE1: _react2.default.PropTypes.string,
  MESSAGE_PART2: _react2.default.PropTypes.string,
  PART2_URL: _react2.default.PropTypes.string,
  IMAGE2: _react2.default.PropTypes.string,
  MESSAGE_PART3: _react2.default.PropTypes.string,
  PART3_URL: _react2.default.PropTypes.string,
  IMAGE3: _react2.default.PropTypes.string,
  MESSAGE_PART4: _react2.default.PropTypes.string,
  PART4_URL: _react2.default.PropTypes.string,
  IMAGE4: _react2.default.PropTypes.string,
  MESSAGE_PART5: _react2.default.PropTypes.string,
  PART5_URL: _react2.default.PropTypes.string,
  IMAGE5: _react2.default.PropTypes.string
};