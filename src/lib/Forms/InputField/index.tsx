import { ChangeEventHandler } from "react";
import styles from "./styles.module.css";

export type InputFieldProps = {
  label: string;
  id: string;
  type?: "text" | "email" | "tel" | "search" | "password";
  placeholder?: string;
  variant?: "primary" | "success" | "danger" | "warning";
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  value?: string;
  onChange?: (value: string) => void;
};

function InputField({
  label,
  id,
  type = "text",
  variant = "primary",
  placeholder,
  iconBefore,
  iconAfter,
  value,
  onChange,
}: InputFieldProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`${styles.formGroup} ${styles[variant]}`}>
      <label className={`${styles.label}`} htmlFor={id}>
        {label}
      </label>
      <div className={`${styles.inputGroup}`}>
        {iconBefore && (
          <div className={`${styles.icon} ${styles.before}`}>{iconBefore}</div>
        )}
        <input
          className={`${styles.input}`}
          type={type}
          placeholder={placeholder}
          id={id}
          value={value && value}
          onChange={handleChange}
        />
        {iconAfter && <div className={`${styles.icon} ${styles.after}`}>{iconAfter}</div>}
      </div>
    </div>
  );
}

export default InputField;
