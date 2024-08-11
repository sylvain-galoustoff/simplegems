import styles from "./styles.module.css";

export type InputFieldProps = {
  label: string;
  id: string;
  type: "text" | "email" | "tel" | "search" | "password";
  placeholder?: string;
  variant?: "primary" | "success" | "danger" | "warning";
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
};

function InputField({
  label,
  id,
  type,
  variant = "primary",
  placeholder,
  iconBefore,
  iconAfter,
}: InputFieldProps) {
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
        />
        {iconAfter && <div className={`${styles.icon} ${styles.after}`}>{iconAfter}</div>}
      </div>
    </div>
  );
}

export default InputField;
