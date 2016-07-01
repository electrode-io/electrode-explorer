import ExecutionEnvironment from "exenv";

let breakpointMap = {};

const isEmpty = (map: Object): boolean => {
  return Object.keys(map).length === 0;
};

export class WidthWatcherException {
  constructor(): void {
    this.name = "WidthWatcherException";
    this.message = "This exception was likely caused by subscribing to an instance " +
      "of the WidthWatcher class and not providing an implementation of the " +
      "`updateWidth(newWidth)` method. See the WidthWatcher class documention for more " +
      "information";
  }
}

export class WidthWatcher {
  // If you use this class be sure to shim matchMedia for IE8/IE9 compatibility:
  // https://github.com/paulirish/matchMedia.js
  constructor(): void {
    // We'll need to  ensure that there actually is a DOM to be accessed
    // via `window` before we make any sort of media query. Additionally,
    // there's no need to instantiate several sets of media matchers. If one
    // has already been set up, then we're good to go.
    if (isEmpty(breakpointMap) && ExecutionEnvironment.canUseDOM) {
      breakpointMap = {
        "small": window.matchMedia("(min-width: 480px)"),
        "medium": window.matchMedia("(min-width: 768px)"),
        "large": window.matchMedia("(min-width: 1024px)"),
        "x-large": window.matchMedia("(min-width: 1364px)")
      };
    }

    for (const key in breakpointMap) {
      breakpointMap[key].addListener(this.onBreakpointMatched.bind(this));
    }

    this.subscribed = [];
  }

  // Asks our set of media queries present in `breakpointMap` for any match,
  // then return the largest sized match made. Will return one of five sizes:
  // ["small", "medium", "large", "x-large", "xx-large"]
  get width(): string {
    let name = "x-small";
    const checkOrder = ["small", "medium", "large", "x-large"];

    checkOrder.forEach((size) => {
      // Need to check the type for IE versions < 10, otherwise this will break
      if (typeof breakpointMap[size] === "object" && breakpointMap[size].matches) {
        name = size;
      }
    });

    return name;
  }

  onBreakpointMatched(): void {
    this.updateWidth(this.width);
  }

  // publish a change in device width to all subscribers.
  // throw an error should any subscriber not have an implementation
  // of `updateWidth(newWidth)`
  updateWidth(newWidth: string): void {
    this.subscribed.forEach((subscriber) => {
      try {
        subscriber.updateWidth(newWidth);
      } catch (exception) {
        throw new WidthWatcherException();
      }
    });
  }

  // Ensure subscriber hasn't previously subscribed, then add subscriber.
  addSubscriber(subscriber: any): void {
    if (this.findSubscriber(subscriber) === -1) {
      this.subscribed.push(subscriber);
    }
  }

  // Iterate through all subscribers and return index of provided
  // subscriber. If said subscriber is not found, return -1.
  findSubscriber(subscriber: any): void {
    for (const index in this.subscribed) {
      if (this.subscribed[index] && (this.subscribed[index] === subscriber)) {
        return index;
      }
    }

    return -1;
  }

  // Ensure provided subscriber has indeed subscribed, then remove.
  removeSubscriber(subscriber: any): void {
    const index = this.findSubscriber(subscriber);

    if (index !== -1) {
      this.subscribed.splice(index, 1);
    }
  }
}
