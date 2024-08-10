import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./lib/vars.css";
import "./index.css";
import Button from "./lib/Button";
import { IoBalloon } from "react-icons/io5";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button
      label="Button"
      variant="danger"
      iconBefore={<IoBalloon />}
      iconAfter={<IoBalloon />}
      className="test banane"
      id="test-id"
      type="reset"
    />
  </StrictMode>
);
