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
    return (
      <Field
        field={field}
        {...props}
        autoComplete={this.state.show ? "off" : autoComplete}
        type={this.state.show ? "text" : "password"}
        triggerIEHack
        className={"show-hide input-field"}>
        {canShowHide(field) &&
        <div className="show-hide-toggle js-pw-show-hide-toggle copy-mini">
        <Button
          fakelink={true}
          onMouseDown={(ev) => this._toggle(ev)}
          automationId={!isShow ? showAutomationId : hideAutomationId}
          tealeafId={!isShow ? showTealeafId : hideTealeafId}
        >
           {isShow ? "HIDE" : "SHOW"}
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
