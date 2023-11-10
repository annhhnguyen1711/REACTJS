import { useState } from "react";
import ReactDOM from "react-dom/client";

function Favoritecolor() {
  const [color, setColor] = useState("red");
  return <h1> Myfavorite color is {color}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Favoritecolor />);
