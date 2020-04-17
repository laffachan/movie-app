import React from "react";
import Filter from "./Filter";
import styles from "./Filters.module.css";

function Filters({ categories, onFilterChange }) {
  return (
    <div className={styles.root}>
      {categories.map(category => (
        <Filter
          label={category.label}
          checked={category.checked}
          onFilterChange={() => onFilterChange(category.label)}
        />
      ))}
    </div>
  );
}

export default Filters;
