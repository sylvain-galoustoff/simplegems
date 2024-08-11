import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./lib/vars.css";
import "./index.css";
import Button from "./lib/Button";
import { IoPersonOutline } from "react-icons/io5";

const handleClick = () => console.log("click");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button
      id="test"
      label="Your name"
      variant="danger"
      iconAfter={<IoPersonOutline />}
      iconBefore={<IoPersonOutline />}
      onClick={handleClick}
    />
  </StrictMode>
);
