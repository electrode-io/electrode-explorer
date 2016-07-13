import React from "react";

import ZipCode from "./zip-code";
import StoreList from "./store-list";

/**
Store finder component.
@examples
```jsx
<StoreFinder />
```
@component StoreFinder
@import StoreFinder
@playground
StoreFinder
```
<StoreFinder />
```
*/
module.exports = React.createClass({
  displayName: "StoreFinder",

  propTypes: {
    /**
    Called when the store is selected
    */
    onSelect: React.PropTypes.func
  },

  render() {
    return (
      <div>
        <ZipCode/>
        <StoreList onClick={this.props.onSelect}/>
      </div>
    );
  }
});
