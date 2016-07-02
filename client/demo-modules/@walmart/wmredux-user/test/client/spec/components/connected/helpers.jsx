import React from "react";
import {IntlProvider} from "react-intl";
import { mount } from "enzyme";
import "babel-polyfill";

export const mountAndGetInnerPropsFor = (Component, Inner) =>
  (props = {}, dispatch = () => Promise.resolve({})) => {
    const allProps = {
      store: {dispatch, getState: () => ({form: {}}), subscribe: () => null},
      ...props
    };
    const comp = mount(<IntlProvider><Component {...allProps}/></IntlProvider>);

    return comp.find(Inner).props();
  };
