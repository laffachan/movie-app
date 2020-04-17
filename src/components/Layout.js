import React from "react";
import styles from "./Layout.module.css";
import CardsContainer from "../containers/CardsContainer";
import FilterContainer from "../containers/FilterContainer";

function Layout() {
  return (
    <>
      <h1 className={styles.title}>Movie App</h1>
      <div className={styles.wrapper}>
        <FilterContainer />
        <CardsContainer />
      </div>
    </>
  );
}

export default Layout;
