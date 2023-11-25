import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import XmlHttpExample from "./components/XmlHttpRequestExample";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <XmlHttpExample></XmlHttpExample>
  </StrictMode>
);
