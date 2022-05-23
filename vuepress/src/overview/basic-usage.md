# Basic Usage

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
