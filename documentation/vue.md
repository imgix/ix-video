# Using `≤ix-video>` custom element in a Vue app

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

However, Vue might show some warnings in the console if you don't declare your custom element in it's configuration. To turn these warnings off, you can let vue that the elements that start with `ix` are custom elements.

If you're using Vite, you can add the following to your `vite.config.js`:

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
      }))
  }
```

Or with Vite:

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
