import { ChangeEventHandler, useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";

export type TableCellProp = {
  value: string;
  field: string;
  readOnly: string[];
};

function TableCell({ field, value, readOnly }: TableCellProp) {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isReadOnly && inputRef.current) {
      inputRef.current.select();
    }
  }, [isReadOnly]);

  const toggleEdit = () => {
    !readOnly.includes(field) && setIsReadOnly(!isReadOnly);
  };

  const updateField: ChangeEventHandler<HTMLInputElement> = (e) => {
    return null;
  };

  return (
    <td className={`${styles.td}`}>
      <form className={`${styles.cellForm}`}>
        <input
          type="text"
          ref={inputRef}
          className={`${styles.cellInput} ${!value ? styles.nodata : ""}`}
          value={value ? value : "non renseigné"}
          onChange={(e) => updateField(e)}
          onClick={toggleEdit}
          onBlur={toggleEdit}
          readOnly={readOnly.includes(field) && true}
        />
      </form>
    </td>
  );
}

export default TableCell;
