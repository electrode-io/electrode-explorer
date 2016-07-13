import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import { Facets } from "../src";

import demoData from "./data/demo";

import facetsExample from "raw!./examples/facets.example";

export default class Index extends React.Component {
  render() {
    return (
      <div className="components-documentation">

        <h3>Facets</h3>
        {demoData.facets.map((data) => {
          return (
            <Playground
              key={data.name}
              codeText={facetsExample}
              scope={assign({React, Facets, data}, this.props.scope || {})}
              noRender={true}/>
          );
        })}

      </div>
    );
  }
}

Index.propTypes = {
  scope: React.PropTypes.object
};
