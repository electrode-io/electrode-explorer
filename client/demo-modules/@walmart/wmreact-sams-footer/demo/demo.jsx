/*global document:false*/
import React from "react";
//import {SamsFooter} from "../src/index";
import {SamsFooter} from "../src/components/sams-footer";
import "./demo.styl";
import quimbyData from "./samsData";

export default class Demo extends React.Component {
  render() {
    return (
      <div className="demo">

        <SamsFooter
          copyrightText = "© SamsClub Stores, Inc."
          referenceId = "ASWEDF123W"
          quimbyData = {quimbyData} />
      </div>
    );
  }
}
