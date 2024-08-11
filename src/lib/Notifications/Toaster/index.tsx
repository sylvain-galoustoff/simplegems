import { ToastData } from "../hooks";
import Toast from "./Toast";
import styles from "./styles.module.css";

export type ToasterType = {
  id?: string;
  toastsList: ToastData[];
  onRemoveToast: (toastId: number) => void;
  automaticRemove?: boolean;
  animation?: "fromBottom" | "fromTop" | "fromRight" | "fromLeft";
};

function Toaster({
  id = "simplegem-toaster",
  toastsList,
  onRemoveToast,
  automaticRemove = false,
  animation = "fromBottom",
}: ToasterType) {
  const renderToast = toastsList.map((toast) => (
    <Toast
      key={toast.id}
      id={toast.id}
      variant={toast.variant}
      message={toast.message}
      onRemoveToast={onRemoveToast}
      automaticRemove={automaticRemove}
      animation={animation}
    />
  ));
  return (
    <div className={`${styles.toaster}`} id={id}>
      {renderToast}
    </div>
  );
}

export default Toaster;
