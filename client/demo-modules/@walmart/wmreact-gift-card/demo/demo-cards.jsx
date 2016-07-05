import React from "react";
import GiftCards from "../src/components/gift-cards";
export default class extends React.Component {
  constructor() {
    super();
    this.state = {showAddForm: false};
  }

  render() {
    return (<GiftCards {...this.props}
      onRequestAdd={(b) => this.setState({showAddForm: b})}
      showAddForm={this.state.showAddForm}/>);
  }
}
