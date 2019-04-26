import React from "react";
import PropTypes from "prop-types";
import Item, { listItemPropTypes } from "../ListItem";
import styles from "./style.m.css";

const List = ({ items }) => {
  if (!items) return null;

  return (
    <section className={styles.items}>
      {items.map(item => <Item className={styles.item} key={item.id} {...item} />)}
    </section>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(listItemPropTypes)),
};
List.defaultProps = {
  items: null,
};

export default List;
