"use strict";

exports.__esModule = true;
exports.default = fireDataEvent;
/* eslint func-style: 0, max-params: 0 */

function fireDataEvent(component, type, data) {
  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
  var context = component.context;

  if (context && context.analytics && context.analytics.callback && type && data) {
    context.analytics.callback({
      context: context.analytics.context,
      _type: type,
      component: component,
      event: null,
      props: component.props,
      state: options.state,
      extras: data
    });
  }
}