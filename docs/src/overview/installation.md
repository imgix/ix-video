# Installation

## Requirements

- Node v12+

- Browsers with Custom Elements V1 and Shadow DOM support, e.g. Chrome, Firefox, Safari, Edge (79+)

Browsers without native [custom element support](https://caniuse.com/#feat=custom-elementsv1) require a [polyfill](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements).

For Node/browser versions without [es6 module support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#browser_support), you'll need to use a bundler like [webpack](https://webpack.js.org/) or [parcel](https://parceljs.org/) to bundle the custom element.

## Local

To install the library inside your project, run the following command:

```bash
npm i @imgix/ix-video
```

Now you can use the library in your project.

We recommend that you import the library in your application's main file so that the custom elements are registered for the entire application.

```jsx
import {IxVideo} from '@imgix/ix-video';
```

Look at our [usage guide](/overview/basic-usage) to for examples on how to us this inside your React, Vue, or other web-apps.

## Without build tools

To get started with @imgix/ix-video without a build step, copy the following code into you application's HTML file and open it in your browser. This will register the web components and make them available to your application.

Below is an example of how to import and use the `ix-video` custom element from a CDN on a static HTML page.

::: warning a note on CDN usage
We highly recommend self-hosting the library if you are using it in a production environment.
:::

```html
<html lang="en">
  <head>
    <title>ix-video in a static HTML file</title>
    <!-- Note: type 'module' here is important -->
    <script type="module" src="https://unpkg.com/@imgix/ix-video@latest/dist/index.bundled.js"></script>
  </head>
  <body>
    <h1>There is no bundler or bundling involved!</h1>
    <ix-video
      controls
      source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
    >
  </body>
</html>
```
