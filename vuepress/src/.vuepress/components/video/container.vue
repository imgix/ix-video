<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      max-width: 200px;
      border: 2px solid orange;
    "
  >
    <div style="width: 200px">
      <ix-video
        controls
        source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
      ></ix-video>
    </div>
    <ix-video
      width="200"
      controls
      source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
    ></ix-video>
    <ix-video
      width="300"
      height="160"
      fixed
      controls
      source="https://assets.imgix.video/videos/girl-reading-book-in-library.mp4"
    ></ix-video>
  </div>
</template>
