import { useState } from "react";
import InputField from "../InputField";
import ResultItem from "./ResultItem";
import styles from "./styles.module.css";

export type DataSearchProps = {
  id: string;
  data: string[];
  callback: (value: string) => void;
};

function DataSearch({ id, data, callback }: DataSearchProps) {
  const [showResults, setShowResult] = useState(false);

  const toggleResults = () => {
    setShowResult(!showResults);
  };

  const renderResults = data.map((result) => (
    <ResultItem key={result} value={result} callback={callback} />
  ));

  return (
    <div className={styles.dataSearch} id={`${id}-containner`} onClick={toggleResults}>
      <InputField id={id} />
      {showResults && <div className={styles.results}>{renderResults}</div>}
    </div>
  );
}

export default DataSearch;
