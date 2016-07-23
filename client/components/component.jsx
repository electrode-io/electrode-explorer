import React from "react";
import { Resolver } from "react-resolver";
import { fetchJSON, fetch } from "@walmart/electrode-fetch";
import Well from "@walmart/wmreact-containers/lib/components/well";
import Table from "@walmart/wmreact-table/lib/components/table";
import Revealer from "@walmart/wmreact-interactive/lib/components/revealer";
import ExecutionEnvironment from "exenv";
import Config from "@walmart/electrode-ui-config";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {},
      usage: [],
      demo: null,
      error: null
    };
  }

  componentWillMount() {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    const { org, repo } = this.props.params;
    const host = window.location.origin;
    const url = `${host}/portal/data/${org}/${repo}.json`;
    return fetchJSON(url)
      .then((res) => {
        const meta = res.meta || {};
        const usage = res.usage.sort(function compare(a, b) {
          if (a.displayName < b.displayName) {
            return -1;
          }
          if (a.displayName > b.displayName) {
            return 1;
          }
          return 0;
        }) || [];

        this.setState({ meta, usage });

        const scriptUrl = `${host}/portal/data/demo-modules/${meta.name}/bundle.min.js`;
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;

        document.getElementById("placeholder").appendChild(script);
        const x = setInterval(() => {
          if (typeof _COMPONENTS !== "undefined" && _COMPONENTS[meta.name]) {
            this.setState({ demo: _COMPONENTS[meta.name] });
            clearInterval(x);
          }
        }, 500);
      });
  }

  _renderDemo() {
    const { demo, error } = this.state;
    if (!demo && !error) {
      return (<div>Loading, please wait.</div>);
    }

    return React.createElement(demo);
  }

  render() {
    const { meta, usage, error } = this.state;
    let host;

    if (ExecutionEnvironment.canUseDOM) {
      host = window.location.origin;
    }

    if (!meta.title) {
      meta.title = this.props.params.repo || "[ Missing Title ]";
    }

    return (
      <div>
        <h2 className="portal-title">
          {meta.title} {meta.version && <span className="component-version">{` v${meta.version}`}</span>}
          {meta.description && <span className="component-description">{meta.description}</span>}
          <span className="component-info">
            {meta.github && <div>
              <a href={meta.github} target="_blank">View Repository on Github</a>
            </div>}
            {meta.name && <Well className="code-well" padded={true}>npm i --save {meta.name}</Well>}
            {usage.length > 0 && <Revealer
              baseHeight={50}
              buttonClosedText="View Usage"
              buttonOpenText="Hide Usage"
              defaultOpen={false}
              disableClose={false}
              inverse={true}
              fakeLink={false}
              border={false}>
              <div className="component-usage">
              This component is used in {usage.length} modules / apps.
              <Table>
                <Table.Body>
                {usage.map((detail) => (
                <Table.Row>
                  <Table.Cell>
                    <a href={detail.uri} target="_blank" className="detail-uri">
                      {detail.displayName}
                    </a>
                  </Table.Cell>
                  <Table.Cell className="detail-version">
                    <span className={`version-status-${detail.version && detail.version.status}`}>{detail.version && detail.version.str}</span>
                  </Table.Cell>
                  <Table.Cell className="detail-description">
                    {detail.description}
                  </Table.Cell>
                </Table.Row>
              ))}
              </Table.Body>
              </Table>
            </div>
            </Revealer>}
          </span>
        </h2>
        <div id="placeholder" />
        { this._renderDemo() }
        { error && <b>This component does not have demo or demo does not work properly.</b> }
      </div>
    );
  }
}
