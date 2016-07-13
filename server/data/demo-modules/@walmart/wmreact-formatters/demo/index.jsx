import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import FormattedDate from "../src/components/formatted-date.jsx";
import priceFormatter from "../src/components/price-formatter.jsx";

import dateExample from "raw!./examples/date.example";
import priceExample from "raw!./examples/price.example";

const Index = React.createClass({
  propTypes: {
    scope: React.PropTypes.object
  },
  render() {
    return (
      <div className="component-documentation">

        <h3>FormattedDate</h3>
        <Playground codeText={dateExample}
          scope={assign({React, FormattedDate}, this.props.scope || {})}
          noRender={true}/>

        <h3>priceFormatter</h3>
        <Playground codeText={priceExample}
          scope={assign({React, priceFormatter}, this.props.scope || {})}
          noRender={true}/>
      </div>
    );
  }
});

module.exports = Index;
