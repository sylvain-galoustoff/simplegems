import { useState } from "react";
import { OptionType } from "../Select";
import styles from "./styles.module.css";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";

export type SliderSelectProps = {
  id: string;
  label?: string;
  options: OptionType[];
};

function SliderSelect({ id, label, options }: SliderSelectProps) {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const changeSlide = (direction: string) => {
    let newIndex = slideIndex;
    if (direction === "forward") {
      if (slideIndex === options.length - 1) {
        newIndex = 0;
      } else {
        newIndex = slideIndex + 1;
      }
    } else if (direction === "back") {
      if (slideIndex === 0) {
        newIndex = options.length - 1;
      } else {
        newIndex = slideIndex - 1;
      }
    }
    setSlideIndex(newIndex);
  };

  const renderOptions = options.map((option, index) => (
    <p
      key={index}
      className={styles.option}
      style={{ opacity: index === slideIndex ? 1 : 0 }}
      data-value={option.value}
    >
      {option.label}
    </p>
  ));

  return (
    <div className={`${styles.formGroup}`} id={`${id}-container`}>
      {label && (
        <label className={`${styles.label}`} htmlFor={id} id={`${id}-label`}>
          {label}
        </label>
      )}
      <div className={`${styles.inputGroup}`} id={`${id}-input-group`}>
        <div
          className={`${styles.icon} ${styles.before}`}
          onClick={() => changeSlide("back")}
        >
          <IoCaretBack />
        </div>
        <div className={styles.select} id={`${id}`}>
          <div
            className={styles.optionsWrapper}
            style={{
              gridTemplateColumns: `repeat(${options.length}, 100%)`,
              transform: `translateX(-${slideIndex * 100}%)`,
            }}
          >
            {renderOptions}
          </div>
        </div>
        <div
          className={`${styles.icon} ${styles.after}`}
          onClick={() => changeSlide("forward")}
        >
          <IoCaretForward />
        </div>
      </div>
    </div>
  );
}

export default SliderSelect;
