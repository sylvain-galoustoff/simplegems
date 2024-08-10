import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./lib/Button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button label="test" />
  </StrictMode>
);
