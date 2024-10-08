import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.css";
import "./datepicker.css";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { fr } from "date-fns/locale";
registerLocale("fr", fr);
import { Locale } from "date-fns";

registerLocale("fr", fr as Locale);

export type InputDateProps = {
  label?: string;
  id?: string;
  defaultValue: Date;
  onChange?: (date: Date) => void;
};

function InputDate({ label, id, defaultValue, onChange }: InputDateProps) {
  const [startDate, setStartDate] = useState<Date>(
    defaultValue ? defaultValue : new Date()
  );

  const onDateChange = (date: Date | null) => {
    date && setStartDate(date);
    onChange && date && onChange(date);
  };

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
        <DatePicker
          selected={startDate}
          onChange={(date) => onDateChange(date)}
          locale={fr}
          dateFormat="dd / MM / yyyy"
          placeholderText="jj / mm / aaaa"
        />
      </div>
    </div>
  );
}

export default InputDate;
