import TableCell from "./TableCell";
import styles from "./styles.module.css";

export type TableRowProps = {
  cells: Record<string, string>;
  columns: Record<string, string>[];
};

function TableRow({ cells, columns }: TableRowProps) {
  const columsFields = columns.map((column) => column["field"]);
  const renderCells = Object.keys(cells).map(
    (cell) =>
      columsFields.includes(cell) && (
        <TableCell key={cell} field={cell} value={cells[cell]} />
      )
  );

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
