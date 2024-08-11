import styles from "./styles.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";

export type ToastProps = {
  variant?: "success" | "warning" | "danger" | "primary";
  message: string;
  automaticRemove: boolean;
};

function Toast({ variant = "primary", message, automaticRemove }: ToastProps) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={`${styles.header}`}>
        {automaticRemove && <div className={`${styles.progress}`} />}
        <IoCloseCircleOutline />
      </div>
      <div className={`${styles.body}`}>{message}</div>
    </div>
  );
}

export default Toast;
