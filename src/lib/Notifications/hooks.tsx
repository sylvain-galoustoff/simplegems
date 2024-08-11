import { useEffect, useState } from "react";

export type ToastData = {
  id: number;
  variant: "primary" | "success" | "warning" | "danger";
  message: string;
};

export interface AddToastEvent extends CustomEvent<ToastData> {}

export const useToastsList = () => {
  const [toastList, setToastList] = useState<ToastData[]>([]);

  useEffect(() => {
    const handleAddToast = (event: Event) => {
      const customEvent = event as AddToastEvent;
      const newToast = customEvent.detail;
      setToastList((prevToastList) => [...prevToastList, newToast]);
    };

    window.addEventListener("addToast", handleAddToast);

    return () => {
      window.removeEventListener("addToast", handleAddToast);
    };
  }, []);

  const removeToast = (toastId: number) => {
    setToastList((prevState) => prevState.filter((toast) => toast.id !== toastId));
  };

  return { toastList, removeToast };
};

export const useToast = () => {
  const dispatchToast = (type: string, message: string) => {
    const toastEvent = new CustomEvent("addToast", {
      detail: {
        id: Date.now(),
        type,
        message,
      },
    });
    window.dispatchEvent(toastEvent);
  };

  return dispatchToast;
};
