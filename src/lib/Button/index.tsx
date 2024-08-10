import styles from "./styles.module.css";

export type ButtonProps = {
  label: string;
};

function Button({ label }: ButtonProps) {
  return <button type="button">{label}</button>;
}

export default Button;
