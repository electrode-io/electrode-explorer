import React, {Component, PropTypes} from "react";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Field from "@walmart/wmreact-stateless-fields/lib/components/field";

/**
 The ZipCode search component.
 For example this is how we use this component.
 ```jsx
 <ZipCodeSearch
  zipCode="83713"
  className="prod-zipcode-search"
  onLocationUpdate={(event)=>{console.log(event)}}
 />
 ```
 */

class ZipCodeSearch extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {zipCode: props.zipCode};
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.isValidZip(this.state.zipCode)) {
      if (this.props.onLocationUpdate) {
        this.props.onLocationUpdate(this.state.zipCode);
      }
    }
  }

  isValidZip(val) {
    return (/(^\d{5}(\-\d{4})?$)/).test(val);
  }

  render() {

    const {zipCode} = this.state;
    return (
      <form className={this.props.className} onSubmit={this.onSubmit}>
        <Field
          shouldDisplayError={() => (!this.isValidZip(zipCode))}
          placeholder="Enter ZIP code"
          defaultValue={zipCode}
          shouldDisplayValid={() => this.isValidZip(zipCode)}
          error="Please enter a valid zip code."
          onChange={(event) => this.setState({zipCode: event.target.value})}
        />
        <Button onClick={this.onSubmit}>Find</Button>
      </form>
    );
  }
}

ZipCodeSearch.displayName = "ZipCodeSearch";

ZipCodeSearch.propTypes = {
  /**
   Current customer zipcode
   */
  zipCode: PropTypes.string,
  /**
   class styling
   */
  className: PropTypes.string,
  /**
   The callback handler for updating the customer zip
   */
  onLocationUpdate: PropTypes.func.isRequired
};

ZipCodeSearch.defaultProps = {
  zipCode: "",
  className: "enter-zipcode",
  onLocationUpdate: () => {}
};

export default ZipCodeSearch;
