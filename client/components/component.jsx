import React from "react";
import assign from "object-assign";
import { fetchJSON } from "@walmart/electrode-fetch";
import ExecutionEnvironment from "exenv";

let Playground;

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examples: [],
      meta: {},
      passingScope: {}
    };
  }

  componentDidMount() {
    Playground = require("component-playground").default;
  }

  componentWillMount() {
    const { org, repo } = this.props.params;
    let host = "http://localhost:3000";
    if (ExecutionEnvironment.canUseDOM) {
      host = window.location.origin;
    }
    return fetchJSON(`${host}/portal/data/${org}/${repo}.json`)
      .then((res) => {
        const meta = res.meta || {};
        const imports = res.imports || [];
        const examples = this.state.examples;
        res.components && res.components.forEach((r) => {
          examples.push({
            title: r.title,
            code: r.examples[0].code
          });
        });
        const passingScope = { React, process };

        imports && imports.forEach((imp) => {
          passingScope[imp.ref] = require(`../demo-modules/${meta.name}/${imp.path}.js`).default;
        });
        this.setState({
          examples, meta, passingScope
        });
      });
  }

  render() {
    const { examples, meta, passingScope } = this.state;
    const localScope = assign(passingScope, this.props.scope || {});

    return (
      <div>
        <h2 className="portal-title">
          {meta.title}
          <span className="version">
            {meta.github && <div>
              Github: <a href={meta.github}>{meta.github}</a>
            </div>}
            {meta.version && `v${meta.version}`}
          </span>
        </h2>
        <h3><a href={meta.githubUrl}>{meta.githubUrl}</a></h3>
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
