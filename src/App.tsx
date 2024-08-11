import React from "react";
import Toaster from "./lib/Notifications/Toaster";
import { useToastsList, useToast } from "./lib/Notifications/hooks";
import Button from "./lib/Button";

function App() {
  const { toastList } = useToastsList();
  const sendToast = useToast();

  const handleToast = () => {
    sendToast("danger", "Message de danger");
  };

  return (
    <div id="app">
      <Toaster toastsList={toastList} />
      <Button type="button" variant="primary" label="Send toast" onClick={handleToast} />
    </div>
  );
}

export default App;
