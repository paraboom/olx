import React from "react";
import PropTypes from "prop-types";
import styles from "./style.m.css";

const Item = ({
  title,
  created,
  description,
  cityLabel,
  params,
}) => (
  <div className={styles.item}>
    <h2>{title}</h2>
    <div className={styles.date}>{created}</div>
    <div className={styles.description}>{description}</div>
    <div className={styles.tags}>
      {params.map(([tag, value]) => (
        <span key={tag} className={styles.tag}>
          <span>{tag}</span>
          {" : "}
          <span className={styles.tag_value}>{value}</span>
        </span>
      ))}
    </div>
    <div className={styles.city}>{cityLabel}</div>
  </div>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cityLabel: PropTypes.string.isRequired,
  params: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Item;
