# Product Slide

A simple and customizable product slider component for React that allows users to change the product image by clicking on small images and zoom into the large image on hover.

## Installation

Install the package using npm:

```bash
npm install product-slide
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
    direction: "horizontal", // "vertical"
    zoom: true, // false
  };
  return (
    <div style={{ width: "500px" }}>
      <ProductSlide settings={settings} api={API.images} />
    </div>
  );
}

export default App;
```
