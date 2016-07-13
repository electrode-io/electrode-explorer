import React from "react";
import ReactDOM from "react-dom";

import TableBody from "src/components/table-body";

describe("Table Body", () => {
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
        <TableBody />,
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
