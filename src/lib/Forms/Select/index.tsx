import { useState } from "react";
import styles from "./styles.module.css";
import Option from "./Option";
import { IoCaretDownOutline } from "react-icons/io5";

export type OptionType = {
  value: string;
  label: string;
};

export type SelectProps = {
  label?: string;
  id?: string;
  placeholder?: string;
  data: OptionType[];
  iconBefore?: JSX.Element;
  onChange?: (value: OptionType) => void;
};

function Select({
  label,
  id,
  data,
  iconBefore,
  placeholder = "Make a choice",
  onChange,
}: SelectProps) {
  const [selectLabel, setSelectLabel] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (option: OptionType) => {
    setSelectLabel(option.label);
    onChange && onChange(option);
    setShowOptions(false);
  };

  const renderOptions = data.map((item) => (
    <Option
      key={item.value}
      value={item.value}
      label={item.label}
      onClick={handleChange}
    />
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
        <div className={styles.select} onClick={() => setShowOptions(true)}>
          {selectLabel ? selectLabel : placeholder}
        </div>
        {showOptions && <div className={styles.options}>{renderOptions}</div>}
        <div className={`${styles.icon} ${styles.after}`}>
          <IoCaretDownOutline />
        </div>
      </div>
    </div>
  );
}

export default Select;
