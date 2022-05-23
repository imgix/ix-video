# 🔌 Installation

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

For more information, see the [usage guide](/overview/ix-video.html#basic-usage).

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
      src="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
    >
  </body>
</html>
```
