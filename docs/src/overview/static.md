# Using `<ix-video>` custom element on an HTML static page

Below is an example of how to import and use the `ix-video` custom element from a CDN on a static HTML page.

```html
<html lang="en">
  <head>
    <title>ix-video in a static HTML file</title>
    <!-- Note: type 'module' here is important -->
    <script type="module">
      import {IxVideo} from './node_modules/@imgix/ix-video/dist/index.bundled.js';
    </script>
    <!-- Alternatively, the component can be loaded via a CDN -->
    <script type="module" src="https://static.imgix.net/ix-video/@latest-v1/umd/ix-video.min.js"></script>
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
