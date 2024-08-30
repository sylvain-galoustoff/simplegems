import { IoCaretUpOutline } from "react-icons/io5";
import InputTimestamp from "./InputTimestamp";
import InputYearMonthDay from "./InputYearMonthDay";
import styles from "./styles.module.css";
import { useState } from "react";

function DebugDate() {
  const [inputFormat, setInputFormat] = useState("timestamp");
  const [dateObject, setDateObject] = useState(new Date());
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`${styles.debugDate} ${show ? styles.show : styles.hide}`}>
      <div className={styles.actions}>
        <div className={styles.actionsLeft}>
          <p
            className={inputFormat === "timestamp" ? styles.active : undefined}
            onClick={() => setInputFormat("timestamp")}
          >
            Timestamp
          </p>
          <p
            className={inputFormat === "yearmonthday" ? styles.active : undefined}
            onClick={() => setInputFormat("yearmonthday")}
          >
            Year, day, month
          </p>
        </div>
        <div className={styles.actionsRight}>
          <IoCaretUpOutline className={styles.showButton} onClick={toggleShow} />
        </div>
      </div>

      <div className={styles.debugContent}>
        {inputFormat === "timestamp" && (
          <InputTimestamp inputChange={(dateObj) => setDateObject(dateObj)} />
        )}

        {inputFormat === "yearmonthday" && (
          <InputYearMonthDay inputChange={(dateObj) => setDateObject(dateObj)} />
        )}

        <div className={styles.debugPart}>
          <p className={styles.partTitle}>Date object</p>
          <p className={styles.result}>{dateObject.toString()}</p>
        </div>
      </div>
    </div>
  );
}

export default DebugDate;
