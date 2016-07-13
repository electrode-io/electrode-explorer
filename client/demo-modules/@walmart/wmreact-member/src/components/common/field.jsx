import classNames from "classnames";
import React, {PropTypes} from "react";

const showFieldError = (field = {}) => {
  return field.touched && field.error;
};

const showFieldValidationSuccess = (field = {}) => {
  return field.touched && !field.error;
};

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this._onIEHackEvent = this._onIEHackEvent.bind(this);
  }

  _onIEHackEvent(ev) {
    const {onChange, active} = this.props.field;

    if (!active && ev.propertyName === "value" && onChange) {
      onChange(this.refs.field.value);
    }
  }

  componentDidMount() {
    const field = this.refs.field;
    const {field: {onChange} = {}, triggerIEHack} = this.props;

    // when React reuses the old DOM it might already have a value(browser pre-filled for example)
    // that value isn't picked up automatically, so we trigger onChange to help redux-form
    if (field.value && onChange) {
      onChange(field.value);
    }
    if (triggerIEHack && field.onpropertychange !== undefined) {
      field.attachEvent("onpropertychange", this._onIEHackEvent);
    }
  }

  componentWillUnmount() {
    const field = this.refs.field;
    if (this.props.triggerIEHack && field.onpropertychange !== undefined && field.detachEvent) {
      field.detachEvent("onpropertychange", this._onIEHackEvent);
    }
  }

  render() {
    const {
      label,
      field,
      children,
      className,
      automationId,
      tealeafId,
      showLabel = false,
      placeholder,
      validationSuccessMark = false,
      ...rest
      } = this.props;
    return (
      <label
        className={classNames("form-label", {visuallyhidden: rest.type === "hidden"})}
        data-automation-id={automationId}>
        <span className={classNames("label-text", {visuallyhidden: !showLabel})}>{label}</span>

        <div className="validation-group">
          <input
            ref="field"
            type="text"
            className={classNames("form-control", className, {error: showFieldError(field)})}
            data-tl-id={tealeafId}
            placeholder={!showLabel && placeholder}
            {...field}
            {...rest}
          />

          {showFieldError(field) &&
          <i className="validation-marker validation-marker-error">
            <span className="visuallyhidden">Help</span>
          </i>}
          {validationSuccessMark && showFieldValidationSuccess(field) &&
          <i className="validation-marker validation-marker-success">
          </i>}
          {children}

        </div>

        {showFieldError(field) &&
        <p className="error-label">{field.error}</p>}
      </label>
    );
  }
}

Field.propTypes = {
  field: PropTypes.object,
  triggerIEHack: PropTypes.bool,
  label: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  automationId: PropTypes.string,
  tealeafId: PropTypes.string,
  showLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  validationSuccessMark: PropTypes.bool
};
