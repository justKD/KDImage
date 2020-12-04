# KDImage

##### v 1.2.0 | © Cadence Holmes 2020 | MIT License

KDImage is a React component for displaying images with built-in lazy loading and large modal popover functionality. It also automatically displays skeleton placeholders while an image is being fetched.

A different image source can be provided for the main `src` and the larger modal preview, making it convenient to fetch and display a small version and a high resolution version independent from one another. KDImage ensures that its `src` resources are loaded only once as long as the component remains mounted.

Currently, it uses Material-UI internally and requires both `@material-ui/core` and `@material-ui/lab` as dependencies.

[![Edit KDImage](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/kdimage-i0fz1?fontsize=14&hidenavigation=1&theme=dark)

## TODO

- If the `src` and `largeSrc` urls are the same, only load the resource once. Currently, the `src` is fetched when the component is mounted, and the `largeSrc` is fetched the first time the image is clicked, even if they are the same url.
- Debounce option?
- Animation options.
- Zoom for large image?
- Remove dependency on Material-UI with custom solutions.
- Gallery component that aggregates large images into a paginated lightbox?

## Example

```
const url = `https://source.unsplash.com/random`;
<KDImage src={url} height={200} />
```

## Props

All props are optional.

| Prop                  | Type          | Description                                                                                                                                                                              |
| --------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src                   | string        | The `src` url to be passed to the `<img>`. If `null` or `undefined`, the `<img>` will still be rendered but without contents.                                                            |
| largeSrc              | string        | If different from the `src`, this should be the url to a larger/higher resolution image to be displayed in the popover modal when clicked. The `src` url is used if this value is empty. |
| alt                   | string        | The `alt` string to be passed to the `<img>`. Default is `""`.                                                                                                                           |
| width                 | string number | Each `KDImage` `<img>` is wrapped in a containing `<div>`. This is the CSS `width` value applied to the container. Default is `auto`.                                                    |
| height                | string number | The CSS `height` value applied to the container `<div>`. Default is `auto`.                                                                                                              |
| time                  | number        | Fade transition duration in milliseconds. Default is `800`.                                                                                                                              |
| showSkeleton          | boolean       | Determines whether the placeholder skeleton will be rendered. Default is `true`.                                                                                                         |
| background            | string        | CSS `background` property for the image container. Potentially useful if the `src` url is initially empty.                                                                               |
| onclick               | () => void    | Callback function to be passed as the `onClick` value of the container `<div>`. This will be called AFTER the `KDImage` default `onClick` behavior.                                      |
| onload                | () => void    | Callback function called when image is loaded.                                                                                                                                           |
| preventDefaultOnClick | boolean       | By default, clicking a `KDImage` will open a larger version in a modal popover before calling the `onclick` prop. Set `preventDefaultOnClick` to `true` to skip the default behavior.    |
| objectfit             | string        | CSS `object-fit` value applied to the `<img>`. Default is `cover`.                                                                                                                       |
| objectposition        | string        | CSS `object-position` value applied to the `<img>`. Default is `center`.                                                                                                                 |
