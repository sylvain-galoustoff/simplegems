import styles from "./styles.module.css";

export type ResultItemProps = {
  value: string;
  onClick: (value: string) => void;
  id: string;
};

function ResultItem({ value, onClick, id }: ResultItemProps) {
  const handleClick = () => {
    onClick(value);
  };
  return (
    <span className={`${styles.resultItem} ${id}-item`} onClick={handleClick}>
      {value}
    </span>
  );
}

export default ResultItem;
