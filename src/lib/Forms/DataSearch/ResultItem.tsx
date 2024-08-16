import styles from "./styles.module.css";

export type ResultItemProps = {
  value: string;
  callback: (value: string) => void;
};

function ResultItem({ value, callback }: ResultItemProps) {
  const handleClick = () => {
    callback(value);
  };
  return (
    <span className={styles.resultItem} onClick={handleClick}>
      {value}
    </span>
  );
}

export default ResultItem;
