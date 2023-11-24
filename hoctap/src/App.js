import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import validateEmail from "./ultils";

export default function App() {
  function handleEmailInput() {
    const [email, setEmail] = useState({
      value: "",
      isTouch: false,
      isValid: false,
    });
  }
  return (
    <div className="App">
      <Input
        name="email"
        type="text"
        lang="Email"
        onChange={handleEmailInput}
        isValid={email.isValid}
        isTouch={email.isTouch}
        placeholder="Email..."
        value={email.value}
        errorMsg="Enter a valid email"
      />
    </div>
  );
}
