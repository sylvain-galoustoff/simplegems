import { useEffect, useState } from "react";
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
  defaultValue?: string;
};

function Select({
  label,
  id,
  data,
  iconBefore,
  placeholder = "Make a choice",
  onChange,
  defaultValue,
}: SelectProps) {
  const [selectLabel, setSelectLabel] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (defaultValue) setSelectLabel(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const addCloseListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowOptions(false);
    };

    window.addEventListener("keydown", addCloseListener);

    return () => {
      window.removeEventListener("keypress", addCloseListener);
    };
  }, []);

  useEffect(() => {
    if (showOptions) {
      const handleArrowNavigation = (e: KeyboardEvent) => {
        const options = document.querySelectorAll(`#${id}-options [role="option"]`);
        let index = Array.prototype.indexOf.call(options, document.activeElement);

        if (e.key === "ArrowDown") {
          index = (index + 1) % options.length;
          (options[index] as HTMLElement).focus();
        } else if (e.key === "ArrowUp") {
          index = (index - 1 + options.length) % options.length;
          (options[index] as HTMLElement).focus();
        } else if (e.key === "Enter" && index >= 0) {
          (options[index] as HTMLElement).click();
        }
      };

      window.addEventListener("keydown", handleArrowNavigation);
      return () => window.removeEventListener("keydown", handleArrowNavigation);
    }
  }, [showOptions, id]);

  const handleChange = (option: OptionType) => {
    setSelectLabel(option.label);
    onChange && onChange(option);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
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
    <div className={`${styles.formGroup}`} id={`${id}-container`}>
      {label && (
        <label className={`${styles.label}`} htmlFor={id} id={`${id}-label`}>
          {label}
        </label>
      )}
      <div
        className={`${styles.inputGroup}`}
        id={`${id}-input-group`}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleOptions()}
        aria-haspopup="listbox"
        aria-expanded={showOptions}
        aria-labelledby={`${id}-label`}
      >
        {iconBefore && (
          <div className={`${styles.icon} ${styles.before}`} id={`${id}-icon-before`}>
            {iconBefore}
          </div>
        )}
        <div className={styles.select} id={`${id}`} onClick={toggleOptions}>
          {selectLabel ? selectLabel : placeholder}
        </div>
        {showOptions && (
          <div
            className={styles.options}
            id={`${id}-options`}
            role="listbox"
            aria-activedescendant={`${id}-option-${selectLabel}`}
          >
            {renderOptions}
          </div>
        )}
        <div className={`${styles.icon} ${styles.after}`}>
          <IoCaretDownOutline />
        </div>
      </div>
    </div>
  );
}

export default Select;
