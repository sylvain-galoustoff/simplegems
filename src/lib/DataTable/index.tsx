import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import styles from "./styles.module.css";

export type Row = {
  [key: string]: string;
};

export type Label = {
  [key: string]: string;
};

export type DataTableProps = {
  rows: Row[];
  columns: string[];
  labels: Label;
};

function DataTable({ rows, columns, labels }: DataTableProps) {
  const renderRows = rows.map((row, index) => (
    <TableRow key={index} row={row} columns={columns} labels={labels} />
  ));

  return (
    <table className={`${styles.dataTable}`}>
      <TableHeader columns={columns} labels={labels} />
      <tbody className={`${styles.tbody}`}>{renderRows}</tbody>
    </table>
  );
}

export default DataTable;
