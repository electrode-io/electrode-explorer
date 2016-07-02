/*
This is deprecated and dying. We are moving away from it. Do not use it.
*/
class Analytics {
  constructor() {
    this.subscribed = [];
    this.debug = false;
  }

  setDebug(debug) {
    this.debug = debug;
  }

  findSubscriber(subscriber) {
    for (let i = 0; i < this.subscribed.length; i++) {
      if (this.subscribed[i] === subscriber) {
        return i;
      }
    }
    return -1;
  }

  addSubscriber(subscriber) {
    if (this.findSubscriber(subscriber) === -1) {
      this.subscribed.push(subscriber);
    }
  }

  removeSubscriber(subscriber) {
    const index = this.findSubscriber(subscriber);
    if (index !== -1) {
      this.subscribed.splice(index, 1);
    }
  }

  fire(event) {
    for (const i in this.subscribed) {
      try {
        this.subscribed[i].analyticsEvent(event);
      } catch (e) { //eslint-disable-line
      }
    }
    if (this.debug) {
      console.log(JSON.stringify(event)); //eslint-disable-line
    }
  }

  mixin() {
    const self = this;
    return {
      componentWillMount() {
        self.addSubscriber(this);
      },
      componentWillUnmount() {
        self.removeSubscriber(this);
      }
    };
  }

  componentMixin(events) {
    const self = this;

    const mixin = {
      fire(component, event, options) { // eslint-disable-line max-statements
        options = options || {};

        const children = [component];
        if (options.children) {
          for (const i in options.children) {
            children.push(options.children[i]);
          }
        }

        event = event || {};
        event.displayName = component.constructor.displayName;

        for (const c in children) {
          const props = children[c].props.analytics || {};
          if (props.disabled) {
            return;
          }
          if (props.tags) {
            for (const t in props.tags) {
              if (props.tags[t]) {
                event[t] = props.tags[t];
              }
            }
          }
        }

        self.fire(event);
      }
    };

    for (const i in events) {
      mixin["fire" + this.capitalize(events[i])] = (component, event, options) => { // eslint-disable-line
        event = event || {};
        event.type = events[i];
        mixin.fire(component, event, options);
      };
    }

    return mixin;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

const _analytics = _analytics || new Analytics();

export default _analytics;
