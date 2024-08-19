import { ChangeEventHandler, FocusEventHandler } from "react";
import styles from "./styles.module.css";

export type TeaxtAreaProps = {
  label?: string;
  id: string;
  placeholder?: string;
  variant?: "primary" | "success" | "danger" | "warning";
  cols: number;
  rows: number;
  value?: string;
  onChange?: (value: string) => void;
  isFocused?: (focused: boolean) => void;
};

function TextArea({
  label,
  id,
  placeholder,
  variant,
  cols,
  rows,
  value,
  onChange,
  isFocused,
}: TeaxtAreaProps) {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFocus: FocusEventHandler<HTMLTextAreaElement> = () => {
    if (isFocused) {
      isFocused(true);
    }
  };

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = () => {
    if (isFocused) {
      isFocused(false);
    }
  };

  return (
    <div
      className={`${styles.formGroup} ${variant ? styles[variant] : ""}`}
      id={`${id}-containner`}
    >
      {label && (
        <label className={`${styles.label}`} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={`${styles.input}`}
        id={id}
        cols={cols}
        rows={rows}
        value={value && value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
      />
    </div>
  );
}

export default TextArea;
