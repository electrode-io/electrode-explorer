import React, {Component, PropTypes} from "react";

import {Layout} from "@walmart/wmreact-layout";
import {Options} from "@walmart/wmreact-forms";
import {Flyout} from "@walmart/wmreact-containers";
import {Button} from "@walmart/wmreact-interactive";

/**
 The brand component flyout.
 For example this is how we use this component.
 ```jsx
 <Brand
 onChange={(ev)=>{console.log(ev)}}
 choices={[
   {
      "name":"Samsung",
      "url":"cat_id=0&prg=desktop&facet=brand:Samsung",
      "itemCount":4862,
      "expandOnLoad":true
   },
   {
      "name":"Apple",
      "url":"cat_id=0&prg=desktop&facet=brand:Apple",
      "itemCount":494,
      "expandOnLoad":true,
      "isSelected": true
   },
   {
      "name":"Better Homes and Gardens",
      "url":"cat_id=0&prg=desktop&facet=brand:Better%20Homes%20and%20Gardens",
      "itemCount":2962,
      "expandOnLoad":true
   }
  ]}/>
 ```
 @import {Brand}
 @component Brand
 @playground
 Search-Util-Bar-Brand
 ```
 <Brand
 onChange={(ev)=>{console.log(ev)}}
 choices={[
   {
      "name":"Samsung",
      "url":"cat_id=0&prg=desktop&facet=brand:Samsung",
      "itemCount":4862,
      "expandOnLoad":true
   },
   {
      "name":"Apple",
      "url":"cat_id=0&prg=desktop&facet=brand:Apple",
      "itemCount":494,
      "expandOnLoad":true,
      "isSelected": true
   },
   {
      "name":"Better Homes and Gardens",
      "url":"cat_id=0&prg=desktop&facet=brand:Better%20Homes%20and%20Gardens",
      "itemCount":2962,
      "expandOnLoad":true
   }
  ]}/>
 ```
 */

export default class Brand extends Component {
  buildChoices() {
    const {choices} = this.props;
    const _choices = [];

    for (let i = 0, l = choices.length; i < l; i++) {
      if (choices[i].expandOnLoad) {
        _choices.push({
          checked: choices[i].isSelected || false,
          label: choices[i].name,
          url: choices[i].url,
          idName: choices[i].idName
        });
      }
    }

    return _choices;
  }

  _onChange(ev, i) {
    const {onChange} = this.props;
    onChange(ev[i], i, ev);
  }

  render() {
    const _choices = this.buildChoices();

    return (
      <Flyout
        trigger={<Button dropdown={true}>Top brands</Button>}
        closeOnClickOut={true}
        direction="bottom"
        active={false}
        size="narrow">
        <Layout padded={true} className="desktop-bar-brand">
          <Options
            choices={_choices}
            onChange={this._onChange.bind(this)}
            closeOnClickOut={true}
          />
        </Layout>
      </Flyout>
    );
  }
}

Brand.displayName = "SearchUtilBarBrand";

Brand.propTypes = {
  choices: PropTypes.array,
  onChange: PropTypes.func
};

Brand.defaultProps = {
  choices: []
};
