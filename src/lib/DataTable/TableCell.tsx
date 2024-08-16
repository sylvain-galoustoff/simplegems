import { ChangeEventHandler } from "react";
import styles from "./styles.module.css";

export type TableCellProp = {
  value: string;
  field: string;
};

function TableCell({ field, value }: TableCellProp) {
  const updateField: ChangeEventHandler<HTMLInputElement> = (e) => {
    return null;
  };

  return (
    <td className={`${styles.td}`}>
      <form className={`${styles.cellForm}`}>
        <input
          type="text"
          className={`${styles.cellInput} ${!value ? styles.nodata : ""}`}
          value={value ? value : "non renseigné"}
          onChange={(e) => updateField(e)}
        />
      </form>
    </td>
  );
}

export default TableCell;
