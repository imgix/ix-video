### Attributes

**`source`: string, required**

The video's source URL. Should be used in combination with `type` attribute when the `source` is not an HLS source.

**`type`: string, optional (defaults to `'application/x-mpegURL'`)**

The media type of the video. Supports standard `video` media types and **HLS** media types.

**`data-setup`: string, optional (defaults to `'{}'`)**

Sets Video.js specific options. See [video.js documentation](https://videojs.com/guides/options/) for examples.

**`fixed`: boolean, optional (defaults to `false`)**

Will force the player to be a fixed size. This is useful if you want to use the player in a layout that has a fixed dimension.
Without the `fixed` attribute, the player will be responsive to the size of the container it is placed in.

**`controls`: boolean, optional (defaults to `false`)**

Show/hide the player controls.

**`width`: string, optional**

The width of the video player. When `fixed` is set to `true`, the player will not automatically resize to fit inside the container's dimensions.

**`height`: string, optional**

Sets the video player's height. If `fixed` is set to `true`, the player will not automatically resize to fit inside the container's dimensions.

**`poster`: string, optional**

The video's poster image URL. The `poster` attribute will automatically try to resize the poster image to fit the video player's dimensions, assuming the attribute is given an imgix image URL.
