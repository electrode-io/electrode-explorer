import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import Table from "src/components/table";

describe("Table", () => {
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render a standard table into the document", () => {
      component = ReactDOM.render(
        React.createElement(Table, {}),
        container
      );
      expect(component.isMounted()).to.be.true;
    });

    it("should render a table with a column group", () => {
      component = ReactDOM.render(
        React.createElement(Table, {colGroupClasses: ["table-size-fit"]}),
        container
      );

      const colGroup = TestUtils.scryRenderedDOMComponentsWithClass(
        component,
        "table-size-fit"
      );

      expect(colGroup.length).to.equal(1);
    });

    describe("Striped Table", () => {
      it("should render a stripe on every odd row", () => {
        component = ReactDOM.render(
          React.createElement(Table, {striped: "odd"}),
          container
        );

        const stripedTable = TestUtils.scryRenderedDOMComponentsWithClass(
          component,
          "table-striped-odd"
        );

        expect(stripedTable.length).to.equal(1);
      });

      it("should be able to render a stripe on every even row", () => {
        component = ReactDOM.render(
          React.createElement(Table, {striped: "even"}),
          container
        );

        const stripedTable = TestUtils.scryRenderedDOMComponentsWithClass(
          component,
          "table-striped-even"
        );

        expect(stripedTable.length).to.equal(1);
      });

      it("should be able to render a light stripe on every odd row", () => {
        component = ReactDOM.render(
          React.createElement(Table, {striped: "odd", light: true}),
          container
        );

        const stripedTable = TestUtils.scryRenderedDOMComponentsWithClass(
          component,
          "table-striped-light-odd"
        );

        expect(stripedTable.length).to.equal(1);
      });

      it("should be able to render a table without stripes", () => {
        component = ReactDOM.render(
          React.createElement(Table, {}),
          container
        );

        const stripedTable = TestUtils.findRenderedDOMComponentWithTag(
          component,
          "table"
        );

        expect(stripedTable.props.light).to.be.falsy;
        expect(stripedTable.props.striped).to.be.undefined;
      });
    });
  });
});
