import React from "react";
import { Provider, connect } from "react-redux";
import { resolve } from "react-resolver";
import getAuthData from "../api/authorization";
import store from "../stores/authorization";
import { UPDATE } from "../constants/authorization";

const AuthorizationConnector = connect((state) => state)((props) => (
  <div>
    {React.Children.map(props.children,
      (child) => React.cloneElement(child, props)
    )}
  </div>
));

class AuthorizationContainer extends React.Component {
  constructor(props) {
    super(props);
    if (props.auth) {
      store.dispatch({
        ... props.auth,
        type: UPDATE
      });
    }
  }
  render() {
    return (
      <Provider store={store}>
        <AuthorizationConnector>
          {this.props.children}
        </AuthorizationConnector>
      </Provider>
    );
  }
}

AuthorizationContainer.propTypes = {
  auth: React.PropTypes.object,
  children: React.PropTypes.object
};

export default resolve(
  "auth",
  () => {
    const promise = getAuthData();
    promise.then((data) => {
      store.dispatch({
        ... data,
        type: UPDATE
      });
    });
    return promise;
  }
)(AuthorizationContainer);
