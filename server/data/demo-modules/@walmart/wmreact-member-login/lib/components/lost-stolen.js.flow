import React, { PropTypes} from "react";
import Field from "@walmart/wmreact-user/lib/components/common/field";
import InfoIcon from "@walmart/icons-set/icons/pngs/icon-tooltip-1x.png";
import CreditIcon from "@walmart/wmreact-member-common/src/images/card.png";
import Button from "@walmart/wmreact-interactive/lib/components/button";

class LostStolen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: "show-hide-flyout"};
  }

  _toggle(evt) {
    evt.preventDefault();
    this.setState({show: this.state.show === "show-hide-flyout" ?
      "account-info-flyout" : "show-hide-flyout" });
  }

  render() {
    const { greeting,
        subject,
        buttonMessage,
        membershipText,
        btnPrimary,
        digitText,
        emailFooter,
        tealeaf,
        automation} = this.props;

    return (
        <section className="lostStolen">
            <label className="lost-greeting"><b>{greeting}</b></label>
            <label className="lost-text">{subject}</label>
            <label className="lost-text">{membershipText}</label>
            <Field
              type="text"
              label={"Membership number"}
              placeholder={"Membership number"}
              autoComplete="off"
              automationId={automation.memberShipInput}
              tealeafId={tealeaf.memberShipInput}>
              {<a href="#" onClick={this._toggle.bind(this)} className="icon-tool-tip">
                <img src={InfoIcon} /></a>}
            </Field>
            <div className={this.state.show}>
              <img src={CreditIcon} />
            </div>
            <label className="online-account-digit-text">{digitText}</label>
            <Button
              block
              type="submit"
              primary={btnPrimary}
              automationId={automation.continueBtn}
              tealeafId={tealeaf.continueBtn}
              >
              {buttonMessage}
            </Button>
            <label className="email-footer">{emailFooter}</label>
        </section>
    );
  }

}
LostStolen.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  membershipText: PropTypes.string.isRequired,
  digitText: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  btnPrimary: PropTypes.bool,
  emailFooter: PropTypes.string,
  automation: PropTypes.shape({
    memberShipInput: PropTypes.string,
    continueBtn: PropTypes.string
  }),
  tealeaf: PropTypes.shape({
    memberShipInput: PropTypes.string,
    continueBtn: PropTypes.string
  })

};
LostStolen.defaultProps = {
  btnPrimary: true,
  automation: {// for testing
    membershipInput: "lost-stolen-membership-input",
    continueBtn: "lost-stolen-continue-btn"
  },
  tealeaf: { //for analytics
    membershipInput: "lost-stolen-membership-input",
    continueBtn: "lost-stolen-continue-btn"
  }
};

export default LostStolen;
