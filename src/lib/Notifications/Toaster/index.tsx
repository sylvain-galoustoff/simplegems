import Toast from "./Toast";
import styles from "./styles.module.css";

function Toaster() {
  return (
    <div className={`${styles.toaster}`}>
      <Toast />
      <Toast variant="success" />
      <Toast variant="warning" />
      <Toast variant="danger" />
    </div>
  );
}

export default Toaster;
