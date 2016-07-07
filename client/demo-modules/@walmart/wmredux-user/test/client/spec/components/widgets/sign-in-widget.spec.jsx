import "intl";
import {IntlProvider} from "react-intl";
import {mount} from "enzyme";
import SignInWidget from "src/components/widgets/sign-in-widget";
import React from "react";
import {POSSIBLE_STATES} from "src/actions/widget";

describe("SignInWidget", () => {
  Object.keys(POSSIBLE_STATES).forEach((key) => {
    it(`should render using state ${key}`, () => {
      const wrapper = mount(<IntlProvider><SignInWidget
        currentState={POSSIBLE_STATES[key]}
        store={{dispatch: () => null, getState: () => ({form: {}}), subscribe: () => null}}/>
        </IntlProvider>);

      expect(wrapper.length).to.equal(1);
    });
  });
});
