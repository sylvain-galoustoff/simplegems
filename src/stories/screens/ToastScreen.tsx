import React from "react";
import Toaster from "../../lib/Notifications/Toaster";
import Button from "../../lib/Button";
import { useToastsList, useToast } from "../../lib/Notifications/hooks";
import "./styles.css";

export type ToastScreenType = {
  toastType: "success" | "warning" | "danger";
  toastMessage: string;
  automaticRemove?: boolean;
};

function ToastScreen({
  toastType,
  toastMessage,
  automaticRemove = false,
}: ToastScreenType) {
  const { toastList, removeToast } = useToastsList();
  const sendToast = useToast();

  const handleToast = () => {
    sendToast(toastType, toastMessage);
  };

  return (
    <div className="screen" id="toaster-screen">
      <Button variant="primary" label="Send toast" onClick={handleToast} />
      <Toaster
        id="taoster-in-screen"
        toastsList={toastList}
        onRemoveToast={removeToast}
        automaticRemove={automaticRemove}
      />
    </div>
  );
}

export default ToastScreen;
