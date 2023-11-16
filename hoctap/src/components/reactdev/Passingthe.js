import { useState } from "react";

export default function Passing() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge((a) => a + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}
