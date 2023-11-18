import "./style.css";
import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";
import React, { useState } from "react";
export default function App() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setVaild] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.firstName && value.lastName && value.email) {
      setValue(true);
    }
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>PRODUCTS</h1>
//       <div className="App">
//         <Product
//           img="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?cs=srgb&amp;dl=pexels-ray-piedra-1478442.jpg&amp;fm=jpg"
//           name="Newproduce 1"
//           desc="The newproduct of"
//           price="200$"
//         ></Product>
//         <Product
//           img="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?cs=srgb&amp;dl=pexels-ray-piedra-1478442.jpg&amp;fm=jpg"
//           name="Newproduce 1"
//           desc="The newproduct of"
//           price="200$"
//         ></Product>
//       </div>
//     </div>
//   );
// }

// export default App;
