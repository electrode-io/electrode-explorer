"use strict";

exports.__esModule = true;
exports.default = fireUIEvent;
/* eslint func-style: 0 */

function fireUIEvent(component, event) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var context = component.context;

  if (context && context.analytics && context.analytics.callback) {
    context.analytics.callback({
      context: context.analytics.context,
      _type: options.eventType || event.type,
      component: component,
      event: event.nativeEvent,
      props: component.props,
      state: options.state,
      extras: options.extras
    });
  }
}