/*@flow*/
/*global document:false*/
import React from "react";
import Playground from "component-playground";
import { ExpiredLink } from "../src/index";
import { AccountConfirmation } from "../src/index";
import { RegisterReclaimModal } from "../src/index";

import {IntlProvider} from "react-intl";

export default class Demo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  setAlert(alert) {
    if (!alert) {
      return this.setAlert.bind(this);
    }
    alert.preventDefault();
  }
  render() {
    const otherScope = {
      React,
      IntlProvider,
      setAlert: this.setAlert.bind(this)
    };
    return (
      <section>
        <Playground
          codeText={`<IntlProvider><AccountConfirmation
            mainMessage="You're all set!"
            detailedMessage='Your account has been updated'
            buttonMessage="Let's go shopping"
          /></IntlProvider>`}
          scope={{AccountConfirmation, ...otherScope}}/>
        <Playground
          codeText={`<IntlProvider><ExpiredLink
              notification="Your request has expired."
              userMessage="Still need to change your password?"
              btnMessage1="Change password"
              btnMessage2="Continue shopping"
              /></IntlProvider>`}
          scope={{ExpiredLink, ...otherScope}}/>
          <Playground
            codeText={`<IntlProvider><RegisterReclaimModal
              userMessage="Looks like you're already signed in."
              btnMessage="Continue shopping"
              /></IntlProvider>`}
            scope={{RegisterReclaimModal, ...otherScope}}/>
          <Playground
            codeText={`<IntlProvider><RegisterReclaimModal
              userMessage="You've already created an online account."
              btnMessage="Let's go shopping"
              /></IntlProvider>`}
            scope={{RegisterReclaimModal, ...otherScope}}/>
      </section>
    );
  }
}
