/* eslint func-style: 0, max-params: 0 */

export default function fireStatelessUIEvent(props, context, event, options = {}) {
  if (context && context.analytics && context.analytics.callback) {
    context.analytics.callback({
      context: context.analytics.context,
      _type: options.eventType || event.type,
      component: { props },
      event: event.nativeEvent,
      props,
      state: options.state,
      extras: options.extras
    });
  }
}
