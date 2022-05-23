## Advanced Usage

### Restricting the player's size

You can restrict the video player's dimensions to a specific size one of two ways:

1. by styling its container.
2. by specifying the `width` and `height` attributes and
3. by adding the `fixed` attribute

<<< @/src/.vuepress/components/video/container.vue#snippet{10,17,24}

Without the `fixed` attribute, the player will be responsive to the size of the container it is placed in.

The `fixed` attribute will force the player to be a fixed size. This is useful if you want to use the player in a layout that has a fixed width.

<video-container></video-container>

### Player configuration

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

::: tip video.js plugins
We don't at this time offer explicit support for video.js plugins. You can refer
to their documentation for more information on how these can be used.
:::
