/* @flow */
/* eslint func-style: 0, consistent-this: 0 */
import triggerWrapper from "./trigger-wrapper";

export default function eventsWrapper(self: Object, props: Object): Object {
  const newProps = {};
  for (const k in props) {
    newProps[k] = triggerWrapper(
      self.context.analytics,
      props[k],
      self,
      k
    );
  }
  return newProps;
}
