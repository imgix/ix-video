# Customization

The `ix-video` player uses [video-js](https://videojs.com/getting-started) and its default [skin](https://videojs.com/getting-started/#skinning) to style the player. Therefore, you can can target any of the video-js components and customize their appearance.

For example, if you want to change big play button color to red, you can do it by adding the following CSS class to the `ix-video` component:

<<< @/src/.vuepress/components/video/styles.vue#snippet{4-13,22}

Now, on first load, the player's big play button will look like this:

<video-styles></video-styles>
