## Basic Usage

::: tip Note

**HLS** is the default playback format for [imgix video](https://blog.imgix.com/2021/12/15/streaming-video-part-3-http-live-streaming) and the `ix-video` player.

HLS video playback leverages adaptive bitrate streaming **(ABS)** technology to deliver the smooth video quality in the quickest time possible.
:::

First import the component:

```js
import {IxVideo} from '@imgix/ix-video';
```

We recommend you do this in the root of your application so that the custom elements are registered for the entire application.

Then, use the `ix-video` custom element and set the `source` attribute to the source URL of the video:

<<< @/src/.vuepress/components/video/hls.vue

And you're ready to go 🎉.

<video-hls></video-hls>

### React

React can render custom elements (Web Components), but it has [trouble](https://custom-elements-everywhere.com/#react) passing React props to custom element properties and event listeners.

We recommend using a wrapper like [@lit-labs/react](https://github.com/lit/lit/tree/main/packages/labs/react#readme) to wrap the custom element in a React component that passes props and synthetic events to the custom element.

Here's an example of how to wrap the custom element in a React component:

```jsx
import * as React from 'react';
import {createComponent} from '@lit-labs/react';
import {IxVideo} from '@imgix/ix-video';

// wrap the component to
export const Video = createComponent(React, 'ix-video', IxVideo, {
  onSeeked: 'seeked',
});

// use the component
<Video
  controls
  source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
  onSeeked={(e) => console.log(e)}
/>;
```

### Vue

Vue has great support for Web Components, so you can use the component in your Vue application without any additional steps.

```html
<script setup>
  import {IxVideo} from '@imgix/ix-video';
  import {ref} from 'vue';
</script>
<script>
  export default {
    methods: {
      warn(message, event) {
        console.warn(message, event.detail);
      },
    },
  };
</script>

<template>
  <div class="App">
    <ix-video
      controls
      source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
      @error="(event) => warn('error:', event)"
    ></ix-video>
  </div>
</template>
```

You will need to signal to the Vue compiler that this component is a custom element by adding the following:

```js
//vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ix- as custom elements
          isCustomElement: (name) => name.startsWith('ix-'),
        }
      })
    )
  }
```

Or if you're using Vite, you can add the following to your `vite.config.js`:

```js
//vite.config.js
import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (name) => name.startsWith('ix-'),
        },
      },
    }),
  ],
});
```
