import React from "react";
import classnames from "classnames";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import Image from "@walmart/wmreact-base/lib/components/image";
import Field from "./form/validated-field";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import ReactDOM from "react-dom";

class GiftCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localError: null,
      number: "",
      pin: "",
      label: props.showNickName ? "e.g., Sam's allowance" : null
    };
  }

  componentDidMount() {
    const {scrollIntoViewOnMount} = this.props;

    ReactDOM.findDOMNode(this.refs.number).querySelector("input").focus();

    if (scrollIntoViewOnMount) {
      ReactDOM.findDOMNode(this).scrollIntoView({behavior: "smooth"});
    }
  }

  _validate() {
    return [this.refs.number, this.refs.pin]
      .map((field) => field.validate())
      .every((valid) => valid);
  }

  _save() {
    if (!this._validate()) {
      this.setState({
        localError: {
          message: "Please correct below errors"
        }
      });
      return;
    }
    this.setState({
      localError: null
    });
    const {localError, ...serialized} = this.state;
    if (!serialized.label) {
      delete serialized.label;
    }

    this.props.onSave(serialized);
  }

  renderError() {
    const {error} = this.props;
    const {localError} = this.state;
    const renderedError = localError || error;

    if (renderedError) {
      return (
        <Alert {...renderedError}
          isBlock
          className="js-alert-message"/>
      );
    } else {
      return null;
    }
  }

  render() {
    const {
      isInitial,
      tealeafIds,
      showActionsLeft,
      saveBtnPrimary,
      loading,
      floatingLabels
      } = this.props;
    /*eslint-disable max-len*/
    const imgUri = "//i5.walmartimages.com/dfw/63fd9f59-dbdb/k2-_ef8759be-bb04-49cc-9850-59f4f3e462a5.v1.png";
    /*eslint-enable max-len*/
    return (
      <div className="add-form js-gift-card-form">
        <form
          className={
            classnames("add-form-wrapper", {
              "u-borderNone": isInitial,
              "show-actions-left": showActionsLeft
            })
          }
          ref="theForm">
          {this.renderError()}
          <Layout medium={2} x-small={1} padded>
            <div className="edit-form-wrapper">
              <Layout small-sizes={[8, 4]} x-small={1} padded>
                <Field
                  ref="number"
                  value={this.state.number}
                  onChange={(ev) => this.setState({number: ev.target.value})}
                  data-automation-id="enter-gift-card-number"
                  data-tl-id={tealeafIds.number}
                  label="Gift card number"
                  maxLength="16"
                  floating={floatingLabels}
                  errorLabel="Please enter a valid gift card number."
                  validationType="exactdigitlength"
                  validationParams={16}
                  name="number"/>
                <div>
                  <Field
                    ref="pin"
                    value={this.state.pin}
                    onChange={(ev) => this.setState({pin: ev.target.value})}
                    data-automation-id="enter-gift-card-pin"
                    data-tl-id={tealeafIds.pin}
                    label="PIN"
                    floating={floatingLabels}
                    instructions="(4 digits)"
                    errorLabel="Please enter a valid pin."
                    validationType="exactdigitlength"
                    validationParams={4}
                    maxLength="4"
                    name="pin"/>
                  <div className="copy-mini">
                    <a target="_blank" href="http://help.walmart.com/app/answers/detail/a_id/176">
                      Don't have a PIN?
                    </a>
                  </div>
                </div>
              </Layout>
              {this.props.showNickName && (
                <Field
                  ref="label"
                  value={this.state.label}
                  onChange={(ev) => this.setState({label: ev.target.value})}
                  data-automation-id="enter-gift-card-nickname"
                  data-tl-id="enter-gift-card-nickname"
                  label="Gift card nickname"
                  floating={floatingLabels}
                  instructions="(optional)"
                  isRequiredField={false}
                  name="label"/>
              )}

            </div>
            <div className="gift-card-example">
              <Image
                className="sample-card"
                alt="sample Gift card"

                src={imgUri}/>

            </div>
          </Layout>
          <div className="add-form-actions">
            <Button
              primary={saveBtnPrimary}
              className="submit-save-gift-card"
              onClick={() => !loading && this._save()}
              spinner={loading}
              disabled={loading}
              data-automation-id="submit-apply-gift-card"
              data-tl-id={tealeafIds.submit}>{this.props.saveGiftCardActionLabel}</Button>
            {!isInitial && <Button
              fakelink
              className="cancel-save-gift-card"
              data-automation-id="cancel-apply-gift-card"
              data-tl-id={tealeafIds.cancel}
              onClick={() => !loading && this.props.onCancel()}>
              Cancel
            </Button>}
          </div>
        </form>
      </div>
    );
  }
}

GiftCardForm.propTypes = {
  error: React.PropTypes.shape({
    message: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(["warn", "error"])
  }),
  tealeafIds: React.PropTypes.shape({
    number: React.PropTypes.string,
    pin: React.PropTypes.string,
    label: React.PropTypes.string,
    submit: React.PropTypes.string,
    cancel: React.PropTypes.string
  }),
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  showNickName: React.PropTypes.bool,
  isInitial: React.PropTypes.bool,
  loading: React.PropTypes.bool,
  saveBtnPrimary: React.PropTypes.bool,
  showActionsLeft: React.PropTypes.bool,
  saveGiftCardActionLabel: React.PropTypes.string,
  scrollIntoViewOnMount: React.PropTypes.bool,
  floatingLabels: React.PropTypes.bool
};

GiftCardForm.defaultProps = {
  tealeafIds: {
    number: "number",
    pin: "pin",
    label: "label",
    submit: "submit",
    cancel: "cancel"
  },
  showNickName: true,
  saveBtnPrimary: true,
  showActionsLeft: false,
  scrollIntoViewOnMount: true,
  saveGiftCardActionLabel: "Save"
};

export default GiftCardForm;
