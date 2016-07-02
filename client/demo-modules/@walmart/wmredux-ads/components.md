# Ads (@walmart/wmredux-ads)

A MIDAS ad react component

## Ad Component

Ad place holder for Ad component. 

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *id* | string | A string that prefixes with `sponsored-container-` | Required

### import

```jsx
import {AdsContainer} from "@walmart/wmredux-ads";
```

<hr/>



## Ad Action

A redux action that that triggers ads rendering. 

### import

```jsx
import { showAdsAction } from "@walmart/wmredux-ads";

```
## Prerequisite 

### Head
```
<script async="" src="//CCM/PATH_TO/midas-display.js"></script>
<script async="" src="//www.googletagservices.com/tag/js/gpt.js></script>
```

### Body
```
<script async="" src="//CCM/PATH_TO/midas.js"></script>
<script async="" src="//www.google.com/adsense/search/ads.js"></script>
```

## Usage Example 

```jsx
import {Ads, showAdsAction} from "@walmart/wmredux-ads";
import { connect } from "react-redux";
import { canUseDOM } from "exenv";

class ProductCollection extends React.Component {
  componentDidMount(): void {
    if(canUseDOM) {
        let self = this;       
        setTimeout(function(){
          const midasContext = {
              "query": "Home Styles American Craftsman Collection",
              "itemId": "47206334",
              "price": 112.94,
              "online": false,
              "freeShipping": false,
              "inStore": false,
              "preorder": false,
              "pageType": "item",
              "subType": "collection",
              "adUid": "d24291ee-25c3-4710-ac58-f9982965548e"
          };
          const midasConfig = {};
          self.props.showAds({midasContext, midasConfig});
        },1);
    }
  }
  
  render () {
    return 
    <div>
            <Ads id="sponsored-container-right-1"/>
            <Ads id="sponsored-container-right-2"/>
            <Ads id="sponsored-container-right-3"/>
            <Ads id="sponsored-container-bottom-1" />
            <Ads id="sponsored-container-bottom-2" />
            <Ads id="sponsored-container-bottom-3" />
            <Ads id="sponsored-container-bottom-4" />
    </div>
  }
}
const mapDispatchToProps = (dispatch) {
  showAds: (data) => {
    dispatch(showAdsAction(data));
  },
}
export default  connect(()=>({}), mapDispatchToProps)(ProductCollection);

```
