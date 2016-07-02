/*eslint-disable*/
import { signUp } from "src/actions/auth";
import api from "src/api/api";
import * as actionTypes from "src/actions/constants/signup";
import { setCustomerInfo } from "src/actions/customer";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { createAction } from "redux-actions";
import { actionTypes as reduxFormActions } from "redux-form";

import Promise from "bluebird";

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);
const store = mockStore({});
const payload = {
  "emailAddress": "good@sams.com",
  "cid": "3680a3ac-5e1c-4ceb-9180-2f5d29659f55",
  "omsCustomerId": "1612995412",
  "customerId": "3680a3ac-5e1c-4ceb-9180-2f5d29659f55"
};
const goodData = {email: "good@sams.com"};
const goodResp = {payload};
const badData = {email: "bad@sams.com"};
const badResp = {code: "any_error"};

describe("User actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe("Signup actions", () => {
    const onSignUp = createAction(actionTypes.SIGN_UP);
    const onSignUpSuccess = createAction(actionTypes.SIGN_UP_SUCCESS);
    const onSignUpError = createAction(actionTypes.SIGN_UP_ERROR);

    const signUpStub = sinon.stub(api, "signUp");

    before(() => {
      signUpStub.withArgs(goodData).returns(Promise.resolve(goodResp));
      signUpStub.withArgs(badData).returns(Promise.reject({code: "account_already_exist"}));
    });

    after(() => {
      signUpStub.restore();
    });

    it("on successful signup", () => {
      return store.dispatch(signUp(goodData))
        .then(() => {
          expect(api.signUp).to.have.been.calledWith(goodData);
          expect(store.getActions()[0]).to.eql(onSignUp(goodData));
          expect(store.getActions()[1]).to.eql(setCustomerInfo(goodResp));
          expect(store.getActions()[2]).to.eql(onSignUpSuccess(goodResp));
        });
    });

    it("on unsuccessful signup", () => {
      return store.dispatch(signUp(badData))
        .catch(() => {
          expect(api.signUp).to.have.been.calledWith(badData);
          expect(store.getActions()[0]).to.eql(onSignUp(badData));
          expect(store.getActions()[1]).to.have.property("type", onSignUpError().type);
          expect(store.getActions()[1]).to.have.deep.property("payload.code", "account_already_exist");
          expect(store.getActions()[2]).to.have.property("type", reduxFormActions.CHANGE);
          expect(store.getActions()[2]).to.have.property("value", badData.email);
          expect(store.getActions()[3]).to.have.property("type", reduxFormActions.FOCUS);
        });
    });
  });
})
