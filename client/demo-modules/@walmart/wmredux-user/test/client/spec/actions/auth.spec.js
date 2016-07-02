import * as actions from "src/actions/auth";
import api from "src/api/api";
import * as actionTypes from "src/actions/action-types";
import {setCustomerInfo} from "src/actions/customer";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {createAction} from "redux-actions";
import {actionTypes as reduxFormActions} from "redux-form";

import Promise from "bluebird";


const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);
const store = mockStore({});
const payload = {
  "emailAddress": "good@wm.com",
  "cid": "3680a3ac-5e1c-4ceb-9180-2f5d29659f55",
  "omsCustomerId": "1612995412",
  "customerId": "3680a3ac-5e1c-4ceb-9180-2f5d29659f55"
};
const goodData = {email: "good@wm.com"};
const goodResp = {payload};
const badData = {email: "bad@wm.com"};
const badResp = {code: "any_error"};

describe("User actions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe("Signin actions", () => {
    const onSignIn = createAction(actionTypes.SIGN_IN);
    const onSignInSuccess = createAction(actionTypes.SIGN_IN_SUCCESS);
    const onSignInError = createAction(actionTypes.SIGN_IN_ERROR);

    const signInStub = sinon.stub(api, "signIn");

    before(() => {
      signInStub.withArgs(goodData).returns(Promise.resolve(goodResp));
      signInStub.withArgs(badData).returns(Promise.reject(badResp));
    });

    after(() => {
      signInStub.restore();
    });

    it("on successfull signin", () => {
      return store.dispatch(actions.signIn(goodData))
        .then(() => {
          expect(api.signIn).to.have.been.calledWith(goodData);
          expect(store.getActions()[0]).to.eql(onSignIn(goodData));
          expect(store.getActions()[1]).to.eql(setCustomerInfo(goodResp.payload));
          expect(store.getActions()[2]).to.eql(onSignInSuccess(goodResp.payload));
        });
    });
    it("on unsuccessfull signin", () => {
      return store.dispatch(actions.signIn(badData))
        .catch(() => {
          expect(api.signIn).to.have.been.calledWith(badData);
          expect(store.getActions()[0]).to.eql(onSignIn(badData));
          expect(store.getActions()[1]).to.have.property("type", onSignInError().type);
          expect(store.getActions()[1]).to.have.deep.property("payload.code", badResp.code);
        });
    });
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

    it("on successfull signup", () => {
      return store.dispatch(actions.signUp(goodData))
        .then(() => {
          expect(api.signUp).to.have.been.calledWith(goodData);
          expect(store.getActions()[0]).to.eql(onSignUp(goodData));
          expect(store.getActions()[1]).to.eql(setCustomerInfo(goodResp));
          expect(store.getActions()[2]).to.eql(onSignUpSuccess(goodResp));
        });
    });
    it("on unsuccessfull signup", () => {
      return store.dispatch(actions.signUp(badData))
        .catch(() => {
          expect(api.signUp).to.have.been.calledWith(badData);
          expect(store.getActions()[0]).to.eql(onSignUp(badData));
          expect(store.getActions()[1]).to.have.property("type", onSignUpError().type);
          expect(store.getActions()[1]).to.have.deep.property("payload.code",
            "account_already_exist");
          expect(store.getActions()[2]).to.have.property("type", reduxFormActions.CHANGE);
          expect(store.getActions()[3]).to.have.property("type", reduxFormActions.FOCUS);

        });
    });
  });
  describe("Request Password Token actions", () => {
    const onRequestPasswordToken = createAction(actionTypes.REQUEST_PASSWORD_TOKEN);
    const onRequestPasswordTokenSuccess = createAction(actionTypes.REQUEST_PASSWORD_TOKEN_SUCCESS);
    const onRequestPasswordTokenError = createAction(actionTypes.REQUEST_PASSWORD_TOKEN_ERROR);

    const ReqPasswordStub = sinon.stub(api, "requestPasswordToken");

    before(() => {
      ReqPasswordStub.withArgs(goodData).returns(Promise.resolve(goodResp));
      ReqPasswordStub.withArgs(badData).returns(Promise.reject(badResp));
    });
    after(() => {
      ReqPasswordStub.restore();
    });
    it("on successfull request password token", () => {
      return store.dispatch(actions.requestPasswordToken(goodData))
        .then(() => {
          expect(api.requestPasswordToken).to.have.been.calledWith(goodData);
          expect(store.getActions()[0]).to.eql(onRequestPasswordToken(goodData));
          expect(store.getActions()[1]).to.eql(onRequestPasswordTokenSuccess(goodResp));
        });
    });
    it("on unsuccessfull request password token", () => {
      return store.dispatch(actions.requestPasswordToken(badData))
        .catch(() => {
          expect(api.requestPasswordToken).to.have.been.calledWith(badData);
          expect(store.getActions()[0]).to.eql(onRequestPasswordToken(badData));
          expect(store.getActions()[1]).to.have.property("type",
            onRequestPasswordTokenError().type);
          expect(store.getActions()[1]).to.have.deep.property("payload.code", badResp.code);
        });
    });
  });
  describe("Reset Password token actions", () => {
    const onResetPassword = createAction(actionTypes.RESET_PASSWORD);
    const onResetPasswordSuccess = createAction(actionTypes.RESET_PASSWORD_SUCCESS);
    const onResetPasswordError = createAction(actionTypes.RESET_PASSWORD_ERROR);

    const ResetPasswordStub = sinon.stub(api, "resetPassword");

    before(() => {
      ResetPasswordStub.withArgs(goodData).returns(Promise.resolve(goodResp));
      ResetPasswordStub.withArgs(badData).returns(Promise.reject(badResp));
    });
    after(() => {
      ResetPasswordStub.restore();
    });
    it("on successfull reset password", () => {
      return store.dispatch(actions.resetPassword(goodData))
        .then(() => {
          expect(api.resetPassword).to.have.been.calledWith(goodData);
          expect(store.getActions()[0]).to.eql(onResetPassword(goodData));
          expect(store.getActions()[1]).to.eql(onResetPasswordSuccess(goodResp));
        });
    });
    it("on unsuccessfull reset password", () => {
      return store.dispatch(actions.resetPassword(badData))
        .catch(() => {
          expect(api.resetPassword).to.have.been.calledWith(badData);
          expect(store.getActions()[0]).to.eql(onResetPassword(badData));
          expect(store.getActions()[1]).to.have.property("type",
            onResetPasswordError().type);
          expect(store.getActions()[1]).to.have.deep.property("payload.code", badResp.code);
        });
    });
  });
});
