import React from "react";
import ReactDOM from "react-dom";

import Options from "src/components/options";

describe("Options", () => {
  let component;
  let container;
  let sandbox;

  beforeEach(() => {
    container = document.createElement("div");

    sandbox.restore();
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  describe("rendering", () => {
    sandbox = sinon.sandbox.create();

    const renderComponent = function (onChange) {
      return ReactDOM.render(
        React.createElement(
          Options,
          {
            choices: [{
              label: "one",
              checked: true
            }, {
              label: "two",
              checked: false
            }, {
              label: "three",
              checked: false
            }],
            onChange
          }
        ),
        container
      );
    };

    it("renders all options", () => {
      component = renderComponent();
      const domNode = component.getDOMNode();
      expect(domNode.querySelectorAll("input")).to.have.length(3);
    });

    it("pre-checks only selected options", () => {
      component = renderComponent();
      const domNode = component.getDOMNode();
      expect(domNode.querySelectorAll("input")[0]).to.have.property("checked", true);
      expect(domNode.querySelectorAll("input")[1]).to.have.property("checked", false);
      expect(domNode.querySelectorAll("input")[2]).to.have.property("checked", false);
    });

    it("calls onChange handler on click", (done) => {
      component = renderComponent((choices) => {
        try {
          expect(choices[1].checked).to.be.true;
        } catch (e) {
          done(e);
        }
        done();
      });

      component._onCheckboxChange(1, true);
    });

    it("returns state.choices on `getCheckedOptions()`", () => {
      component = renderComponent();
      expect(component.getCheckedOptions()).to.deep.equal(component.state.choices);
    });
  });
});
