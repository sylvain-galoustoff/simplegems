import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import styles from "./styles.module.css";

export type DataTableProps = {
  rows: Record<string, string>[];
  columns: Record<string, string>[];
};

function DataTable({ rows, columns }: DataTableProps) {
  const renderRows = rows.map((cells, index) => (
    <TableRow key={index} cells={cells} columns={columns} />
  ));

  return (
    <table className={`${styles.dataTable}`}>
      <TableHeader columns={columns} />
      <tbody className={`${styles.tbody}`}>{renderRows}</tbody>
    </table>
  );
}

export default DataTable;
