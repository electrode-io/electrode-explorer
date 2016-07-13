import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import TableHeader from "src/components/table-header";

describe("Table Header", () => {
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      container = document.createElement("thead");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        React.createElement(TableHeader, {}),
        container
      );
      expect(component.isMounted()).to.be.true;
    });

    describe("colSpan and rowSpan", () => {
      it("should render a header with column span of 2", () => {
        component = ReactDOM.render(
          React.createElement(TableHeader, {colSpan: 2}),
          container
        );

        const header = TestUtils.findRenderedDOMComponentWithTag(
          component,
          "th"
        );

        expect(header.props.colSpan).to.equal(2);
      });

      it("should render a header with row span of 2", () => {
        component = ReactDOM.render(
          <TableHeader rowSpan={2} />,
          container
        );

        const header = TestUtils.findRenderedDOMComponentWithTag(
          component,
          "th"
        );

        expect(header.props.rowSpan).to.equal(2);
      });

      it("should render a header with col and row span of 2", () => {
        component = ReactDOM.render(
          React.createElement(TableHeader, {colSpan: 2, rowSpan: 2}),
          container
        );

        const header = TestUtils.findRenderedDOMComponentWithTag(
          component,
          "th"
        );

        expect(header.props.colSpan).to.equal(2);
        expect(header.props.rowSpan).to.equal(2);
      });
    });
  });
});
