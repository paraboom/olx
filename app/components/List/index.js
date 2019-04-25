import React from "react";
import PropTypes from "prop-types";
import Item, { itemPropTypes } from "../Item";

const List = ({ items }) => {
  if (!items) return null;

  return (
    <div className="items">
      {items.map(item => <Item key={item.id} {...item} />)}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(itemPropTypes)),
};
List.defaultProps = {
  items: null,
};

export default List;
