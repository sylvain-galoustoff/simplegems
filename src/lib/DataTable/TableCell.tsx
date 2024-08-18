import { ChangeEventHandler, useEffect, useState, useRef, FormEvent } from "react";
import styles from "./styles.module.css";
import { Row } from ".";

export type TableCellProp = {
  row: Row;
  value: string;
  field: string;
  readOnly?: string[];
  onSubmitField?: (row: Row) => void;
};

function TableCell({ row, field, value, readOnly, onSubmitField }: TableCellProp) {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (!isReadOnly && inputRef.current) {
      inputRef.current.select();
    }
  }, [isReadOnly]);

  const toggleEdit = () => {
    readOnly && !readOnly.includes(field) && setIsReadOnly(!isReadOnly);
  };

  const updateField: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const submitField = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRow = {
      ...row,
      [field]: inputValue,
    };
    onSubmitField && onSubmitField(newRow);
    inputRef.current && inputRef.current.blur();
  };

  return (
    <td className={`${styles.td}`}>
      <form className={`${styles.cellForm}`} onSubmit={(e) => submitField(e)}>
        <input
          type="text"
          ref={inputRef}
          className={`${styles.cellInput} ${!value ? styles.nodata : ""}`}
          value={inputValue ? inputValue : "non renseigné"}
          onChange={(e) => updateField(e)}
          onClick={toggleEdit}
          onBlur={toggleEdit}
          readOnly={readOnly && readOnly.includes(field) && true}
        />
      </form>
    </td>
  );
}

export default TableCell;
