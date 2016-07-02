import React, {PropTypes} from "react";
import i18n from "../utils/i18n";
import Button from "@walmart/wmreact-interactive/lib/components/button";

export default React.createClass({
  propTypes: {
    onCancel: PropTypes.func.isRequired,
    onContinue: PropTypes.func.isRequired
  },

  render() {
    return (
      <div className="arrange">
        <div className="arrange-fit u-size-1-s">
          <Button onClick={this.props.onCancel}
            fakelink={true}
            className="pull-right no-wrap shipping-accordion-cancel">
            {i18n("Cancel")}
          </Button>
        </div>
        <div className="arrange-fill u-size-1-12-s">
          <Button onClick={this.props.onContinue}
            primary={true}
            className="btn-block-max-s">
            {i18n("Continue")}
          </Button>
        </div>
      </div>
    );
  }
});
