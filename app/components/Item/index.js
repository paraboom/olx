import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

const Item = ({
  id,
  title,
  created,
  description,
  city_label: cityLabel,
  params,
}) => (
  <div className={style.item}>
    <span>{id}</span>
    <span>{title}</span>
    <span>{created}</span>
    <span>{description}</span>
    <span>{cityLabel}</span>
    <span>{params}</span>
  </div>
);
const itemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city_label: PropTypes.string.isRequired,
  params: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
Item.propTypes = itemPropTypes;

export default Item;
export { itemPropTypes };
