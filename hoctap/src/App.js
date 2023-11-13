import "./style.css";
import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>PRODUCTS</h1>
      <div className="App">
        <Product
          img="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?cs=srgb&amp;dl=pexels-ray-piedra-1478442.jpg&amp;fm=jpg"
          name="Newproduce 1"
          desc="The newproduct of"
          price="200$"
        ></Product>
        <Product
          img="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?cs=srgb&amp;dl=pexels-ray-piedra-1478442.jpg&amp;fm=jpg"
          name="Newproduce 1"
          desc="The newproduct of"
          price="200$"
        ></Product>
      </div>
    </div>
  );
}

export default App;
