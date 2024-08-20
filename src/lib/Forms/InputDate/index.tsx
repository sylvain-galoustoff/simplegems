import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.css";
import "./datepicker.css";
import { IoCalendarNumberOutline } from "react-icons/io5";

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
      <div className={`${styles.inputGroup}`} id="sgDatepicker">
        <div className={`${styles.icon} ${styles.before}`}>
          <IoCalendarNumberOutline />
        </div>
        <DatePicker />
      </div>
    </div>
  );
}

export default InputDate;
