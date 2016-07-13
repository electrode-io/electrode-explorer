import React, {PropTypes} from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import Separator from "@walmart/wmreact-containers/lib/components/separator";
import Stack from "@walmart/wmreact-layout/lib/components/stack";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import classNames from "classnames";

const GlobalAccountFlyout = (props: Object) => {
  const {
    moduleData: {
      configs: {
        sectionOne,
        sectionTwo,
        sectionThree,
        sectionFour
      }
    },
    customerName
  } = props;

  const _getClassNames = (className: string, dropdown: boolean) => {
    return classNames("header-GlobalAccountFlyout-link", className, {
      "dropdown-link": dropdown
    });
  };

  const _renderLink = (menu:Object, id: string, className: string) => {
    const {
      uid,
      title,
      linkText,
      clickThrough: { value }
    } = menu;
    return (
      <Link
        className={_getClassNames(className, false)}
        data-uid={uid}
        href={value}
        alt={title}
        key={uid}>
        {linkText}
      </Link>
    );
  };

  const _renderFlyoutTriggerButton = (
    linkText: string, infoLink: Object, infoLinkClass:String) => {
    return (
      <div>
        <Button
          className="header-GlobalAccountFlyout-flyout-link dropdown-link display-block"
          fakelink>
          {linkText}
        </Button>
        {_renderLink(infoLink, "customerInfo-link", infoLinkClass)}
      </div>
    );
  };

  const _renderSignInButton = () => {
    return (
      <div>
        <Layout small={2} medium={2} align="left">
           <Button mini={true} className="no-user-signin-button">Sign in</Button>
           <Stack className="not-a-member">
              <Stack.Fit>Not a member?</Stack.Fit>
              <Stack.Fit>
                <Link className="join-link"> Join now </Link>
              </Stack.Fit>
           </Stack>
        </Layout>
        <Separator/>
      </div>
    );
  };

  const _renderFlyoutLink = (linkDetails: Object, index: number, loggedIn:boolean) => {
    const linkId = `flyout-link-${index}`;
    const { menu, showIfLoggedOut, showIfLoggedIn } = linkDetails;
    const linkClass = "display-block";
    const shouldDisplay = (loggedIn && (showIfLoggedIn === "true") ||
                         !loggedIn && (showIfLoggedOut === "true")) ? true : false;

    if (shouldDisplay) {
      return (
        <li className="header-GlobalAccountFlyout-flyout-listItem font-normal" key={index}>
             {_renderLink(menu, linkId, linkClass)}
        </li>
      );
    } else {
      return [];
    }
  };

  const _renderFlyoutWithLink = (flyoutLink: Object, infoLink: Object, loggedIn: boolean) => {

    const infoLinkClass = "header-GlobalAccountFlyout-name display-block";
    const { linkText } = flyoutLink;

    return (
      <div>
        <Flyout className="header-GlobalAccountFlyout-flyout display-block"
          direction="bottom"
          size="fluid"
          hover
          trigger={_renderFlyoutTriggerButton(linkText, infoLink, infoLinkClass)}>

          {!loggedIn ? _renderSignInButton() : []}
          <ul className="header-GlobalAccountFlyout-flyout-list block-list no-margin">
            {sectionOne.map(
              (linkDetails, index) => _renderFlyoutLink(linkDetails, index, loggedIn))}
          </ul>

          <Separator/>
          <ul className="header-GlobalAccountFlyout-flyout-list block-list no-margin">
            {sectionTwo.map(
              (linkDetails, index) => _renderFlyoutLink(linkDetails, index, loggedIn))}
          </ul>

          <Separator/>
          <ul className="header-GlobalAccountFlyout-flyout-list block-list no-margin">
            {sectionThree.map(
              (linkDetails, index) => _renderFlyoutLink(linkDetails, index, loggedIn))}
          </ul>

          {loggedIn ? <Separator/> : []}
          <ul className="header-GlobalAccountFlyout-flyout-list block-list no-margin">
            {sectionFour.map(
              (linkDetails, index) => _renderFlyoutLink(linkDetails, index, loggedIn))}
          </ul>

        </Flyout>
      </div>
    );
  };

  const _renderCustomerStatus = () => {
    const accountUrl = "/account";
    const flyoutLink = {
      "linkText": "Your Account"
    };
    const customerInfoLink = {
      "clickThrough": { "value": accountUrl },
      "linkText": `Sign In`
    };

    if (customerName) {
      customerInfoLink.linkText = customerName;
      return _renderFlyoutWithLink(flyoutLink, customerInfoLink, true);
    } else {
      return _renderFlyoutWithLink(flyoutLink, customerInfoLink, false);
    }
  };

  return (
    <div className="header-GlobalAccountFlyout font-semibold text-right">
      {_renderCustomerStatus()}
    </div>
  );
};

GlobalAccountFlyout.displayName = "GlobalAccountFlyout";

GlobalAccountFlyout.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL and link text to use for the links.
  */
  moduleData: PropTypes.shape({
    configs: PropTypes.shape({
      sectionOne: PropTypes.array,
      sectionTwo: PropTypes.array,
      sectionThree: PropTypes.array,
      sectionFour: PropTypes.array
    }).isRequired
  }).isRequired,
  customerName: PropTypes.string
};

GlobalAccountFlyout.defaultProps = {
  moduleData: {
    configs: {
      sectionOne: [],
      sectionTwo: [],
      sectionThree: [],
      sectionFour: []
    }
  },
  customerName: ""
};

export default GlobalAccountFlyout;
