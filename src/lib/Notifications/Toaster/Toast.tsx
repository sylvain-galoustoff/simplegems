import styles from "./styles.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";

export type ToastProps = {
  variant?: "success" | "warning" | "danger" | "primary";
};

function Toast({ variant = "primary" }: ToastProps) {
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={`${styles.header}`}>
        <IoCloseCircleOutline />
      </div>
      <div className={`${styles.body}`}>Toast message !</div>
    </div>
  );
}

export default Toast;
