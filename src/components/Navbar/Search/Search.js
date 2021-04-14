import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search in Wine.Delivery" />
      <button type="button">SEARCH</button>
    </div>
  );
};

export default Search;
