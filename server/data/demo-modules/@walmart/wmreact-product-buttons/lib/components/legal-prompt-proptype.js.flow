import { PropTypes } from "react";
import AddToCartPropType from "./add-to-cart-proptype";

const LegalPromptProptype = {
  /**
  Determines this component's state.
  */
  legalPromptStatus:
    PropTypes.oneOf(["ACCEPTED", "PROMPT", "DECLINE", "NOT_YET_ACCEPTED", "MORE_INFO"]),
  /**
  Callback for when add to cart button is clicked
  */
  onClick: PropTypes.func,
  /**
  Callback when more info is clicked
  */
  onMoreInfoClicked: PropTypes.func,
  /**
  Callback when more info modal is closed
  */
  onMoreInfoClosed: PropTypes.func,
  /**
  Callback when legal prompt is accpeted
  */
  onAcceptClicked: PropTypes.func,
  /**
  Callback when legal prompt is declined
  */
  onDeclineClicked: PropTypes.func,
  /**
  Callback when legal prompt flyout is closed
  */
  onFlyoutClosed: PropTypes.func,
  /**
  props for add to cart
  */
  addToCartProps: PropTypes.shape(AddToCartPropType).isRequired
};

export default LegalPromptProptype;
