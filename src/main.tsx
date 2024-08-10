import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./lib/vars.css";
import "./index.css";
import Button from "./lib/Button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button label="test" />
  </StrictMode>
);
