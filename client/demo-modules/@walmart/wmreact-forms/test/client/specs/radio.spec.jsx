import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";

import Radio from "src/components/radio";

describe("Radio", () => {
  let container;
  let component;
  let sandbox;
  let btn;
  let grp;

  describe("Mounting", () => {
    beforeEach(() => {
      sandbox = sinon.sandbox.create();

      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);

      sandbox.restore();
    });

    it("should render into the document", () => {
      btn = <Radio.Button group={"foo"} alt={true} />;
      component = ReactDOM.render(
        btn,
        container
      );
      expect(component.isMounted()).to.be.true;
      TestUtils.Simulate.click(btn);
    });

    it("should render Group into the document", (done) => {
      grp = (
        <Radio.Group name={"foo"} alt={true} selected={1}>
          <Radio.Button group={"foo"} alt={true} key={0} />
          <Radio.Button group={"foo"} alt={true} key={1} />
          <Radio.Button group={"foo"} alt={true} key={1} />
        </Radio.Group>
      );

      component = ReactDOM.render(
        grp,
        container
      );
      expect(component.isMounted()).to.be.true;

      component.setProps({
        selected: 2
      }, () => {
        done();
      });
    });

    it("should render Simple into the document", (done) => {
      const props = {
        group: "foo",
        values: ["1", "2", "3"],
        selected: "1"
      };

      grp = <Radio.Simple {...props} />;
      component = ReactDOM.render(
        grp,
        container
      );

      expect(component.isMounted()).to.be.true;

      const list = TestUtils.scryRenderedDOMComponentsWithTag(
        component,
        "input"
      );
      expect(list.length).to.equal(3);

      TestUtils.Simulate.click(list[0]);

      component.setProps({
        selected: "2"
      }, () => {
        done();
      });
    });

    it("should return no-op onChange if no props.onChange is provided", () => {
      grp = (
        <Radio.Group name="foo" alt={true} selected={1}>
          <Radio.Button group={"foo"} alt={true} key={0} />
          <Radio.Button group={"foo"} alt={true} key={1} />
          <Radio.Button group={"foo"} alt={true} key={1} />
        </Radio.Group>
      );

      component = ReactDOM.render(
        grp,
        container
      );

      expect(component.props.children[0].props.onChange()).to.equal(undefined);
    });
  });

  describe("Group", () => {
    beforeEach(() => {
      sandbox = sinon.sandbox.create();

      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);

      sandbox.restore();
    });

    it("should not change the state if state.selected is null", () => {
      grp = (
        <Radio.Group name="foo" alt={true} selected={1}>
          <Radio.Button group={"foo"} alt={true} key={0} />
          <Radio.Button group={"foo"} alt={true} key={1} />
          <Radio.Button group={"foo"} alt={true} key={1} />
        </Radio.Group>
      );

      component = ReactDOM.render(
        grp,
        container
      );

      const spySetState = sandbox.spy(component, "setState");

      component.componentDidMount();

      expect(spySetState).to.not.have.been.called;
    });

    it("should not change the state if nextProps.selected is undefined in componentWillReceiveProps", () => {
      grp = (
        <Radio.Group name="foo" alt={true} selected={1}>
          <Radio.Button group={"foo"} alt={true} key={0} />
          <Radio.Button group={"foo"} alt={true} key={1} />
          <Radio.Button group={"foo"} alt={true} key={1} />
        </Radio.Group>
      );

      component = ReactDOM.render(
        grp,
        container
      );

      const spySetState = sandbox.spy(component, "setState");

      component.componentWillReceiveProps({ selected: undefined });

      expect(spySetState).to.not.have.been.called;
    });
  });
});
