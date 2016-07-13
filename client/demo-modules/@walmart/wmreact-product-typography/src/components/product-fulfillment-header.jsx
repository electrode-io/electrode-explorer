import React from "react";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";


/**
 Header for the ProductFulfillment panel.
 ```jsx
 <ProductFulfillmentHeader
 title="Shipping options from "
 icon={"truck"}
 seller={"Walmart"}
 />
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductFulfillment}
 @component ProductFulfillment
 @playground
 ProductFulfillment
 ```
 <div>
 <ProductFulfillmentHeader
 title="Shipping options from "
 icon={"truck"}
 seller={"Walmart"}
 />
 </div>
 ```
 */
export default (props) => (
  <div className={classNames(props.className, null)}>
    <Icon name={props.icon} size={1}/>
    <span className="font-bold xxs-margin-left">{props.title} {props.seller}</span>
  </div>
);
