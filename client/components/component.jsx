/* globals document _COMPONENTS setTimeout setInterval clearInterval */

import React from "react";
import { fetchJSON } from "@walmart/electrode-fetch";
import Well from "@walmart/wmreact-containers/lib/components/well";
import Table from "@walmart/wmreact-table/lib/components/table";
import Revealer from "@walmart/wmreact-interactive/lib/components/revealer";
import ExecutionEnvironment from "exenv";
import Config from "@walmart/electrode-ui-config";
import marked from "marked";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {},
      usage: [],
      deps: [],
      demo: null,
      doc: null,
      error: null
    };
  }

  componentWillMount() {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    const { org, repo } = this.props.params;

    Promise.all([
      this._getComponent(org, repo),
      this._getDoc(org, repo)
    ]);
  }

  _getComponent(org, repo) {
    const host = window.location.origin;
    const url = `${host}/portal/data/${org}/${repo}.json`;

    const compare = (a, b) => {
      if (a.displayName < b.displayName) {
        return -1;
      }
      if (a.displayName > b.displayName) {
        return 1;
      }
      return 0;
    };

    return fetchJSON(url)
      .then((res) => {
        const meta = res.meta || {};
        const usage = res.usage.sort(compare);

        const deps = res.deps || [];
        deps.sort(compare);

        this.setState({ meta, usage, deps });

        const scriptUrl = `${host}/portal/data/demo-modules/${meta.name}/bundle.min.js`;
        this._getDemo(scriptUrl, meta);
      })
      .catch(() => {});
  }

  _getDemo(url, meta) {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    document.getElementById("placeholder").appendChild(script);
    const x = setInterval(() => {
      if (typeof _COMPONENTS !== "undefined" && _COMPONENTS[meta.name]) {
        this.setState({ demo: _COMPONENTS[meta.name] });
        clearInterval(x);
      }
    }, 500);

    setTimeout(() => {
      if (typeof _COMPONENTS === "undefined") {
        clearInterval(x);
        this.setState({ error: true });
      }
    }, Config.ui.timeout);
  }

  _getDoc(org, repo) {
    const host = window.location.origin;
    const url = `${host}/portal/api/doc/${org}/${repo}`;

    return fetchJSON(url)
      .then((res) => {
        this.setState({ doc: marked(res.doc) });
      })
      .catch(() => {
        this.setState({ doc: marked("# Error fetching doc") });
      });
  }

  _renderUsage(usage, deps) {
    return (
      <div className="component-consumption">
        <h3>Component Usage</h3>
        { usage.length > 0 && <Revealer
          baseHeight={50}
          buttonClosedText="View Usage"
          buttonOpenText="Hide Usage"
          defaultOpen={false}
          disableClose={false}
          inverse={true}
          fakeLink={false}
          border={false}>
          <div className="component-usage">
            This component is used in <em>{usage.length}</em> modules / apps.
            { this._renderModuleData(usage) }
            </div>
        </Revealer> }
        <h3>Module Dependencies</h3>
        { deps.length > 0 && <Revealer
          baseHeight={50}
          buttonClosedText="View Dependencies"
          buttonOpenText="Hide Dependencies"
          defaultOpen={false}
          disableClose={false}
          inverse={true}
          fakeLink={false}
          border={false}>
          <div className="component-dependencies">
            This component has <em>{deps.length}</em> Electrode dependencies.
            { this._renderModuleData(deps) }
          </div>
        </Revealer> }
      </div>
    );
  }

  _renderTitle(meta) {
    return (
      <h2 className="portal-title">
        { meta.title }

        { meta.version &&
          <span className="component-version">
            {` v${meta.version}`}
          </span> }

        { meta.description &&
          <span className="component-description">
            {meta.description}
          </span> }

        <span className="component-info">
          { meta.github &&
            <div>
              <a href={meta.github} target="_blank">View Repository on Github</a>
            </div> }
          { meta.name &&
            <Well className="code-well" padded={true}>
              npm i --save {meta.name}
            </Well> }
        </span>

      </h2>
    );
  }

  _renderDoc() {
    const { doc } = this.state;

    return (
      <div className="portal-title">
        <Revealer
          baseHeight={0}
          buttonClosedText="View Doc"
          buttonOpenText="Hide Doc"
          defaultOpen={false}
          disableClose={false}
          inverse={true}
          fakeLink={false}
          border={false}>
          <div className="component-dependencies" dangerouslySetInnerHTML={{ __html: doc }} />
        </Revealer>
      </div>
    );
  }


  _renderModuleData(data) {
    return (
      <Table>
        <Table.Body>
          {data.map((detail) => (
            <Table.Row>
              <Table.Cell>
                <a href={detail.uri} target="_blank" className="detail-uri">
                  {detail.displayName}
                </a>
              </Table.Cell>
              <Table.Cell className="detail-version">
                <span className={`version-status-${detail.version && detail.version.status}`}>
                  {detail.version && detail.version.str}
                </span>
              </Table.Cell>
              <Table.Cell className="detail-description">
                {detail.description}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }

  _renderDemo() {
    const { demo, error } = this.state;

    if (!demo && !error) {
      return (<div>Loading, please wait.</div>);
    }

    if (!demo && error) {
      return (<b>This component does not have demo or demo does not work properly.</b>);
    }

    return React.createElement(demo);
  }

  render() {
    const { meta, usage, deps } = this.state;

    if (!meta.title) {
      meta.title = this.props.params.repo || "[ Missing Title ]";
    }

    return (
      <div>
        { this._renderTitle(meta) }
        { this._renderDoc() }
        <div id="placeholder" />
        <div className="demo">
          { this._renderDemo() }
        </div>
        { this._renderUsage(usage, deps) }
      </div>
    );
  }
}

Component.propTypes = {
  params: React.PropTypes.shape({
    org: React.PropTypes.string,
    repo: React.PropTypes.string
  })
};
