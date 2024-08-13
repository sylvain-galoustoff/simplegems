import TableCell from "./TableCell";
import styles from "./styles.module.css";

export type TableRowProps = {
  cells: Record<string, string>;
};

function TableRow({ cells }: TableRowProps) {
  const renderCells = Object.keys(cells).map((key) => (
    <TableCell key={key} field={key} value={cells[key]} />
  ));

  return <tr className={`${styles.tableRow}`}>{renderCells}</tr>;
}

export default TableRow;
