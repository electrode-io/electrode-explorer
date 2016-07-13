/* @flow */
/* eslint func-style: 0, max-params: 0, no-empty:0 */
export default function triggerWrapper(analytics: {
  callback: (evt: Object) => void;
  context: Object;
}, prop: any, child: any, key: string): Function {
  let extra = {};
  if (typeof prop === "object") {
    extra = prop;
  }
  return (...args) => {
    try {
      let payload = {
        _reactObject: child,
        _type: key,
        context: analytics.context,
        props: child.props,
        extra
      };

      if (typeof prop === "function") {
        payload = prop(payload);
      }

      analytics.callback(payload);
    } catch (e) {
    }
    return child.props[key](...args);
  };
}
