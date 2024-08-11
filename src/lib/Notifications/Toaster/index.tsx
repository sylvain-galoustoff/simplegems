import { ToastData } from "../hooks";
import Toast from "./Toast";
import styles from "./styles.module.css";

export type ToasterType = {
  toastsList: ToastData[];
  automaticRemove?: boolean;
};

function Toaster({ toastsList, automaticRemove = false }: ToasterType) {
  const renderToast = toastsList.map((toast) => (
    <Toast
      key={toast.id}
      variant={toast.variant}
      message={toast.message}
      automaticRemove={automaticRemove}
    />
  ));
  return <div className={`${styles.toaster}`}>{renderToast}</div>;
}

export default Toaster;
