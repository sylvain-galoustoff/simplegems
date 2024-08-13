import styles from "./styles.module.css";

export type TableHeaderTypes = {
  columns: Record<string, string>[];
};

function TableHeader({ columns }: TableHeaderTypes) {
  const renderColumns = columns.map((cell, index) => (
    <th key={`th-${index}`} className={`${styles.th}`}>
      <span className="column-label">{cell.label}</span>
    </th>
  ));

  return (
    <thead className={`${styles.tableHeader}`}>
      <tr
        className={`${styles.tableRow}`}
        style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
      >
        {renderColumns}
      </tr>
    </thead>
  );
}

export default TableHeader;
