/* global document setTimeout */

import React from "react";
import classNames from "classnames";
import map from "lodash/map";
import some from "lodash/some";
import assign from "lodash/assign";
import includes from "lodash/includes";

export default class Iframe extends React.Component {
  componentDidMount() {
    const iframe = this.refs.iframe;

    if (!iframe) {
      return;
    }

    const iframeId = `iframe-${this.props.iframeId}`;
    iframe.childNodes[0].id = iframeId;

    const iframeDoc = iframe.childNodes[0].contentDocument ||
      iframe.childNodes[0].contentWindow.document;
    this.setIFrameContent(iframeDoc);

    const images = iframeDoc.body.getElementsByTagName("img");

    this.loadImages(images).then(() => {
      // update height
      iframe.childNodes[0].style.height = `${iframeDoc.body.offsetHeight}px`;

      /**
       * Typekit doesn't support iframes without a src, so we have to inject
       * the font CSS from the parent page into the iframe. We do this by
       * grabbing the href of the Typekit stylesheet and linking to it in the
       * iframe's head.
       */

      if (includes(document.getElementsByTagName("html")[0].classList, "wf-active")) {
        const font = this.fetchTypekitHref();
        if (font) {
          iframeDoc.head.appendChild(font);
        }
      }
    });

    iframeDoc.addEventListener("toggle_modal", (e) => {
      iframe.childNodes[0].style.height = e.detail.height;
    });
  }

  setIFrameContent(iframeDoc) {
    let htmlData = `
      <!DOCTYPE html>
      <!--[if lt IE 7]> <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 main-html-body">
      <![endif]-->
      <!--[if IE 7]> <html class="no-js lt-ie10 lt-ie9 lt-ie8 main-html-body"> <![endif]-->
      <!--[if IE 8]> <html class="no-js lt-ie10 lt-ie9 main-html-body"> <![endif]-->
      <!--[if IE 9]> <html class="no-js lt-ie10 main-html-body"> <![endif]-->
      <!--[if gt IE 9]><!--> <html class="no-js main-html-body"> <!--<![endif]-->
      </html>
      ${this.props.markup}
    `;

    if (this.isNativeIframe) {
      const frame = document.implementation.createHTMLDocument("frame");
      frame.documentElement.innerHTML = this.props.markup;
      htmlData = frame.body.childNodes[0].innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    }

    iframeDoc.open();
    iframeDoc.write(htmlData);
    iframeDoc.close();

    if (!this.isNativeIframe) {
      const headData = `
        <base target="_parent">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${this.props.css || ""}
      `;

      iframeDoc.head.innerHTML = headData;

      assign(iframeDoc.body.style, {
        height: "auto",
        "background-color": "transparent"
      });

      iframeDoc.body.className += " align-center tempo-module";
    }
  }

  fetchTypekitHref() {
    let ret;
    some(document.getElementsByTagName("link"), (link) => {
      if (link.href.indexOf("fonts.walmart.com") > -1) {
        ret = link.cloneNode(true);
        return true;
      }
    });

    return ret;
  }

  loadImages(images) {
    const IFRAME_TIMEOUT = 1000;
    const totalImages = images.length;
    let imagesLoaded = 0;

    return new Promise((resolve) => {
      if (totalImages > 0) {
        map(images, (image) => {
          image.onload = () => {
            imagesLoaded += 1;
            if (imagesLoaded >= totalImages) {
              resolve();
            }
          };
        });
      } else {
        setTimeout(resolve, IFRAME_TIMEOUT);
      }
    });
  }

  render() {
    let ret = null;

    if (this.props.markup) {
      const classes = classNames("js-custom-html align-center tempo-module",
        `js-custom-html-${this.props.iframeId}`);

      this.isNativeIframe = this.props.markup.indexOf("<iframe") === 0;
      if (this.isNativeIframe) {
        ret = (
          <div ref="iframe"
            className={classes}
            data-module={this.props.moduleType}
            data-module-id={this.props.moduleId}
            dangerouslySetInnerHTML={{__html: this.props.markup}}>
          </div>
        );
      } else {
        const iframeHtml = `<iframe scrolling="no" frameborder="0"
            width="100%" allowTransparency="true" marginheight="0"
            style="border: 0px none; vertical-align: bottom; height: auto;"></iframe>
        `;

        ret = (
          <div ref="iframe"
            className={classes}
            data-module={this.props.moduleType}
            data-module-id={this.props.moduleId}
            dangerouslySetInnerHTML={{__html: iframeHtml}}>
          </div>
        );
      }
    }
    return ret;
  }
}

Iframe.propTypes = {
  iframeId: React.PropTypes.string,
  markup: React.PropTypes.string,
  css: React.PropTypes.string,
  moduleId: React.PropTypes.string,
  moduleType: React.PropTypes.string
};
