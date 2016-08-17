import React from "react";
import { fetchJSON } from "@walmart/electrode-fetch";
import ExecutionEnvironment from "exenv";

const Results = (props) => {
  const {
    term,
    count,
    matched
  } = props;

  return (
    <div>
      <h2>You searched for <em>{term}</em></h2>
      <h3>
        There
        {count > 1 ? " were " : " was "}
        <em> {count ? count : "no" } </em>
        result{count > 1 ? "s" : ""}:</h3>
      {count &&
        <div className="results-list">
        {matched.map((result) => {
          return (
          <div className="search-result">
            <a href={`/explorer/${result.module}`}>
            {result.isModule && <span className="module">Module <em>{result.module}</em></span>}
            {result.matches && <span className="matches">{result.matches.join(", ")} </span>}
            {!result.isModule && <span className="location">in {result.module}</span>}
            </a>
          </div>
          );
        })}
        </div>}
    </div>
  );
}

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      results: {}
    };
  }

  componentWillMount() {
    const { term } = this.props.params;

    const host = ExecutionEnvironment.canUseDOM ?
      window.location.origin :
      "http://localhost:3000";

    fetchJSON(`${host}/explorer/api/search/term/${term}`)
      .then((results) => {
        this.setState({ results, completed: true });
      }).catch((err) => {
        console.error(err);
      });
  }

  render() {
    const results = this.state.results;

    return (
      <div className="search-results">
        {this.state.completed ?
           "" : <span>Searching...</span>}
        {this.state.completed &&
          <Results {...results} />}
      </div>
    );
  }

}

