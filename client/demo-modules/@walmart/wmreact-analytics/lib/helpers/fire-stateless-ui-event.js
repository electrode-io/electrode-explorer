"use strict";

exports.__esModule = true;
exports.default = fireStatelessUIEvent;
/* eslint func-style: 0, max-params: 0 */

function fireStatelessUIEvent(props, context, event) {
  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

  if (context && context.analytics && context.analytics.callback) {
    context.analytics.callback({
      context: context.analytics.context,
      _type: options.eventType || event.type,
      component: { props: props },
      event: event.nativeEvent,
      props: props,
      state: options.state,
      extras: options.extras
    });
  }
}