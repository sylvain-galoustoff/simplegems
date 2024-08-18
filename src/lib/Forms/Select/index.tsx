import React from "react";
import styles from "./styles.module.css";

export type Option = {
  value: string;
  label: string;
};

export type SelectType = {
  label?: string;
  id: string;
  data: Option[];
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
};

function Select({ label, id, data, iconBefore, iconAfter }: SelectType) {
  const renderOptions = data.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className={`${styles.formGroup}`}>
      {label && (
        <label className={`${styles.label}`} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={`${styles.inputGroup}`}>
        {iconBefore && (
          <div className={`${styles.icon} ${styles.before}`}>{iconBefore}</div>
        )}
      </div>
      <select id={id}>{renderOptions}</select>
      {iconAfter && <div className={`${styles.icon} ${styles.after}`}>{iconAfter}</div>}
    </div>
  );
}

export default Select;
