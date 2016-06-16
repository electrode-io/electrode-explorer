import React from "react";
import Playground from "component-playground";
import assign from "object-assign";
import { fetchJSON } from "@walmart/electrode-fetch";
import Carousel from "@walmart/wmreact-carousel";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: []
    };
  }

  componentWillMount() {
    const { org, repo } = this.props.params;
    return fetchJSON(`/portal/data/${org}/${repo}.json`)
      .then((res) => {
        res.forEach((r) => {
          const examples = this.state.examples;
          examples.push({
            title: r.title,
            code: r.examples[0].code
          });
          this.setState({examples});
        });
      });
  }

  render() {
    const { examples } = this.state;
    const localScope = assign({ React }, this.props.scope || {}, Carousel);
    return (
      <div>
        {examples && examples.map((e) => {
          return (
            <div>
              <h2>{e.title}</h2>
              <div>{e.code}</div>
              <Playground codeText={e.code}
                scope={assign(localScope, e.extraScope || {})}
                noRender={e.noRender} />
            </div>
          );
        })}
      </div>
    );
  }
};
