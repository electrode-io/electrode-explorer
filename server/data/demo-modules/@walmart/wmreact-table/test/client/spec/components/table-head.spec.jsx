import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import TableHead from "src/components/table-head";

describe("Table Head", () => {
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      container = document.createElement("table");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        <TableHead>Foo</TableHead>,
        container
      );
      expect(component).to.not.be.false;
    });

    it("should render a head with in alternate color", () => {
      component = ReactDOM.render(
        <TableHead alt={true}>Foo</TableHead>,
        container
      );

      const head = TestUtils.findRenderedDOMComponentWithClass(
        component,
        "table-header-alt"
      );

      expect(head).to.not.be.null;
    });
  });
});
