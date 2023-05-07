"use strict";

import slugify from "slugify";

const VALID_SCROLL_BEHAVIORS = ["auto", "smooth"];

export class Hashlink {
  constructor({ scroll = false, speed = 50000 } = {}) {
    if (scroll && VALID_SCROLL_BEHAVIORS.includes(scroll)) {
      var html = document.documentElement;
      html.style.scrollBehavior = scroll;
      // html.style.transitionDuration = `${speed}ms`;
    }
  }

  new(text) {
    return slugify(text, { lower: true, replacement: "-" });
  }

  setbyclass(theclass, text) {
    document.getElementsByClassName(theclass)[0].id = this.new(text);
  }

  setbyname(thename, text) {
    document.getElementsByName(thename)[0].id = this.new(text);
  }

  _destin(text) {
    const link = "#" + this.new(text);
    if (typeof window !== "undefined") window.location.hash = link;
  }

  goto(text) {
    return () => this._destin(text);
  }
}
