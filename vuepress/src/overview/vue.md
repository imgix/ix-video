# Using `≤ix-video>` custom element in a Vue app

## Installation

First ensure you've installed the package in your project:

```bash
npm i @imgix/ix-video
```

## Usage

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
