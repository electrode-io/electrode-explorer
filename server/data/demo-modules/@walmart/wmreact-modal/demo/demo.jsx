import React from "react";
import Playground from "component-playground";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import GridLayout from "@walmart/wmreact-layout/lib/components/layout";

import StateWrapper from "./state-wrapper";

import Container from "../src/components/container";
import Modal from "../src/components/modal";
import Layout from "../src/components/layout";
import ButtonGroup from "../src/components/button-group";

import ModalExample from "raw!./examples/modal.example";

const scope = {
  React,
  Button,
  GridLayout,
  StateWrapper,
  Container,
  Modal,
  Layout,
  ButtonGroup
};

class Demo extends React.Component {

  render() {
    return (
      <div className="component-documentation">
        <h3>Configurable Modal Example</h3>
        <Playground
          codeText={ModalExample}
          scope={scope}
          noRender={true}
        />
      </div>
    );
  }
}

export default Demo;
