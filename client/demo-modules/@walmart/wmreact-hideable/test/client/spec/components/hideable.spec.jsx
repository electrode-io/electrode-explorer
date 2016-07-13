import React from "react";
import hideableMixin from "src/components/hideable";

import TestUtils from "react-addons-test-utils";

describe("Hideable", () => {
  let Hideable;

  beforeEach(() => {
    Hideable = React.createClass({
      mixins: [hideableMixin()],

      render() {
        return (
          <div className={this._hideableClasses()}>
            hidden classes div
          </div>
        );
      }
    });
  });

  it("should return not 'hide-content' if props.hidden is false", () => {
    const hideable = TestUtils.renderIntoDocument(<Hideable />);

    const hideableChildren = TestUtils.scryRenderedDOMComponentsWithClass(
            hideable, "hide-content");

    expect(hideableChildren.length).to.equal(0);
  });

  it("should return 'hide-content' if props.hidden is true", () => {
    const hideable = TestUtils.renderIntoDocument(<Hideable hidden={true} />);

    const hideableChildren = TestUtils.scryRenderedDOMComponentsWithClass(
            hideable, "hide-content");

    expect(hideableChildren.length).to.equal(1);
  });
});
