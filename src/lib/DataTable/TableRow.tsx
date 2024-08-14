import styles from "./styles.module.css";

import { Label, Row } from ".";
import TableCell from "./TableCell";

export type TableRowProps = {
  row: Row;
  columns: string[];
  labels: Label;
};

function TableRow({ row, columns, labels }: TableRowProps) {
  const renderCells = columns.map((cell, index) => (
    <TableCell key={index} field={cell} value={row[cell]} />
  ));

  return (
    <tr
      className={`${styles.tableRow}`}
      style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
    >
      {renderCells}
    </tr>
  );
}

export default TableRow;
