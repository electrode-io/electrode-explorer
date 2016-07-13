import React from "react";
import { shallow } from "enzyme";
import { SignInRoute as signInRoute, Widget } from "src/components/widgets/sign-in-route-widget";
import { Route } from "react-router";
import SignInWidget from "src/components/widgets/sign-in-widget";

describe("SignInRoute", () => {

  it("should return a route", () => {
    const route = signInRoute();
    expect(route.type).to.equal(Route);
  });
});

describe("RouteWidget", () => {
  it("should go to sign in state on /login", () => {
    const {currentState} = shallow(<Widget params={{pageId: "/login"}}/>)
      .find(SignInWidget).props();

    expect(currentState).to.equal(0);
  });
});
