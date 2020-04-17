import React from "react";

function Filter({ label, checked, onFilterChange }) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onFilterChange} />
      {label}
    </label>
  );
}

export default Filter;
