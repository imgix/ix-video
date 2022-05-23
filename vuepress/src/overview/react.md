# Using `<ix-video>` custom element in React

## Installation

First ensure you've installed the package in your project:

```bash
npm i @imgix/ix-video
```

## Usage

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
