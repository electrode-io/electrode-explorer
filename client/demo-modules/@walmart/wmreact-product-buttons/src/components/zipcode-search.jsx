import React, {Component, PropTypes} from "react";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Field from "@walmart/wmreact-stateless-fields/lib/components/field";
import classNames from "classnames";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.zipCode !== this.props.zipCode) {
      this.setState({
        zipCode: nextProps.zipCode
      });
    }
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
    const {
      className,
      searchButtonLabel,
      layoutSizes,
      spinner
    } = this.props;
    return (
      <form className={className} onSubmit={this.onSubmit}>
        <div className="Grid Grid--gutters prod-zipCodeField">
          <div className={classNames("Grid-col", `u-size-${layoutSizes[0]}-12-xs`)}>
            <Field
              shouldDisplayError={() => (!this.isValidZip(zipCode))}
              placeholder="Enter ZIP code"
              value={zipCode}
              shouldDisplayValid={() => this.isValidZip(zipCode)}
              error="Please enter a valid zip code."
              onChange={(event) => this.setState({zipCode: event.target.value})}
            />
          </div>
          <div className={classNames("Grid-col", `u-size-${layoutSizes[1]}-12-xs`)}>
            <Button
              className="prod-zipCodeField-btn"
              block
              spinner={spinner}
              onClick={this.onSubmit}>
              {searchButtonLabel}
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

ZipCodeSearch.displayName = "ZipCodeSearch";

ZipCodeSearch.propTypes = {
  /**
   Current customer zipcode.
   */
  zipCode: PropTypes.string,
  /**
   class styling.
   */
  className: PropTypes.string,
  /**
   The callback handler for updating the customer zip.
   */
  onLocationUpdate: PropTypes.func.isRequired,
  /**
   The column sizes for zipcode text box and search button.
   */
  layoutSizes: PropTypes.array,
  /**
   Search button label.
  */
  searchButtonLabel: PropTypes.string,
  /**
   Displays a loading spinner on search button when set to true.
  */
  spinner: PropTypes.bool
};

ZipCodeSearch.defaultProps = {
  zipCode: "",
  className: "enter-zipcode",
  onLocationUpdate: () => {},
  layoutSizes: [8, 4],
  searchButtonLabel: "Find",
  spinner: false
};

export default ZipCodeSearch;
