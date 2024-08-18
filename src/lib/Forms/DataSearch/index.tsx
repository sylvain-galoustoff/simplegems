import { useEffect, useState } from "react";
import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";
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
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setFilteredData(data);
    const addCloseListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowResult(false);
    };

    window.addEventListener("keydown", addCloseListener);

    return () => {
      window.removeEventListener("keydown", addCloseListener);
    };
  }, [data]);

  const toggleResults = () => {
    setShowResult(!showResults);
  };

  const handleChange = (term: string) => {
    setShowResult(true);
    setInputValue(term);
    callback(term);
    const newFilteredData = [...data].filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };

  const handleClick = (term: string) => {
    setInputValue(term);
    callback(term);
  };

  const renderResults = filteredData.map((result) => (
    <ResultItem key={result} value={result} onClick={handleClick} id={id} />
  ));

  return (
    <div className={styles.dataSearch} id={`${id}-container`} onClick={toggleResults}>
      <InputField
        id={id}
        onChange={handleChange}
        value={inputValue}
        iconAfter={<IoSearchOutline />}
      />
      {showResults && (
        <div className={styles.results} id={`${id}-results`}>
          <span
            className={`${styles.resultItem} ${styles.resultHeader}`}
            id={`${id}-results-header`}
            onClick={toggleResults}
          >
            <span>Press [ESC] key or clic here to close</span>
            <IoCloseOutline />
          </span>
          {renderResults}
        </div>
      )}
    </div>
  );
}

export default DataSearch;
