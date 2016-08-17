import React from "react";
import { fetchJSON } from "@walmart/electrode-fetch";
import ExecutionEnvironment from "exenv";
import Typeahead from "@walmart/wmreact-typeahead";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      host: ExecutionEnvironment.canUseDOM ?
        window.location.origin :
        "http://localhost:3000"
    };

    this._fetchSuggestions = this._fetchSuggestions.bind(this);
  }

  _fetchSuggestions(part) {
    if (part.length < 2) {
      return;
    }

    const { host } = this.state;

    fetchJSON(`${host}/explorer/api/search/partial/${part}`)
      .then((results) => {
        this.setState({list: results});
      }).catch((err) => {
        console.error(err);
      });
  }

  _performSearch(term) {
    if (ExecutionEnvironment.canUseDOM) {
      window.location = "/explorer/search/" + term;
    }
  }

  render() {
    return (
      <div className="explorer-search-bar">
        <Typeahead
          list={this.state.list}
          placeholderText="Search"
          onChange={this._fetchSuggestions}
          onSelectOption={this._performSearch}
          isRequiredField={false}/>
      </div>
    );
  }

}

