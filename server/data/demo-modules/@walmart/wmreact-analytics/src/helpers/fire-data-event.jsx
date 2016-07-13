/* eslint func-style: 0, max-params: 0 */

export default function fireDataEvent(component, type, data, options = {}) {
  const {context} = component;
  if (context && context.analytics &&
     context.analytics.callback && type && data) {
    context.analytics.callback({
      context: context.analytics.context,
      _type: type,
      component,
      event: null,
      props: component.props,
      state: options.state,
      extras: data
    });
  }
}
