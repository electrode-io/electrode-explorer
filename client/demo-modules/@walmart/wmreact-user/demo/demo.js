"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _electrodeDemoIndex = require("@walmart/electrode-demo-index");

var _electrodeDemoIndex2 = _interopRequireDefault(_electrodeDemoIndex);

var _index = require("../bundle.min");

var _reactIntl = require("react-intl");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var libraryScope = {
  IntlProvider: _reactIntl.IntlProvider, SignIn: _index.SignIn, SignUp: _index.SignUp,
  ForgotPassword: _index.ForgotPassword, ResetPassword: _index.ResetPassword, MemberLostStolen: _index.MemberLostStolen,
  MemberAccountCompletion: _index.MemberAccountCompletion, MemberOnlineSignUpForm: _index.MemberOnlineSignUpForm,
  MemberRegister: _index.MemberRegister, MemberSignIn: _index.MemberSignIn, MemberForgotEmail: _index.MemberForgotEmail,
  MemberExistsRegisterAccount: _index.MemberExistsRegisterAccount, MemberMultipleEmails: _index.MemberMultipleEmails,
  MemberResendEmail: _index.MemberResendEmail, MemberReclaimEmail: _index.MemberReclaimEmail
};

var components = [{
  title: "SignIn",
  examples: [{
    type: "playground",
    code: require("raw!./examples/signin.example"),
    noRender: true
  }]
}, {
  title: "SignUp",
  examples: [{
    type: "playground",
    code: require("raw!./examples/signup.example"),
    noRender: true
  }]
}, {
  title: "ForgotPassword",
  examples: [{
    type: "playground",
    code: require("raw!./examples/forgotpassword.example"),
    noRender: true
  }]
}, {
  title: "ResetPassword",
  examples: [{
    type: "playground",
    code: require("raw!./examples/resetpassword.example"),
    noRender: true
  }]
}, {
  title: "MemberSignIn",
  examples: [{
    type: "playground",
    code: require("raw!./examples/membersignin.example"),
    noRender: true
  }]
}, {
  title: "MemberLostStolen",
  examples: [{
    type: "playground",
    code: require("raw!./examples/memberloststolen.example"),
    noRender: true
  }]
}, {
  title: "MemberExistsRegisterAccount",
  examples: [{
    type: "playground",
    code: require("raw!./examples/memberexistsregisteraccount.example"),
    noRender: true
  }]
}, {
  title: "MemberForgotEmail",
  examples: [{
    type: "playground",
    code: require("raw!./examples/memberforgotemail.example"),
    noRender: true
  }]
}, {
  title: "MemberRegister",
  examples: [{
    type: "playground",
    code: require("raw!./examples/memberregister.example"),
    noRender: true
  }]
}, {
  title: "MemberRegister - Error",
  examples: [{
    type: "playground",
    code: require("raw!./examples/memberregistererror.example"),
    noRender: true
  }]
}, {
  title: "MemberAccountCompletion",
  examples: [{
    type: "playground",
    code: require("raw!./examples/memberaccountcompletion.example"),
    noRender: true
  }]
}, {
  title: "MemberMultipleEmails",
  examples: [{
    type: "playground",
    code: require("raw!./examples/membermultipleemails.example"),
    noRender: true
  }]
}, {
  title: "MemberOnlineSignUpForm",
  examples: [{
    type: "playground",
    code: require("raw!./examples/memberonlinesignupform.example"),
    noRender: true
  }]
}, {
  title: "MemberResendEmail",
  examples: [{
    type: "playground",
    code: require("raw!./examples/memberresendemail.example"),
    noRender: true
  }]
}, {
  title: "MemberReclaimEmail",
  examples: [{
    type: "playground",
    code: require("raw!./examples/memberreclaimemail.example"),
    noRender: true
  }]
}];

var Index = function (_ElectrodeDemoIndex) {
  (0, _inherits3.default)(Index, _ElectrodeDemoIndex);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);
    return (0, _possibleConstructorReturn3.default)(this, _ElectrodeDemoIndex.call(this, props));
  }

  Index.prototype.componentDidMount = function componentDidMount() {
    this._setDemoContext(libraryScope, components);
  };

  return Index;
}(_electrodeDemoIndex2.default);

exports.default = Index;
