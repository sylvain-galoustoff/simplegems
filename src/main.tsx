import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./lib/vars.css";
import "./index.css";
import InputField from "./lib/Forms/InputField";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InputField type="text" id="test" label="Your name" placeholder="Ex : John Doe" />
  </StrictMode>
);
