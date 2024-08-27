import { ChangeEventHandler, FocusEventHandler } from "react";
import styles from "./styles.module.css";

export type TimeFieldProps = {
  label?: string;
  id: string;
  type?: "text" | "email" | "tel" | "search" | "password" | "number";
  placeholder?: string;
  variant?: "primary" | "success" | "danger" | "warning";
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
  value?: string;
  onChange?: (value: string) => void;
  isFocused?: (focused: boolean) => void;
};

function TimeField({
  label,
  id,
  type = "text",
  variant = "primary",
  placeholder,
  iconBefore,
  iconAfter,
  value,
  onChange,
  isFocused,
}: TimeFieldProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = () => {
    if (isFocused) {
      isFocused(true);
    }
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = () => {
    if (isFocused) {
      isFocused(false);
    }
  };

  return (
    <div className={`${styles.formGroup} ${styles[variant]}`} id={`${id}-container`}>
      {label && (
        <label className={`${styles.label}`} htmlFor={id} id={`${id}-label`}>
          {label}
        </label>
      )}
      <div className={`${styles.inputGroup}`} id={`${id}-input-group`}>
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {iconAfter && <div className={`${styles.icon} ${styles.after}`}>{iconAfter}</div>}
      </div>
    </div>
  );
}

export default TimeField;
