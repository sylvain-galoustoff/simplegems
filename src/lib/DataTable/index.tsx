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
  deleteButton: boolean;
  onDelete: (row: Row) => void;
  onSubmitField: (row: Row) => void;
  readOnly: string[];
};

function DataTable({
  rows,
  columns,
  labels,
  deleteButton,
  onDelete,
  onSubmitField,
  readOnly,
}: DataTableProps) {
  const renderRows = rows.map((row, index) => (
    <TableRow
      key={index}
      row={row}
      columns={columns}
      labels={labels}
      deleteButton={deleteButton}
      onDelete={onDelete}
      readOnly={readOnly}
      onSubmitField={onSubmitField}
    />
  ));

  return (
    <table className={`${styles.dataTable}`}>
      <TableHeader columns={columns} labels={labels} />
      <tbody className={`${styles.tbody}`}>{renderRows}</tbody>
    </table>
  );
}

export default DataTable;
