import styles from "./styles.module.css";

export type ButtonProps = {
  type?: "submit" | "button" | "reset";
  label: string;
  id?: string;
  className?: string;
};

function Button({ type = "button", label, id, className }: ButtonProps) {
  return (
    <button type={type} className={`${styles.button} ${className}`} id={id}>
      {label}
    </button>
  );
}

export default Button;
