import React, {PropTypes} from "react";
import Field from "./field";
import {i18n} from "../common/helpers";
import {Button} from "@walmart/wmreact-interactive";

const canShowHide = (field = {}) => {
  return field.value;
};

export default class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }
  _toggle() {
    this.setState(Object.assign({}, this.state, {show: !this.state.show}));
  }
  render() {
    const { field, ...props } = this.props;
    return (<Field field={field}
             {...props}
             type={this.state.show ? "text" : "password"}
             className={"show-hide"}>
             {canShowHide(field) &&
               <div className="show-hide-toggle js-pw-show-hide-toggle copy-mini">
                 <Button fakelink={true} onClick={() => this._toggle()}>
                   {this.state.show ? i18n("Hide") : i18n("Show")}
                 </Button>
               </div>}
           </Field>
           );
  }
}
Password.propTypes = {
  field: PropTypes.object
};
