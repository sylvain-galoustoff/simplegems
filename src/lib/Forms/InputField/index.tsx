import styles from "./styles.module.css";

export type InputFieldProps = {
  label: string;
  id: string;
  type: "text" | "email" | "tel" | "search";
  placeholder?: string;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
};

function InputField({
  label,
  id,
  type,
  placeholder,
  iconBefore,
  iconAfter,
}: InputFieldProps) {
  return (
    <div className={`${styles.formGroup}`}>
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
