import React, {PropTypes, Component} from "react";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import StoreFinderPanel from "./store-finder-panel";
import ClubResults from "./club-results";
import renderClubLocatorPopUp from "./club-locator-popup";
import FindAClub from "./find-a-club";
const flyoutClubList = {
  maxHeight: 512
};

class ClubLocator extends Component {
  constructor(props) {
    super(props);
    this.onStoreFinderActive = props.onStoreFinderActive.bind(this);
    this.state = {
      showClubLocator: true,
      showFlyout: false,
      showFindAClub: false,
      showClubPopup: false,
      showClubList: false
    };
    this.onStoreFinderActive({});
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

  handleYourClubClick(e) {
    e.preventDefault();
    this.setState({
      showClubPopup: true,
      showFindAClub: false,
      showClubList: false
    });
  }

  handleClosePopup(e) {
    e.preventDefault();
    this.setState({
      showClubPopup: false
    });
  }

  handleCloseFindAClub(e) {
    e.preventDefault();
    this.setState({
      showFindAClub: false
    });
  }

  handleOpenClubList(e) {
    e.preventDefault();
    this.setState({
      showClubList: true
    });
  }

  handleShowClubList(e) {
    e.preventDefault();
    this.setState({
      showFindAClub: false,
      showClubList: true
    });
  }

  _renderClubListFlyout(nearbyStores, preferredStores) {
    return (
      <div className="fly">
        <Flyout
          className="header-GlobalEyebrowNav-flyout text-left"
          style={flyoutClubList}
          direction="bottom"
          size="extrawide"
          key="123"
          hover
          active>
            <StoreFinderPanel
              preferredStores={preferredStores}
              nearbyStores={nearbyStores}
              location="San Bruno"/>
        </Flyout>
      </div>
    );
  }

  _renderYourClubLocation() {
    let nearbyStores = [];
    let preferredStores = [];

    const { stores } = this.props;

    if (stores) {
      nearbyStores = stores.nearbyStores;
      preferredStores = stores.preferredStores;
    }

    let clubLocations = null;
    if (preferredStores) {
      clubLocations = `${preferredStores[0].address.city.trim()},
       ${preferredStores[0].address.state.trim()}`;
    } else if (nearbyStores) {
      clubLocations = `${nearbyStores[0].address.city.trim()},
       ${nearbyStores[0].address.state.trim()}`;
    }

    return (
      <div>
        <span className="locator-title">
          { clubLocations }
        </span>
      </div>
    );
  }

  showFindAClubFn(e) {
    e.preventDefault();
    this.setState({
      showFindAClub: true,
      showClubPopup: false
    });
  }

  handleCloseClubList(e) {
    e.preventDefault();
    this.setState({
      showClubList: false
    });
  }

  _renderClubList() {
    const {
      stores: {
        nearbyStores,
        singleLineAddr
      }
    } = this.props;

    return (
      <div>
        <ClubResults
          nearbyStores={nearbyStores}
          showClubList={this.state.showClubList}
          singleLineAddr={singleLineAddr}
          close={this.handleCloseClubList.bind(this)}
        />
      </div>
    );
  }
  _renderShowClubPopup(nearbyStores) {
    const nearestStore = nearbyStores[0];
    return (
      <div>
        {renderClubLocatorPopUp({
          onShowClubClick: this.showFindAClubFn.bind(this),
          close: this.handleClosePopup.bind(this),
          clubName: nearestStore.displayName,
          clubAddress: nearestStore.address.address1
        })}
      </div>
    );
  }

  _renderClubLocator() {
    return (
      <div>
        <a href="#" onClick={this.handleYourClubClick.bind(this)}>
          <span className="locator-title">
            {"Your club"}
          </span>
        </a>
        {this._renderYourClubLocation()}
      </div>
    );
  }

  _renderFindAClub(nearbyStores) {
    return (
      <div>
        <FindAClub
          nearbyStores={nearbyStores}
          onStoreFinderActive={this.onStoreFinderActive}
          close={this.handleCloseFindAClub.bind(this)}
          openClubList={this.handleOpenClubList.bind(this)}
        />
      </div>
    );
  }

  showFlyoutState() {
    if (this.props.isUserLoggedIn) {
      this.setState({showFlyout: true});
    }
  }

  render() {
    let nearbyStores = [];
    let preferredStores = null;

    const { stores } = this.props;

    if (stores) {
      nearbyStores = stores.nearbyStores;
      preferredStores = stores.preferredStores;
    }

    return (
      <div className="sams-club-locator" onMouseOver={this.showFlyoutState.bind(this)}>
        {this.state.showClubLocator && this._renderClubLocator()}
        {this.state.showClubPopup && this._renderShowClubPopup(preferredStores || nearbyStores)}
        {this.state.showFindAClub && this._renderFindAClub(nearbyStores)}
        {this.state.showClubList && this._renderClubList()}
        {this.state.showFlyout
          ? this._renderClubListFlyout(nearbyStores, preferredStores)
          : null}
      </div>
    );
  }
}
ClubLocator.propTypes = {
  type: PropTypes.string,
  moduleId: PropTypes.string,
  submitting: PropTypes.bool,
  configs: PropTypes.shape({options: PropTypes.array.isRequired}),
  //Releaf
  tealeaf: PropTypes.shape({
    findOtherClubsBtn: PropTypes.string
  }),
  isUserLoggedIn: PropTypes.bool,
  preferedClub: PropTypes.object,
  nearbyClub: PropTypes.object,
  onStoreFinderActive: PropTypes.func,
  stores: PropTypes.object
};
export const formatPosition = ({coords}) => {
  if (coords) {
    const {latitude, longitude} = coords;
    if (latitude && longitude) {
      return {latitude, longitude};
    }
  }
};

export default ClubLocator;
