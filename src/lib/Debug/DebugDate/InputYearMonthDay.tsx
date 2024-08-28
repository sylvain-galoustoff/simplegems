import styles from "./styles.module.css";
import { ChangeEventHandler, useState, useEffect } from "react";

export type InputYearMonthDayProps = {
  inputChange: (timestamp: Date) => void;
};

function InputYearMonthDay({ inputChange }: InputYearMonthDayProps) {
  const [input, setInput] = useState({
    year: "2024",
    month: "8",
    day: "28",
  });

  useEffect(() => {
    const dateObj = new Date(
      Number(input.year),
      Number(input.month) - 1,
      Number(input.day)
    );
    inputChange(dateObj);
  }, [input]);

  const handleChangeYear: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput((prevState) => ({
      ...prevState,
      year: e.target.value,
    }));
  };

  const handleChangeMonth: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput((prevState) => ({
      ...prevState,
      month: e.target.value,
    }));
  };

  const handleChangeDay: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput((prevState) => ({
      ...prevState,
      day: e.target.value,
    }));
  };

  return (
    <div className={`${styles.debugPart} ${styles.yearMonthDay}`}>
      <input
        className={styles.input}
        placeholder="Year"
        type="text"
        value={input.year}
        onChange={handleChangeYear}
      />
      <input
        className={styles.input}
        placeholder="Month"
        type="text"
        value={input.month}
        onChange={handleChangeMonth}
      />
      <input
        className={styles.input}
        placeholder="day"
        type="text"
        value={input.day}
        onChange={handleChangeDay}
      />
    </div>
  );
}

export default InputYearMonthDay;
