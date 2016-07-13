import React from "react";
import {connect} from "react-redux";
import ForgotPassword from "../connected/forgot-password";

const ForgotPasswordWidget = (props) => (<ForgotPassword {...props} />);

export default connect(({forgotPasswordWidget = {}}) => forgotPasswordWidget)(ForgotPasswordWidget);
