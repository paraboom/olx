import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";
import style from "./style.m.css";

const ListItem = ({
  id,
  title,
  created,
  description,
  city_label: cityLabel,
  params,
  className,
}) => {
  const classNames = classnames(style.item, className);

  return (
    <Link to={`/list/${id}`} className={classNames}>
      <span>{title}</span>
      <span>{created}</span>
      <span>{description}</span>
      <span>{cityLabel}</span>
      <span>{params}</span>
    </Link>
  );
};
const listItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city_label: PropTypes.string.isRequired,
  className: PropTypes.string,
  params: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
ListItem.propTypes = listItemPropTypes;
ListItem.defaultProps = {
  className: null,
};

export default ListItem;
export { listItemPropTypes };
