import { Label } from ".";
import styles from "./styles.module.css";

type TableHeaderProps = {
  columns: string[];
  labels: Label;
};

function TableHeader({ columns, labels }: TableHeaderProps) {
  const renderCells = columns.map((cell) => (
    <th key={`th-${cell}`} className={`${styles.th}`}>
      <span className={`${styles.columnLabel}`}>{labels[cell]}</span>
    </th>
  ));

  return (
    <thead className={`${styles.tableHeader}`}>
      <tr
        className={`${styles.tableRow}`}
        style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
      >
        {renderCells}
      </tr>
    </thead>
  );
}

export default TableHeader;
