import React, { PropTypes, Component} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { Geolocate } from "@walmart/geolocate";
import validator from "@walmart/wmreact-validation/lib/validators";
import classnames from "classnames";

const {
  userLocation
} = validator;
class FindClub extends Component {
  constructor(props) {
    super(props);
    this.geolocate = new Geolocate();
    this.extractLatLong = this.extractLatLong.bind(this);
    this.findStores = this.findStores.bind(this);
    this.onStoreFinderActive = props.onStoreFinderActive.bind(this);
    this.state = {
      zipCode: "",
      errorMessage: ""
    };
  }

  validateZipCode(inputZipCode) {
    const nearbyStores = this.props.nearbyStores;
    const nearbyDistance = this.props.nearbyDistance || 150;
    const validateObject = {
      isValidZipCode: false,
      withinProximity: false
    };

    if (!inputZipCode || !nearbyStores) {
      return validateObject;
    }

    if (userLocation.validate(inputZipCode)) {
      validateObject.isValidZipCode = true;

      for (let i = 0; i < nearbyStores.length; ++i) {
        const nearbyClub = nearbyStores[i];
        if (nearbyClub && nearbyClub.address && nearbyClub.distance <= nearbyDistance) {
          validateObject.withinProximity = true;
          break;
        }
      }
    }

    return validateObject;
  }

  onZipCodeChange(event) {
    const {value} = event.target;
    this.setState({
      zipCode: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  onFindClick(e) {
    const zipCode = this.fcinput.value;
    const {isValidZipCode, withinProximity} = this.validateZipCode(zipCode);
    if (!isValidZipCode) {
      this.setState({
        errorMessage: "Please check your ZIP code"
      });
    } else if (isValidZipCode && withinProximity) {
      this.onStoreFinderActive({singleLineAddr: zipCode});
      this.props.close(e);
      this.props.openClubList(e);
    } else if (!withinProximity) {
      this.renderNoClubsFound();
    }
  }

  closeModal() {
    this.refs.modal.hide();
  }

  renderErrorNotifications() {
    if (this.state.errorMessage) {
      return (
        <div className="error-message">{this.state.errorMessage}</div>
      );
    }
    return null;
  }

  extractLatLong(geo) {
    const {
      coords: {
        latitude,
        longitude
      }
    } = geo;
    return {
      latitude,
      longitude
    };
  }

  findStores(singleLineAddr) {
    this.onStoreFinderActive({singleLineAddr});
  }

  render() {
    return (
      <div>
        {this.renderFindAClub()}
      </div>
    );
  }

  renderFindAClub() {
    const inputClass = classnames({
      "fc-input-on-blur": !this.props.onFocus,
      "fc-input-on-focus": this.props.onFocus
    });
    const zipErrorClass = classnames({
      "fc-zip-error": this.state.errorMessage,
      "fc-zip-success": !this.state.errorMessage
    });
    const inputErrorClass = classnames({
      "fc-input-error fc-find-club": this.props.zipError,
      "fc-input-success fc-find-club": !this.props.zipError
    });


    return (
      <div className="find-a-club">
        <div className="modal-header">
          <a href="#" onClick={this.props.close} className="fc-icon-close">x</a>
        </div>
        <div className="modal-body">
          <label className="fc-notification">{this.props.notification}</label>
          <label className="fc-user-message">{this.props.userMessage}</label>
          <div className={zipErrorClass}>{this.state.errorMessage}</div>
          <form className="myForm"
            onSubmit={this.handleSubmit}>
            <div className="formFieldElement" >
              <label className={inputClass}>{this.props.labelText}</label>
              <input className={inputErrorClass}
                type="text"
                ref={(inputField) => { this.fcinput = inputField; }}/>
              <div className="modal-footer">
                <Button className="fc-cancel-btn"
                  onClick={this.props.close}
                  type="button"
                  disabled={this.props.submitting}
                  automationId={this.props.automation.cancelBtn}
                  tealeafId={this.props.tealeaf.cancelBtn}>
                  {this.props.cancelBtn}
                </Button>
                <Button className="fc-find-btn"
                  onClick={this.onFindClick.bind(this)}
                  type="button"
                  disabled={this.props.submitting}
                  automationId={this.props.automation.findBtn}
                  tealeafId={this.props.tealeaf.findBtn} >
                  {this.props.findBtn}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }

}

FindClub.propTypes = {
  notification: PropTypes.string.isRequired,
  userMessage: PropTypes.string.isRequired,
  findBtn: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  cancelBtn: PropTypes.string.isRequired,
  changeLocationBtn: PropTypes.string.isRequired,
  submitting: PropTypes.bool,
  tealeaf: PropTypes.object,
  automation: PropTypes.object,
  close: PropTypes.func,
  btnMessage: PropTypes.string,
  onStoreFinderActive: PropTypes.func,
  nearbyStores: PropTypes.array,
  nearbyDistance: PropTypes.number,
  openClubList: PropTypes.func,
  zipError: PropTypes.string,
  onFocus: PropTypes.string,
  labelText: PropTypes.string
};
FindClub.defaultProps = {
  submitting: false,
  notification: "Find a club",
  userMessage: "Choose your club to see pricing and availability",
  findBtn: "Find",
  cancelBtn: "Cancel",
  automation: {// for testing
    submitBtn1: "Find-a-club-cancel-submit-btn",
    submitBtn2: "Find-a-club-find-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn1: "Find-a-club-cancel-submit-btn",
    submitBtn2: "Find-a-club-find-submit-btn"
  }
};

export default FindClub;

