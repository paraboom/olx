import React from "react";
import styles from "./style.m.css";

export default ({ children }) => (
  <div className={styles.layout}>
    {children}
  </div>
);
