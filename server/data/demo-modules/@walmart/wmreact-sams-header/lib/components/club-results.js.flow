import React from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import { Options } from "@walmart/wmreact-forms";

class ClubResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: "cr-filter-panel",
                  icon: "cr-arrow-down-icon"};
  }

  _toggleServices(evt) {
    evt.preventDefault();
    this.setState({
      show: this.state.show === "cr-filter-panel" ? "cr-filter-panel" +
        " active" : "cr-filter-panel",
      icon: this.state.icon === "cr-arrow-down-icon" ? "cr-arrow-down-icon" +
        " flip" : "cr-arrow-down-icon"
    });
  }

  _renderfilterOptions() {
    const {
      filterOptions,
      btnCancel,
      btnApply,
      onApplyFilterServices,
      automation,
      onSelectFilterServices,
      tealeaf
    } = this.props;

    const optionService = [];

    filterOptions.items.map((option) => {

      optionService.push({label: option, checked: false});

      return optionService;
    });

    return (
      <section className="cr-filter-section">
      <a className="refine-service-link" href="#" onClick={this._toggleServices.bind(this)}>
        Refine by services <Icon name="caret-down" size={1}/>
      </a>
      <div className={this.state.show}>
        <div className="cr-filter-options">
          <Options
            choices={optionService}
          />
        </div>
        <div className="cr-option-buttons">
          <Button
            onClick={onSelectFilterServices}
            className="cr-cancel-button"
            automationId={automation.cancelBtn}
            tealeafId={tealeaf.cancelBtn}>
            {btnCancel}
          </Button>
          <Button
            onClick={onApplyFilterServices}
            className="cr-apply-button"
            automationId={automation.applyBtn}
            tealeafId={tealeaf.applyBtn}>
            {btnApply}
          </Button>
        </div>
      </div>
      </section>
    );
  }


handleClosePopup(e) {
  e.preventDefault();
  this.setState({showClubResult: false});
}

_renderHeader() {
  const {
    headerInfo = {},
    onChangeLocation,
    titleText,
    automation,
    tealeaf,
    nearbyStores,
    close
  } = this.props;
  return (
    <div className="cr-header">
    <h2>{titleText}</h2>
    <a href="#" onClick={close} className="cr-icon-close">X</a>
    <div className="cr-header-section">
      <h3>{nearbyStores.length} clubs near</h3>
      <label>{headerInfo.clubCity}</label>
      <a
        href="#"
        className="cr-change-link"
        onClick={onChangeLocation}
        automationId={automation.changeLocationLink}
        tealeafId={tealeaf.changeLocationLink}>
        {headerInfo.changeLocation}
      </a>
    </div>
    </div>
  );
}

_renderYourClubIcon() {
  return (
    <div>
      <Icon name="ok" size={1}/>
      <span className="cr-your-club">Your club</span>
    </div>
  );
}

_renderMakeThisYourClubLink() {
  return <a href="#">Make this your club</a>;
}

_renderClubInfo(nearbyStores, singleLineAddr) {
  const noOfClubs = nearbyStores.length;

  const stores = nearbyStores.map(function (club, i) {
    return (
      <section key={"cr-club-info-" + i} className="cr-club-info">
        <div className="cr-location">
          <label
            className="cr-club-name">
            {club.displayName}
          </label>
          <label className="cr-club-address">
            {`${club.address.address1.trim()} ${club.address.city.trim()},
           ${club.address.state.trim()} ${club.address.postalCode.trim()}`}
          </label>
        </div>&nbsp;
        <div className="cr-distance">
          <Icon name="angle-right" size={1}/>
          <label>{club.distance} miles</label>
          {club.clubChoice}
          { i === 0 ? this._renderYourClubIcon() : this._renderMakeThisYourClubLink() }
        </div>
        <hr className="separate-line"/>
      </section>
    );
  }, this);

  const filterOptions = this._renderfilterOptions();

  return (
    <div className = "club-results">
      <div className="cr-header">
        <h2>Club Results</h2>
        <span onClick={this.props.close} className="cr-icon-close">X</span>
        <div className="cr-header-section">
          <h3>{noOfClubs} clubs near {singleLineAddr}</h3>
        </div>
        <hr className="separate-line"/>
        { filterOptions }
        <hr className="separate-line"/>
        {stores}
      </div>
    </div>
  );
}

  render() {
    const {
      nearbyStores = [],
      singleLineAddr
    } = this.props;

    let results = null;
    if (nearbyStores.length) {
      results = this._renderClubInfo(nearbyStores, singleLineAddr);
    }

    return (
      <div>
        {results}
      </div>
    );

  }

  renderClubList() {
    return (
      <div>
        <section className="club-results">
        {this._renderHeader()}
        <hr className="separate-line"/>
        {this._renderfilterOptions()}
        <hr className="separate-line"/>
        {this._renderClubInfo()}
        </section>
      </div>
    );
  }
}

ClubResults.propTypes = {
  nbrOfStores: React.PropTypes.number,
  headerInfo: React.PropTypes.shape({
    clubCity: React.PropTypes.string,
    changeLocation: React.PropTypes.string
  }).isRequired,
  onSelectFilterServices: React.PropTypes.func,
  onCancelFilterServices: React.PropTypes.func,
  onApplyFilterServices: React.PropTypes.func,
  onSelectClubChoice: React.PropTypes.func,
  onChangeLocation: React.PropTypes.func,
  filterOptions: React.PropTypes.object,
  stores: React.PropTypes.arrayOf(React.PropTypes.shape({
    displayName: React.PropTypes.string,
    address: React.PropTypes.shape({
      postalCode: React.PropTypes.string,
      address1: React.PropTypes.string,
      city: React.PropTypes.string,
      state: React.PropTypes.string
    }).isRequired,
    distance: React.PropTypes.string,
    clubChoice: React.PropTypes.node
  })).isRequired,
  btnCancel: React.PropTypes.string,
  btnApply: React.PropTypes.string,
  titleText: React.PropTypes.string,
  //Automation id's
  automation: React.PropTypes.shape({
    changeLocationLink: React.PropTypes.string,
    cancelBtn: React.PropTypes.string,
    applyBtn: React.PropTypes.string
  }),
  //Tealeaf id's
  tealeaf: React.PropTypes.shape({
    changeLocationLink: React.PropTypes.string,
    cancelBtn: React.PropTypes.string,
    applyBtn: React.PropTypes.string
  }),
  nearbyStores: React.PropTypes.array,
  singleLineAddr: React.PropTypes.string,
  close: React.PropTypes.func
};

ClubResults.defaultProps = {
  titleText: "Club results",
  nbrOfStores: 20,
  headerInfo: {
    clubCity: "San Francisco, CA",
    changeLocation: "Change location"
  },
  filterOptions: ({items: ["Pharmacy", "Business Center", "Cafe",
    "Tires & Batteries", "Mobile Wireless", "Liquor", "Bakery", "One Hour Photo",
    "Optical", "Floral", "Gas", "Hearing Center", "Meat"]}),
  btnCancel: "Cancel",
  btnApply: "Apply",
  stores: [],
  automation: {
    changeLocationLink: "cr-change-location-link",
    cancelBtn: "cr-cancel-button",
    applyBtn: "cr-apply-button"
  },
  tealeaf: {
    changeLocationLink: "cr-change-location-link",
    cancelBtn: "cr-cancel-button",
    applyBtn: "cr-apply-button"
  }
};

export default ClubResults;
