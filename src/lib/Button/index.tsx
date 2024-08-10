import styles from "./styles.module.css";

export type ButtonProps = {
  type?: "submit" | "button" | "reset";
  variant?: "primary" | "success" | "danger" | "warning";
  label: string;
  id?: string;
  className?: string;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
};

function Button({
  type = "button",
  variant,
  label,
  id,
  className,
  iconBefore,
  iconAfter,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${variant ? styles[variant] : ""} ${
        className ? className : ""
      }`}
      id={id}
    >
      {iconBefore && iconBefore}
      {label}
      {iconAfter && iconAfter}
    </button>
  );
}

export default Button;
