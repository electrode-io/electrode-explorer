/* eslint func-style: 0 */

export default function fireUIEvent(component, event, options = {}) {
  const {context} = component;
  if (context && context.analytics && context.analytics.callback) {
    context.analytics.callback({
      context: context.analytics.context,
      _type: options.eventType || event.type,
      component,
      event: event.nativeEvent,
      props: component.props,
      state: options.state,
      extras: options.extras
    });
  }
}
