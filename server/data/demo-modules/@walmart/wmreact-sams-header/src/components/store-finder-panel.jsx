import React, { PropTypes} from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Separator from "@walmart/wmreact-containers/lib/components/separator";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import classNames from "classnames";

class StoreFinderPanel extends React.Component {
  constructor(props) {
    super(props);
    this.tempoZone = "club_locator_zone";
  }

  renderCurrentClub() {
    const {
      preferredStores
    } = this.props;

    const preferredStore = preferredStores[0];

    return (
      <div className="myclub-current">
        <div className="myclub-title">
          {preferredStore.displayName}
        </div>
        <div className="myclub-style">
          {preferredStore.operationalHours.hours}
        </div>
        <br/>
        <div className="myclub-style">
          {preferredStore.phone}
          <br/> {preferredStore.address.address1}
          <br/> {classNames(
              preferredStore.address.city, ", ", preferredStore.address.state
              , " ", preferredStore.address.postalCode
            )}
        </div>
        <div className="myclub-footer" >
          <span>
            <Link
              className="myclub-footer-link"
              href={classNames("/club/info/", preferredStore.id)}>
              Club info
            </Link>
          </span>
          &nbsp; | &nbsp;
          <span>
            <Link
              className="myclub-footer-link"
              href={classNames("/club/directions/", preferredStore.id)}>
              Get directions
            </Link>
          </span>
        </div>
      </div>
    );
  }

  renderNearbyClubsTitle(postalCode) {
    return (
      <div className="Grid nearby-club-title">
        <span className="Grid-col u-size-1-3 club-near-zip">
          Club near {postalCode}
        </span>
        <span className="Grid-col u-size-1-3"></span>
        <span className="Grid-col u-size-1-3">
          <Link className="find-other-clubs" href="#">
            Find other clubs
          </Link>
        </span>
      </div>
    );
  }

  renderNearbyClubs(nearbyStores, postalCode) {
    return (
      <div className="nearby-clubs">
        {this.renderNearbyClubsTitle(postalCode)}
        {nearbyStores.map((nearbyClub) => {
          return (
            <div className="nearby-club-line-item">
              <Separator/>
              <div className="Grid">
                <div>
                  <span className="Grid-col u-size-1-2 nearby_club_title_ele_left">
                    {nearbyClub.displayName}
                  </span>
                  <span className="Grid-col u-size-1-6"></span>
                  <span className="Grid-col u-size-2-6 nearby_ele_right">
                    <Link href="#">
                      <Icon name="angle-right" size={1}/>
                    </Link>
                  </span>
                </div>
                <div>
                  <span className="Grid-col u-size-1-2 nearby_ele_left">
                    {nearbyClub.address.address1}
                  </span>
                  <span className="Grid-col u-size-1-6"></span>
                  <span className="Grid-col u-size-2-6 nearby_ele_right">
                    {nearbyClub.displayDistance}
                  </span>
                </div>
                <div>
                  <span className="Grid-col u-size-1-2 nearby_ele_left">
                    {classNames(nearbyClub.address.city, ", "
                      , nearbyClub.address.state, " "
                      , nearbyClub.address.postalCode
                    )}
                  </span>
                  <span className="Grid-col u-size-1-6"></span>
                  <span className="Grid-col u-size-2-6">
                    <Link
                      className="make_your_club_ele_right"
                      href={classNames("/club/makeYourClub/", nearbyClub.id)}>
                      Make this your club
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  renderFindOtherClubs() {
    return (
      <div>
        <Button
          inverse={true}
          className="find-other-clubs-without-nearby-list"
          automationId={this.props.automation.findOtherClubsBtn}
          tealeafId={this.props.tealeaf.findOtherClubsBtn}>
          Find other clubs
        </Button>
      </div>
    );
  }

  render() {
    const {
      preferredStores,
      nearbyStores
    } = this.props;

    const preferredStore = preferredStores[0];
    return (
      <div className="store-finder-panel">
        <div className="yourclub-label">Your Club</div>
        <Separator/>
        {this.renderCurrentClub()}
        <br/>

          { nearbyStores && nearbyStores.length > 0
            ? this.renderNearbyClubs(nearbyStores, preferredStore.address.postalCode)
            : this.renderFindOtherClubs()}
      </div>
    );
  }
}

StoreFinderPanel.propTypes = {
  type: PropTypes.string,
  moduleId: PropTypes.string,
  configs: PropTypes.shape({options: PropTypes.array.isRequired}),
  preferredStores: PropTypes.shape({
    displayName: PropTypes.string,
    timing: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string
  }),

  nearbyStores: PropTypes.array,
  //Automation
  automation: PropTypes.shape({
    findOtherClubsBtn: PropTypes.string
  }),
  //Releaf
  tealeaf: PropTypes.shape({
    findOtherClubsBtn: PropTypes.string
  })
};

StoreFinderPanel.defaultProps = {
  automation: {
    findOtherClubsBtn: "find-other-clubs-btn"
  },
  tealeaf: {
    findOtherClubsBtn: "find-other-clubs-btn"
  }
};

export default StoreFinderPanel;
