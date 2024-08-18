import styles from "./styles.module.css";
import { OptionType } from ".";

export type OptionProps = {
  value: string;
  label: string;
  onClick: (value: OptionType) => void;
};

function Option({ value, label, onClick }: OptionProps) {
  const handleClick = () => {
    onClick({ value, label });
  };

  return (
    <div className={styles.option} onClick={handleClick}>
      {label}
    </div>
  );
}

export default Option;
