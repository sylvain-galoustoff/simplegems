import styles from "./styles.module.css";
import { ChangeEventHandler, useState } from "react";

export type InputTimestampProps = {
  inputChange: (timestamp: Date) => void;
};

function InputTimestamp({ inputChange }: InputTimestampProps) {
  const [input, setInput] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
    const dateObj = new Date(Number(e.target.value));
    inputChange(dateObj);
  };

  return (
    <div className={`${styles.debugPart} ${styles.inputPart}`}>
      <input
        className={styles.input}
        placeholder="Timestamp"
        type="text"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputTimestamp;
