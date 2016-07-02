import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import TableCell from "src/components/table-cell";

describe("Table Cell", () => {
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
        <tbody><tr><TableCell>foo</TableCell></tr></tbody>,
        container
      );
      expect(component.isMounted()).to.be.true;
    });

    describe("colSpan and rowSpan", () => {
      it("should render a cell with column span of 2", () => {
        component = ReactDOM.render(
          <TableCell colSpan={2}>foo</TableCell>,
          container
        );

        const cell = TestUtils.findRenderedDOMComponentWithTag(
          component,
          "td"
        );

        expect(React.findDOMNode(cell).props.colSpan).to.equal(2);
      });

      it("should render a cell with row span of 2", () => {
        component = ReactDOM.render(
          <TableCell rowSpan={2} />,
          container
        );

        const cell = TestUtils.findRenderedDOMComponentWithTag(
          component,
          "td"
        );

        expect(React.findDOMNode(cell).props.rowSpan).to.equal(2);
      });

      it("should render a cell with col and row span of 2", () => {
        component = ReactDOM.render(
          <TableCell colSpan={2} rowSpan={2} />,
          container
        );

        const cell = TestUtils.findRenderedDOMComponentWithTag(
          component,
          "td"
        );

        expect(React.findDOMNode(cell).props.colSpan).to.equal(2);
        expect(React.findDOMNode(cell).props.rowSpan).to.equal(2);
      });
    });
  });
});
