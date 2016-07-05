/*global document:false*/
import React from "react";
import performanceFactory from "../src/index";
import NullPerformance from "../src/providers/null";
import NativePerformance from "../src/providers/native";
import PerformancePolyfill from "../src/providers/polyfill";

export default class Demo extends React.Component {
  constructor() {
    super();
    this.providers = [
      new NullPerformance(),
      new PerformancePolyfill(window.performance),
      new NativePerformance(window.performance)
    ];
    this.selectedProvider = performanceFactory(window.performance);
  }

  mark(perf, name) {
    return () => {
      perf.mark(name);
    };
  }

  measure(perf, name) {
    return () => {
      perf.measure(name);
    };
  }

  clear(perf) {
    return () => {
      perf.clearMarks();
      perf.clearMeasures();
    };
  }

  list(perf, id) {
    return () => {
      const node = document.getElementById(id);
      node.innerHTML = perf.getEntries()
        .map((entry) => {
          return (
            `<b>${entry.entryType}</b>: ${entry.name} - ${entry.startTime} (${entry.duration})`
          );
        })
        .join("<br/>");
    };
  }

  render() {
    return (
      <div className="demo">
        Selected wrapper: <code>{this.selectedProvider.constructor.name}</code>
        {this.providers.map((provider) => {
          const providerName = provider.constructor.name;
          return (<div className="provider" key={providerName}>
              <h2>{providerName}</h2>
              <p>isImplemented: {"" + provider.isImplemented()}</p>
              <button onClick={this.mark(provider, "mark")}>Mark</button>
              <button onClick={this.measure(provider, "measure")}>Measure</button>
              <button onClick={this.clear(provider)}>Clear Entries</button>
              <button onClick={this.list(provider, providerName + "-entries")}>List Entries</button>
              <h2>Entries</h2>
              <div className="entries" id={providerName + "-entries"}></div>
            </div>);
        })}
      </div>
    );
  }
}
