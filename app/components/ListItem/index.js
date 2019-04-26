import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Item from "../Item";

const ListItem = ({
  id,
  title,
  created,
  description,
  city_label: cityLabel,
  params,
  className,
}) => (
  <Link to={`/list/${id}`} className={className}>
    <Item
      title={title}
      created={created}
      creates={created}
      description={description}
      cityLabel={cityLabel}
      params={params}
    />
  </Link>
);
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
