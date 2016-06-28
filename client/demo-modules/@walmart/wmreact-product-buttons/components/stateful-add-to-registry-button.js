"use strict";

exports.__esModule = true;
exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _addToRegistryButton = require("./add-to-registry-button");

var _addToRegistryButton2 = _interopRequireDefault(_addToRegistryButton);

var _reactRedux = require("react-redux");

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _addToRegistry = require("../actions/add-to-registry");

var _addToRegistry2 = _interopRequireDefault(_addToRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSignInStatus = _addToRegistry2.default.getSignInStatus;
var onAddToRegistryClicked = _addToRegistry2.default.onAddToRegistryClicked;
var onRegistryPromptClose = _addToRegistry2.default.onRegistryPromptClose;
var addToRegistry = _addToRegistry2.default.addToRegistry;

var StatefulAddToRegistryButton = function (_Component) {
  (0, _inherits3.default)(StatefulAddToRegistryButton, _Component);

  function StatefulAddToRegistryButton(props) {
    (0, _classCallCheck3.default)(this, StatefulAddToRegistryButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    if (_exenv2.default.canUseDOM) {
      props.onBootstrap(props);
    }
    return _this;
  }

  StatefulAddToRegistryButton.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var _onClick = _props.onClick;
    var _onListItemSelected = _props.onListItemSelected;
    var rest = (0, _objectWithoutProperties3.default)(_props, ["onClick", "onListItemSelected"]);

    return _react2.default.createElement(_addToRegistryButton2.default, (0, _extends3.default)({
      onClick: function onClick() {
        return _onClick(_this2.props);
      },
      onListItemSelected: function onListItemSelected(type) {
        return _onListItemSelected(_this2.props, type);
      }
    }, rest));
  };

  return StatefulAddToRegistryButton;
}(_react.Component);

StatefulAddToRegistryButton.displayName = "StatefulAddToRegistryButton";

StatefulAddToRegistryButton.propTypes = {
  /**
  Indicates if the user is logged in or not
  */
  isSignedIn: _react.PropTypes.bool,
  /**
  Url used to fetch registries
  */
  fetchRegistriesUrl: _react.PropTypes.string,
  /**
  Add to registry url
  */
  addToRegistryUrl: _react.PropTypes.string,
  /**
  Sign in page url
  */
  signInUrl: _react.PropTypes.string,
  /**
  Registry landing page url
  */
  registryPageUrl: _react.PropTypes.string,
  /**
  Prop that describes the current state of the button
  */
  status: _react.PropTypes.oneOf(["INITIALIZED", "LOADING", "PROMPT"]),
  /**
  List of items
  */
  listItems: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    /**
    Type of list or registry
    */
    type: _react.PropTypes.string.isRequired,
    /**
    Name of the list or registry
    */
    name: _react.PropTypes.string.isRequired
  })),
  /**
  Callback to handle list or registry selection
  */
  onListItemSelected: _react.PropTypes.func,
  /**
  Callback to handle onClick on Add to registry button
  */
  onClick: _react.PropTypes.func.isRequired,
  /**
  Callback to handle close of prompt
  */
  onPromptClose: _react.PropTypes.func.isRequired,
  /**
  The first action dispatched
  */
  onBootstrap: _react.PropTypes.func,

  /**
  offer id of the item being added to registry
  */
  offerId: _react.PropTypes.string.isRequired,
  /**
  price of the item being added to registry
  */
  price: _react.PropTypes.string.isRequired,
  /**
  quantity of the item being added to registry
  */
  quantity: _react.PropTypes.string.isRequired,
  /**
  This is used to trigger click event automatically
  */
  triggerClick: _react.PropTypes.bool
};

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return (0, _extends3.default)({}, state);
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onBootstrap: function onBootstrap(props) {
      dispatch(getSignInStatus(props));
      if (props.triggerClick) {
        dispatch(onAddToRegistryClicked(props));
      }
    },
    onClick: function onClick(props) {
      if (!props.isSignedIn) {
        window.location.href = props.signInUrl;
      }
      dispatch(onAddToRegistryClicked(props));
    },
    onPromptClose: function onPromptClose() {
      dispatch(onRegistryPromptClose());
    },
    onListItemSelected: function onListItemSelected(props, type) {
      addToRegistry(props, type);
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StatefulAddToRegistryButton);