import styles from "./styles.module.css";

export type ButtonProps = {
  type?: "submit" | "button" | "reset";
  label: string;
};

function Button({ type = "button", label }: ButtonProps) {
  return (
    <button type={type} className={`${styles.button}`}>
      {label}
    </button>
  );
}

export default Button;
