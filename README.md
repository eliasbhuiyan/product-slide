# Product Slide

A highly customizable and accessible React component for displaying product image slides with zoom and thumbnail navigation. Ideal for e-commerce and product showcase applications.

| Horizontal | Vertical|
| :-------- | :------- |
|<img src="/src/assets/slide-x.png" alt="slide-x" />      | <img src="/src/assets/slide-y.png" alt="slide-x" /> |

## 📖 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Examples](#examples)
- [Styling](#styling)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

---

## 🚀 Features

- 📸 Display multiple product images
- 🔍 Image zoom on hover
- 📎 Customizable thumbnail navigation
- ↔️ Horizontal or vertical orientation
- 🎛 Fully configurable styles and behaviors
- 🎯 Keyboard navigation (left/right arrows)
- ♿️ Accessible markup with ARIA attributes

---

## 📦 Installation

```bash
npm install product-slide
```
## 🔧 Usage

``` javascript
import ProductSlide from "product-slide";

const images = [
  "/images/product1.jpg",
  "/images/product2.jpg",
  "/images/product3.jpg",
];

function App() {
  return (
    <ProductSlide
      images={images}
      settings={{
        direction: "horizontal",
        zoom: true,
        thumbnailPosition: "bottom",
        transitionDuration: 300,
      }}
    />
  );
}

```
## 🛠 Props

| Prop                         | Type                    | Description                           |
| ---------------------------- | ----------------------- | ------------------------------------- |
| `images`                     | `string[]` *(required)* | Array of image URLs to display        |
| `settings`                   | `object`                | Configuration object (see below)      |
| `className`                  | `string`                | Custom class for root wrapper         |
| `style`                      | `object`                | Custom inline styles for root wrapper |
| `mainImageWrapperClassName`  | `string`                | Class for the main image wrapper      |
| `mainImageWrapperStyle`      | `object`                | Style for the main image wrapper      |
| `mainImageClassName`         | `string`                | Class for the main image              |
| `mainImageStyle`             | `object`                | Style for the main image              |
| `zoomedImageClassName`       | `string`                | Class for zoomed overlay              |
| `zoomedImageStyle`           | `object`                | Style for zoomed overlay              |
| `thumbnailsWrapperClassName` | `string`                | Class for thumbnail wrapper           |
| `thumbnailsWrapperStyle`     | `object`                | Style for thumbnail wrapper           |
| `thumbnailClassName`         | `string`                | Class for each thumbnail              |
| `thumbnailStyle`             | `object`                | Style for each thumbnail              |
| `activeThumbnailClassName`   | `string`                | Class for active thumbnail            |
| `activeThumbnailStyle`       | `object`                | Style for active thumbnail            |
| `onSlideChange`              | `function`              | Callback triggered when slide changes |

## Settings Object

| Key                  | Type                                     | Default        | Description                 |
| -------------------- | ---------------------------------------- | -------------- | --------------------------- |
| `direction`          | `"horizontal" \| "vertical"`             | `"horizontal"` | Layout direction            |
| `zoom`               | `boolean`                                | `true`         | Enable/disable zoom feature |
| `thumbnailPosition`  | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"`     | Thumbnail placement         |
| `transitionDuration` | `number`                                 | `300`          | Transition time in ms       |

## 💡 Examples

```jsx
<ProductSlide
  images={["/img1.jpg", "/img2.jpg"]}
  settings={{ direction: "vertical", zoom: false }}
  mainImageClassName="custom-main-img"
  thumbnailClassName="thumb-img"
/>
```

## 🧯 Troubleshooting

- ***Images not showing:*** Ensure valid URLs and that the images prop is correctly passed.
- ***Zoom not working:*** Check if settings.zoom is set to true and your image is large enough to zoom.
- ***Keyboard navigation not working:*** Make sure the component is focusable (tab index is set).

## License
MIT

### We hope you find `product-slide` useful for creating visually appealing and interactive product sliders in your React applications!