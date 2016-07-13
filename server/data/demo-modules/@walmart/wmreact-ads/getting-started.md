Getting Started With Midas Ads
=========================

### Step 1: Add package.json dependency then run `npm install`
NOTE: you need `electrode-react-webapp` versions >= `1.3.3`

package.json:
```
{
  "dependencies": {
    "@walmart/electrode-react-webapp":"^1.3.3",
    "@walmart/wmreact-ads": "^5.1.0"
  }
}
```

### Step 2: include AdsReducer to your redux store
In your root reducer file include the follow reducer 
```
import { AdsReducers as ads} from "@walmart/wmreact-ads";
// ...
export const rootReducer = combineReducers({
  //  ...
  ads
});
```

### Step 3: Update config/default.json to include the midas scripts and load midas ccm
Download the config/load-midas-display.js and config/load-midas.js files from here 
* https://gecgithub01.walmart.com/R-search-category/category/blob/master/config/load-midas.js
* https://gecgithub01.walmart.com/R-search-category/category/blob/master/config/load-midas-display.js


config/default.json
```
{
  "services": {
    "providers": {
      "@walmart/electrode-ccm-client": {
        "options": {
          "artifactId": "collection-app",
          "artifactVersion": "1.6.2",
          "cloudEnvironment": "",
          "cloud": "",
          "cloudDc": "",
          "environment": "staging",
          "node": ""
        }
      },
      "@walmart/electrode-quimby-client": {
      }
    }
  },
  "ccm": {
    "autoLoad": true,
    "interval": 120,
    "sources": [
      "defaults",
      "snapshot",
      "service"
    ],
    "uiFilter": {
      ...
      "$..midasConfig": [
        ".*"
      ],
      ...
    }
    "keys": {
      "data": {
      ...
        "midasConfig": {
          "scopeTemplate": "/{environment}/{cloudEnvironment}",
          "serviceName": "wmreact-ads",
          "+configNames": [
            "javascript",
            "status",
            "features"
          ]
        }
      }
    }
  },
  "plugins": {
    "@walmart/electrode-react-webapp": {
      "options": {
        "unbundledJS": {
          "enterHead": [
            {
              "src": "//www.googletagservices.com/tag/js/gpt.js"
            },
            "{{readFile:config/load-midas-display.js}}"
          ],
          "preBundle": [
            "{{readFile:config/load-midas.js}}",
            {
              "src": "//www.google.com/adsense/search/ads.js"
            }
          ]
        }
      }
    }
  }
}
```

### Step 4: Initialze showAds when the ads scripts have been loaded
Example for collections team

client/components/product-collection/product-collection.jsx:
```
import {Ads, showAdsAction} from "@walmart/wmreact-ads";
# We are using canUseDom to ensure that the code only executes on the client
# Never on the server
import { canUseDOM } from "exenv";
export class ProductCollection extends React.Component {
  _showAds(): void {
      const midasContext = {
          "todo": "you team needs to populate the midas context here",
      };
      const midasConfig = {
          IS_WPA_SERVICE_ENABLED: false,
          IS_WPA_SERVICE_CALLED: false,
      };
      this.props.showAds({midasContext, midasConfig});
  }
  componentDidMount(): void {
    if(canUseDOM) {
      this._showAds();
    }
  }
  render(): ReactElement {
    return(<div> 
    {/* 
      Refer to https://gecgithub01.walmart.com/react/wmreact-ads/blob/master/components.md 
      for more details about the ads component
      isMobile=true will force load the scripts for you, so you dont have to include it in your page.
    */}
    <Ads id="sponsored-container-top" isMobile={true} />
    <Ads id="sponsored-container-right-1"/>
    <Ads id="sponsored-container-bottom-1" />
    </div>)
  }
}
const mapDispatchToProps = (dispatch) {
  // ...
  showAds: (data) => {
    dispatch(showAdsAction(data));
  }
  // ...
}
export default  connect(()=>({}), mapDispatchToProps)(ProductCollection);
```

### Step 5: Import Ads stylesheet in your stylesheet

Core Styles:
```
@require "~@walmart/wmreact-ads/src/styles/ads";
```

WPA Carousel (Featured/Sponsored Products):
```
@require "~@walmart/wmreact-ads/src/styles/wpa-carousel";
```

Page Type Specific Styling (If Required and Available):
```
@require "~@walmart/wmreact-ads/src/styles/<pageType>-page"; // where pageType can be search/topic/item/vod/category
```







