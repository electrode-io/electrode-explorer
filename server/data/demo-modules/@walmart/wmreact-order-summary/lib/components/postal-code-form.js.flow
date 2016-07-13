/* @flow */

import React, {PropTypes} from "react";
import classNames from "classnames";

import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import ZipCode from "@walmart/wmreact-forms/lib/components/zipcode";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import formValidationMixin from "@walmart/wmreact-validation/lib/mixins/form-validation";

const PostalCodeForm = React.createClass({
  displayName: "OrderSummary.PostalCodeForm",

  mixins: [formValidationMixin(["zipCodeField"])],

  propTypes: {
    className: PropTypes.string,
    postalCode: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    automation: PropTypes.shape({
      input: PropTypes.string,
      submit: PropTypes.string,
      cancel: PropTypes.string
    }),
    tealeaf: PropTypes.shape({
      input: PropTypes.string,
      submit: PropTypes.string,
      cancel: PropTypes.string
    })
  },

  getDefaultProps():Object {
    return {
      className: "",
      postalCode: "",
      loading: false,
      automation: {
        input: "order-summary-tax-flyout-input",
        submit: "order-summary-tax-flyout-calculate",
        cancel: "order-summary-tax-flyout-cancel"
      },
      tealeaf: {
        input: "order-summary-tax-flyout-input",
        submit: "order-summary-tax-flyout-calculate",
        cancel: "order-summary-tax-flyout-cancel"
      }
    };
  },

  _onSubmit(ev:Object) {
    ev.preventDefault();

    if (this.validate()) {
      this.props.onSubmit(this.refs.zipCodeField.getValue());
    }
  },

  _onCancel(ev:Object) {
    ev.preventDefault();
    this.props.onCancel();
  },

  componentWillUpdate():ReactElement {
    const {postalCode} = this.props;

    // Internally the zip code field keeps its value as a state which means
    // setting defaultValue prop on the component only sets the initial value
    // of the state. But we want to make sure the value in the field is always
    // the same as the value we have here so we always call setValue on the
    // component to force its internal value to update.
    this.refs.zipCodeField.setValue(postalCode);
  },

  render():ReactElement {
    const {
      className, postalCode, loading, automation, tealeaf
    } = this.props;

    const componentClassName = classNames("OrderSummary-PostalCodeForm", className);

    return (
      <form className={componentClassName} onSubmit={this._onSubmit}>
        <ZipCode
          ref="zipCodeField"
          showLabel={false}
          isDisabled={loading}
          defaultValue={postalCode}
          automationId={automation.input}
          tealeafId={tealeaf.input} />
        <Arrange spaced={true}>
          <Arrange.Fit>
            <Button type="submit" spinner={loading} disabled={loading}
              data-automation-id={automation.submit} tealeafId={tealeaf.submit}>
              Calculate
            </Button>
          </Arrange.Fit>
          <Arrange.Fill>
            <Button onClick={this._onCancel} fakelink={true} disabled={loading}
              data-automation-id={automation.cancel} tealeafId={tealeaf.cancel}>
              Cancel
            </Button>
          </Arrange.Fill>
        </Arrange>
      </form>
    );
  }
});

export default PostalCodeForm;
