# Product Slide

A simple and customizable product slider component for React that allows users to change the product image by clicking on small images and zoom into the large image on hover.

| Horizontal | Vertical|
| :-------- | :------- |
|<img src="/src/assets/slide-x.png" alt="slide-x" />      | <img src="/src/assets/slide-y.png" alt="slide-x" /> |



## Installation

To install `product-slide` in your project, run the following command in your terminal:

```bash
npm install product-slide
```

## Usage
## 1. Import the Component:
```javascript
import ProductSlide from "product-slide";
```
## 2. Prepare Image Data:
Create an array of image URLs to display in the slider. You can use static image paths, import images, or fetch them dynamically from an API. Here's an example:

```javascript
const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};
```
## 3. Configure the Slider:
The `ProductSlide` component accepts a `settings` prop as an object to customize its behavior:

- `direction`: (Optional, default: `"horizontal"`) Sets the slider's orientation (horizontal or vertical).
- `zoom`: (Optional, default: `true`) Enables or disables zoom functionality for individual slides.

```javascript
const settings = {
  direction: "horizontal", // or "vertical"
  zoom: true,          // or false
};
```
## 4. Render the Slider:
Pass the image data (`api`) and configuration settings (`settings`) to the `ProductSlide` component:

```javascript
function App() {
  return (
    <div style={{ width: "500px" }}>
      <ProductSlide settings={settings} api={API.images} />
    </div>
  );
}
```
## Example

```javascript
import ProductSlide from "product-slide";

const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};

function App() {
  const settings = {
    direction: "horizontal", // or "vertical"
    zoom: true,          // or false
  };
  return (
    <div style={{ width: "500px" }}>
      <ProductSlide settings={settings} api={API.images} />
    </div>
  );
}

export default App;
```

## License
MIT

### We hope you find `product-slide` useful for creating visually appealing and interactive product sliders in your React applications!