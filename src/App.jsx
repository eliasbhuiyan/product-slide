import ProductSlide from "./ProductSlide";

const  productImages = [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ];

function App() {
  return (
    <div style={{ width: "500px" }}>
              <ProductSlide 
          images={productImages}
          settings={{
            direction: 'horizontal',
            thumbnailPosition: 'bottom',
            zoom: true,
            transitionDuration: 100
          }}
        />

    </div>
  );
}

export default App;
