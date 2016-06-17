import React from "react";
import assign from "object-assign";
import { fetchJSON } from "@walmart/electrode-fetch";
import Carousel from "@walmart/wmreact-carousel";
import FeaturedElementCarousel from "@walmart/wmreact-carousel/lib/components/featured-element-carousel";

let Playground;

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    Playground = require("component-playground").default;
    this.state = {
      examples: []
    };
  }

  componentWillMount() {
    const { org, repo } = this.props.params;
    return fetchJSON(`/portal/data/${org}/${repo}.json`)
      .then((res) => {
        const examples = this.state.examples;
        res.forEach((r) => {
          examples.push({
            title: r.title,
            code: r.examples[0].code
          });
        });
        this.setState({examples});
      });
  }

  render() {
    const { examples } = this.state;
    const localScope = assign({ React, Carousel, FeaturedElementCarousel }, this.props.scope || {});
    return (
      <div>
        {examples && examples.map((e) => {
          return (
            <div>
              <h4>{e.title}</h4>
              <Playground codeText={e.code}
                scope={assign(localScope, e.extraScope || {})}
              />
            </div>
          );
        })}
      </div>
    );
  }
};
