# Attributes

The component is designed to mimic the `<video>` tag [API](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes) so most of its [attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes) are also supported by the `<ix-video>` tag.

> You can find a list of the supported `<video>` element attributes [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

## `controls`

> boolean, optional (defaults to `false`)

Show/hide the player controls.

## `data-setup`

> string, optional (defaults to `'{}'`)

Sets Video.js specific options. See [video.js documentation](https://videojs.com/guides/options/) for examples.

::: details click to see example

```html
<ix-video
  source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
  controls
  data-setup='{"playbackRates": [0.5, 1, 1.5, 2]}'
>
</ix-video>
```

<ix-video
source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
data-setup='{"playbackRates": [0.5, 1, 1.5, 2]}'
controls

> </ix-video>

:::

## `fixed`

> boolean, optional (defaults to `false`)

Will force the player to be a fixed size. This is useful if you want to use the player in a layout that has a fixed dimension.
Without the `fixed` attribute, the player will be responsive to the size of the container it is placed in.

::: details click to see example

```html
<ix-video
  source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
  height="200"
  fixed
  controls
>
</ix-video>
```

<ix-video
source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
height="200"
fixed
controls

> </ix-video>

:::

## `height`

> string, optional (defaults to `undefined`)

Sets the video player's height. If `fixed` attribute is set, the player will not automatically resize to fit inside the container's dimensions.

::: warning height should always be used along with `width` or `fixed`
When `fixed` is not set, the player will always fill the available width of the container.
This means that, if the height is set to a value is so that the video's aspect ratio would be changed, the height value will be ignored.
:::

::: details click to see example

```html
<ix-video
  source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
  height="212"
  width="400"
  controls
>
</ix-video>
```

<ix-video
source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
height="212"
width="400"
controls

> </ix-video>

:::

## `poster`

> string, optional (defaults to `undefined`)

The video's poster image URL. The `poster` attribute will automatically try to resize the poster image to fit the video player's dimensions, assuming the attribute is given an imgix image URL.

::: details click to see example

```html
<ix-video
  controls
  preload="none"
  poster="https://sdk-test.imgix.net/amsterdam.jpg"
  source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
>
</ix-video>
```

<ix-video
controls
preload="none"
poster="https://sdk-test.imgix.net/amsterdam.jpg"
source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"

> </ix-video>

:::

## `source`

> string, required (defaults to `undefined`)

The video's source URL. Should be used in combination with `type` attribute when the `source` is not an HLS source.

## `type`

> string, optional (defaults to `'application/x-mpegURL'`)

The media type of the video. Supports standard `video` media [types](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/codecs_parameter) and **HLS** media types.

::: details click to see example

```html
<ix-video
  controls
  source="https://assets.imgix.net/videos/girl-reading-book-in-library.mp4"
  type="video/mp4"
>
</ix-video>
```

<ix-video
controls
source="https://assets.imgix.net/videos/girl-reading-book-in-library.mp4"
type="video/mp4"

> </ix-video>

:::

## `width`

> string, optional (defaults to `undefined`)

The width of the video player. If `fixed` attribute is set, the player will not automatically resize to fit inside the container's dimensions.

::: details click to see example

```html
<ix-video
  controls
  width="300"
  source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
>
</ix-video>
```

<ix-video
controls
width="300"
source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"

> </ix-video>

:::
