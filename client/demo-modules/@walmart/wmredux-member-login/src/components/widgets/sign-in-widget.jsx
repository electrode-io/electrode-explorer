import React from "react";
import {connect} from "react-redux";
import SignIn from "../connected/sign-in";

const SignInWidget = (props) => (<SignIn {...props} />);

export default connect(({signInWidget = {}}) => signInWidget)(SignInWidget);
