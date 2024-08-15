import styles from "./styles.module.css";

import { Label, Row } from ".";
import TableCell from "./TableCell";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button";

export type TableRowProps = {
  row: Row;
  columns: string[];
  labels: Label;
  deleteButton?: boolean;
  onDelete?: (obj: Row) => void | Promise<void>;
};

function TableRow({
  row,
  columns,
  labels,
  deleteButton = false,
  onDelete,
}: TableRowProps) {
  const renderCells = columns.map((cell, index) => (
    <TableCell key={index} field={cell} value={row[cell]} />
  ));

  return (
    <tr
      className={`${styles.tableRow}`}
      style={{
        gridTemplateColumns: `repeat(${columns.length}, 1fr) 50px`,
      }}
    >
      {renderCells}
      <td className={`${styles.td}`}>
        {deleteButton && (
          <Button
            type="submit"
            className={`${styles.deleteButton}`}
            label={<IoCloseOutline />}
            onClick={onDelete && (() => onDelete(row))}
          />
        )}
      </td>
    </tr>
  );
}

export default TableRow;
