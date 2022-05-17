# 🔌 Installation

## Local

To install the library inside your project, run the following command:

```bash
npm i @imgix/ix-video
```

Now you can use the library in your project.

We recommend that you import the library in your application's main file so that the custom elements are registered for the entire application.

```jsx
import {IxVideo} from '@imgix/ix-video';
```

For more information, see the [usage guide](/overview/ix-video.html#basic-usage).

## Without build tools

To get started with @imgix/ix-video without a build step, copy the following code into you application's HTML file and open it in your browser:

```html
<script src="https://unpkg.com/@imgix/ix-video@latest"></script>
```

This will register the web components and make them available to your application.

::: warning
We highly recommend self-hosting the library if you are using it in a production environment.
:::
