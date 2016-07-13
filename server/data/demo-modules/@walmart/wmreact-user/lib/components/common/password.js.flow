import React, {PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import Field from "./field";

const canShowHide = (field = {}) => {
  return field.value;
};

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }
  _toggle(ev) {
    ev.preventDefault();
    this.setState(Object.assign({}, this.state, {show: !this.state.show}));
  }
  render() {
    const {
      field,
      ...props,
      showAutomationId,
      hideAutomationId,
      showTealeafId,
      hideTealeafId
    } = this.props;

    const isShow = this.state.show;
    const {autoComplete = "off"} = props;

    let autoCompleteProp = {};
    if (autoComplete !== "new-password") {
      autoCompleteProp = this.state.show ? {autoComplete: "off"} : {};
    } else {
      autoCompleteProp = this.state.show ? {autoComplete: "off"} : {autoComplete};
    }

    return (
      <Field
        field={field}
        {...props}
        {...autoCompleteProp}
        type={this.state.show ? "text" : "password"}
        triggerIEHack
        className={"show-hide"}>
        {canShowHide(field) &&
        <div className="show-hide-toggle js-pw-show-hide-toggle copy-mini">
        <Button
          fakelink={true}
          onMouseDown={(ev) => this._toggle(ev)}
          automationId={!isShow ? showAutomationId : hideAutomationId}
          tealeafId={!isShow ? showTealeafId : hideTealeafId}
        >
           {isShow ? "Hide" : "Show"}
         </Button>
        </div>}
      </Field>
    );
  }
}
Password.propTypes = {
  field: PropTypes.object,
  showAutomationId: PropTypes.string,
  hideAutomationId: PropTypes.string,
  showTealeafId: PropTypes.string,
  hideTealeafId: PropTypes.string
};

Password.defaultProps = {
  showAutomationId: "password-show-btn",
  hideAutomationId: "password-hide-btn",
  showTealeafId: "password-show-btn",
  hideTealeafId: "password-hide-btn"
};
