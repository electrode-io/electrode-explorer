import React from "react";
import ExecutionEnvironment from "exenv";
import Typeahead from "radon-typeahead";
import fetch from "isomorphic-fetch";

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

    return fetch(`${host}/api/search/partial/${part}`)
      .then((res) => {
        if (res.status >= 400) {
          throw res;
        }
        return res.json();
      })
      .then((results) => {
        this.setState({list: results});
      }).catch((err) => {
        console.error(err);
      });
  }

  _performSearch(term) {
    if (ExecutionEnvironment.canUseDOM) {
      window.location = "/search/" + term;
    }
  }

  render() {
    return (
      <div className="explorer-search-bar">
        <Typeahead
          list={this.state.list}
          listStyle={{
            position: "absolute",
            zIndex: 100,
            width: "99%",
            margin: "0 0 0 2px",
            background: "#fff",
            padding: "5px",
            boxShadow: "2px 2px 2px #555"
          }}
          inputComponent={
            <input autoComplete="off" className="search-input" placeholder="Search"/>
          }
          onChange={this._fetchSuggestions}
          onSelectOption={this._performSearch}
          isRequiredField={false}/>
      </div>
    );
  }
}
