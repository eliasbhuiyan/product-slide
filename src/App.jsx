import ProductSlide from "./ProductSlide";

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
