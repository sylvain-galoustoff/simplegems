import TableRow from "./TableRow";
import styles from "./styles.module.css";

export type DataTableProps = {
  rows: Record<string, string>[];
};

function DataTable({ rows }: DataTableProps) {
  const renderRows = rows.map((cells, index) => <TableRow key={index} cells={cells} />);

  return (
    <table className={`${styles.dataTable}`}>
      <thead className={`${styles.tableHeader}`}>
        <tr className={`${styles.tableRow}`}>
          <th className={`${styles.th}`}>
            <span className="column-label">Firstname</span>
          </th>
          <th className={`${styles.th}`}>
            <span className="column-label">Lastname</span>
          </th>
          <th className={`${styles.th}`}>
            <span className="column-label">Gender</span>
          </th>
          <th className={`${styles.th}`}>
            <span className="column-label">Age</span>
          </th>
        </tr>
      </thead>
      <tbody className={`${styles.tbody}`}>{renderRows}</tbody>
    </table>
  );
}

export default DataTable;
