# Advanced Usage

## Restricting the player's size

You can restrict the video player's dimensions to a specific size one of two ways:

1. by styling its container.
2. by specifying the `width` and `height` attributes and
3. by adding the `fixed` attribute

<<< @/src/.vuepress/components/video/container.vue#snippet{10,17,24}

Without the `fixed` attribute, the player will be responsive to the size of the container it is placed in.

The `fixed` attribute will force the player to be a fixed size. This is useful if you want to use the player in a layout that has a fixed width.

<video-container></video-container>

## Player configuration

`ix-video` accepts most of the `data-setup`
[options](https://videojs.com/guides/options) supported by video.js. This allows
you to customize the player's capabilities and behavior beyond what's available
to native `<video>` element.

For example, you can add playback speed support to the player by adding the
following data-setup option:

```html
<ix-video
  controls
  source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
  data-setup='{"playbackRates": [0.5, 1, 1.5, 2]}'
></ix-video>
```

Your video will now display the defined playback rate options on the bottom
right-hand side of the playback controls.

<ix-video
controls
source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
data-setup='{"playbackRates": [0.5, 1, 1.5, 2]}'

> </ix-video>

### video.js plugins

::: warning
video.js plugins support is experimental and could change at any time
:::

Register the plugin as you would any other `video.js` plugin.

For example, to register the `videojs-seek-buttons` plugin, import the module somewhere in your app where you have access to the `window` and get a reference to the `window.videojs` object. Then, register the plugin as is suggested in [their documentation](https://github.com/mister-ben/videojs-seek-buttons#usage).

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/videojs-seek-buttons/dist/videojs-seek-buttons.css"
/>
<!-- HLS video that fills container -->
<div style="display: flex; width: 480px; height: 255px">
  <ix-video
    class="video-with-skip-plugin"
    source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
    controls
  ></ix-video>
</div>
<script type="module">
  await import(
    'https://cdn.jsdelivr.net/npm/videojs-seek-buttons/dist/videojs-seek-buttons.js'
  );
  const videoElement = document.querySelector(
    '.video-with-skip-plugin > video'
  );
  const videojsPlayer = window.videojs(videoElement);
  videojsPlayer.seekButtons({
    forward: 5,
    back: 5,
  });
</script>
```

> Press play to see the skip buttons added by the plugin

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/videojs-seek-buttons/dist/videojs-seek-buttons.css"
/>
<!-- HLS video that fills container -->
<ix-video
  class="video-with-skip-plugin"
  source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
  controls
></ix-video>
<script type="module">
  await import(
    'https://cdn.jsdelivr.net/npm/videojs-seek-buttons/dist/videojs-seek-buttons.js'
  );
  const videoElement = document.querySelector('.video-with-skip-plugin > video')
  const videojsPlayer = window.videojs(videoElement);
  videojsPlayer.seekButtons({
    forward: 5,
    back: 5,
  });
</script>
