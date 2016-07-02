import React from "react";
import ReactDOM from "react-dom";

import TableRow from "src/components/table-row";

describe("Table Row", () => {
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render into the document", () => {
      component = ReactDOM.render(
        React.createElement(TableRow, {}),
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
