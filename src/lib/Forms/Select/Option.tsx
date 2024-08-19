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
    <div
      role="option"
      tabIndex={0}
      className={styles.option}
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && onClick({ value, label })}
    >
      {label}
    </div>
  );
}

export default Option;
