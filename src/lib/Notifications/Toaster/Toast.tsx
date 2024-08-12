import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";

export type ToastProps = {
  id: number;
  variant?: "success" | "warning" | "danger" | "primary";
  message: string;
  onRemoveToast: (toastId: number) => void;
  automaticRemove: boolean;
  animation?: "fromBottom" | "fromTop" | "fromRight" | "fromLeft";
};

function Toast({
  id,
  variant = "primary",
  message,
  onRemoveToast,
  automaticRemove,
  animation = "fromBottom",
}: ToastProps) {
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    if (automaticRemove) {
      setTimeout(() => {
        setRemoving(true);
        setTimeout(() => {
          onRemoveToast(id);
        }, 300);
      }, 5000);
    }
  }, []);

  const deleteToast = () => {
    setRemoving(true);
    setTimeout(() => {
      onRemoveToast(id);
    }, 300);
  };

  return (
    <div
      className={`${styles.toast} ${styles[variant]} ${styles[animation]} ${removing && styles.removing} toast`}
    >
      {automaticRemove && <div className={`${styles.progress}`} />}
      <div className={`${styles.header}`}>
        <IoCloseCircleOutline onClick={deleteToast} />
      </div>
      <div className={`${styles.body}`}>{message}</div>
    </div>
  );
}

export default Toast;
