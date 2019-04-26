import React from "react";
import PropTypes from "prop-types";
import styles from "./style.m.css";

const Item = ({
  id,
  title,
  created,
  description,
  city_label: cityLabel,
  params,
}) => (
  <div className={styles.item}>
    <span>{id}</span>
    <span>{title}</span>
    <span>{created}</span>
    <span>{description}</span>
    <span>{cityLabel}</span>
    <span>{params}</span>
  </div>
);

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city_label: PropTypes.string.isRequired,
  params: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Item;
