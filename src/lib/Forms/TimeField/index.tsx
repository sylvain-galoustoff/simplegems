import { ChangeEventHandler, FocusEventHandler } from "react";
import styles from "./styles.module.css";
import { IoTimeOutline } from "react-icons/io5";

export type TimeFieldProps = {
  label?: string;
  id: string;
  variant?: "primary" | "success" | "danger" | "warning";
  value?: string;
  onChange?: (value: string) => void;
  isFocused?: (focused: boolean) => void;
};

function TimeField({
  label,
  id,
  variant = "primary",
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
        <div className={`${styles.icon} ${styles.before}`}>
          <IoTimeOutline />
        </div>

        <input
          className={`${styles.input}`}
          type="time"
          id={id}
          value={value && value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
        />
      </div>
    </div>
  );
}

export default TimeField;
