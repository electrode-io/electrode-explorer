/* eslint-disable */

import React, { PropTypes, Component } from "react";
import Playground from "component-playground";
import assign from "object-assign";
import {Layout} from "@walmart/wmreact-layout";
import {SignIn, SignUp} from "../src/index";

import * as libraryScope from "../src/index";

export default class Index extends Component {
  render() {
    const localScope = assign({ React }, this.props.scope || {}, libraryScope);
    return (
      <div className="component-documentation">
        <Layout small={1} medium={2}>
          <SignIn/>
          <SignUp/>
        </Layout>
      </div>
    );
  }
}
