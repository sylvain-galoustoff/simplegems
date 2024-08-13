import styles from "./styles.module.css";

export type TableCellProps = {
  field: string;
  value: string;
};

function TableCell({ field, value }: TableCellProps) {
  const setInputValue = (inputValue: string) => {
    console.log(field + ":" + inputValue);
  };

  return (
    <td className={`${styles.td}`}>
      <form className={`${styles.cellForm}`}>
        <input
          type="text"
          className={`${styles.cellInput}`}
          value={value ? value : "non renseigné"}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </td>
  );
}

export default TableCell;
