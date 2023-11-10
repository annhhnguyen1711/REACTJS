import { useState } from "react";
import ReactDom from "react-dom/client";

function Favoritecolor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My facorite color is {color}</h1>
      <button type="button" onClick={() => setColor("bule")}>
        Bule
      </button>
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById("rooot"));
root.render(<Favoritecolor />);
