import React from "react";
import { fetchJSON } from "@walmart/electrode-fetch";
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
      demoStyl: null,
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

        try {
          const demo = require(`../demo-modules/${meta.name}/demo/demo`);
          const demoStyl = require(`../demo-modules/${meta.name}/demo/demo.styl`);
          this.setState({ demo, demoStyl });
        } catch (e) {
          console.log(`Error require demo in ${meta.name}`);
          console.log(e.stack);
          this.setState({error: true});
        }
      });
  }

  render() {
    const { meta, usage, demo, error } = this.state;

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
        { typeof demoStyl !== "undefined" && demoStyl }
        { typeof demo !== "undefined" && demo && <demo.default/> }
        { error && <b>This component does not have demo or demo does not work properly.</b> }
      </div>
    );
  }
}
