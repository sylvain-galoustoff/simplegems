import styles from "./styles.module.css";
import { ChangeEventHandler, useEffect, useState } from "react";

export type DebugDateProps = {
  input: string | number | Date;
};

function DebugDate({}: DebugDateProps) {
  const [input, setInput] = useState("");
  const [dateObject, setDateObject] = useState(new Date());

  useEffect(() => {
    const newDateObject = new Date(Number(input));
    setDateObject(newDateObject);
  }, [input]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.debugDate}>
      <div className={styles.debugPart}>
        <input
          className={styles.input}
          placeholder="Timestamp"
          type="text"
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className={styles.debugPart}>
        <p className={styles.partTitle}>Date object</p>
        <p className={styles.result}>{dateObject.toString()}</p>
      </div>
    </div>
  );
}

export default DebugDate;
