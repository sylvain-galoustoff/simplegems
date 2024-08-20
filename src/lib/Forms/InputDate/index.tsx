import DatePicker from "react-datepicker";
import styles from "./styles.module.css";
import { IoCalendarNumberOutline } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";

export type InputDateProps = {
  label?: string;
  id?: string;
};

function InputDate({ label, id }: InputDateProps) {
  return (
    <div className={`${styles.formGroup}`}>
      {label && (
        <label className={`${styles.label}`} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={`${styles.inputGroup}`} id={styles.sgDatepicker}>
        <div className={`${styles.icon} ${styles.before}`}>
          <IoCalendarNumberOutline />
        </div>
        <DatePicker />
      </div>
    </div>
  );
}

export default InputDate;
