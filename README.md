# imgix/ix-video

An imgix video custom element that works anywhere.

[![npm version](https://img.shields.io/npm/v/@imgix/ix-video.svg)](https://www.npmjs.com/package/@imgix/ix-video)
[![circleci](https://circleci.com/gh/imgix/ix-video/tree/next.svg?style=shield&circle-token=ae497a4aade0e744c31dc29c97b967a8011ef8af)](https://circleci.com/gh/imgix/ix-video/)

# Requirements

- Node v12+

- Browsers with Custom Elements V1 and Shadow DOM support, e.g. Chrome, Firefox, Safari, Edge (79+)

Browsers without native [custom element support](https://caniuse.com/#feat=custom-elementsv1) require a [polyfill](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements).

For Node/browser versions without [es6 module support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#browser_support), you'll need to use a bundler like [webpack](https://webpack.js.org/) or [parcel](https://parceljs.org/) to bundle the custom element.

# Installation

Install this package in your project:

```bash
npm i @imgix/ix-video
```

Or add it from a CDN:

```html
<script
  type="module"
  src="https://unpkg.com/@imgix/ix-video@latest/dist/index.bundled.js"
></script>
```

# Usage

Look at our docs to see how to us this inside your [React](/docs/src/overview/react.md), [Vue](/docs/src/overview/vue.md), or other [web-apps](/docs/src/overview/static.md).

## Using `<ix-video>` on a static HTML static page

Below is an example of how to import and use the `ix-video` custom element from a direct import or CDN on a static HTML page.

```html
<html lang="en">
  <head>
    <title>ix-video in a static HTML file</title>
    <!-- Note: type 'module' here is important -->
    <script type="module">
      import {IxVideo} from './node_modules/@imgix/ix-video/dist/index.bundled.js';
    </script>
    <!-- Alternatively, the component can be loaded via a CDN -->
    <script type="module" src="https://unpkg.com/@imgix/ix-video@latest/dist/index.bundled.js"></script>
  </head>
  <body>
    <h1>There is no bundler or bundling involved!</h1>
    <ix-video
      controls
      src="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
    >
  </body>
</html>
```

### Attributes

**`source`: string, required**

The video's source URL. Should be used in combination with `type` attribute when the `source` is not an HLS source.

**`type`: string, optional (defaults to `'application/x-mpegURL'`)**

The media type of the video. Supports standard `video` media types and **HLS** media types.

**`data-setup`: string, optional (defaults to `'{}'`)**

Sets Video.js specific options. See [video.js documentation](https://videojs.com/guides/options/) for examples.

**`fixed`: boolean, optional (defaults to `false`)**

Will force the player to be a fixed size. This is useful if you want to use the player in a layout that has a fixed dimension.
Without the `fixed` attribute, the player will be responsive to the size of the container it is placed in.

**`controls`: boolean, optional (defaults to `false`)**

Show/hide the player controls.

**`width`: string, optional**

The width of the video player. When `fixed` is set to `true`, the player will not automatically resize to fit inside the container's dimensions.

**`height`: string, optional**

Sets the video player's height. If `fixed` is set to `true`, the player will not automatically resize to fit inside the container's dimensions.

**`poster`: string, optional**

The video's poster image URL. The `poster` attribute will automatically try to resize the poster image to fit the video player's dimensions, assuming the attribute is given an imgix image URL.
