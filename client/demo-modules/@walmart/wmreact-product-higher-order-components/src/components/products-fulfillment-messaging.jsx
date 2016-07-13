import React, {PropTypes} from "react";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";

/**
Basic component for Buying Options Table messaging
Ex: Pick up options messaging
@examples
```jsx
<div>
 <ProductsFulfillmentMessaging
  messaging={Text/html}
  iconType="truck"
  launchModalText="Shipping Pass"
  onClickLaunchModal={() => {console.log("Some click func")}}
 />
</div>
*/

const ProductsFulfillmentMessaging = (props) => {
  return (
    <div className="arrange arrange-spaced arrange-middle prod-fulfillment">
      <Icon className="align-left arrange-fit" name={props.iconType} size={1}/>
      <span className="prod-fulfillment-messaging arrange-fill">
        <span className="prod-fulfillment-messaging-text"
          dangerouslySetInnerHTML={{__html: props.messaging}}></span>
        <Button className="launch-modal hide-content-max-m"
          onClick={props.onClickLaunchModal}
          fakelink>{props.launchModalText}</Button>
      </span>
      <i className="prod-fulfillment-messaging-view-details
        align-right arrange-fit arrange-middle paginator-hairline-btn
        paginator-hairline-btn-next hide-content-m"
        onClick={props.onClickLaunchModal}></i>
    </div>
  );
};

ProductsFulfillmentMessaging.propTypes = {
  /**
  * Children to render in container
  */
  iconType: PropTypes.string,
  messaging: PropTypes.string,
  launchModalText: PropTypes.string,
  showMessagingSection: PropTypes.bool,
  onClickLaunchModal: PropTypes.func
};

ProductsFulfillmentMessaging.defaultProps = {
  iconType: "",
  messaging: "",
  launchModalText: "",
  onClickLaunchModal: () => {/*no-op*/}
};

export default ProductsFulfillmentMessaging;
