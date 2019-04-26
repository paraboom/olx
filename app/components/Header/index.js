import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import VectorImage from "../VectorImage";
import styles from "./style.m.css";

import logo from "./images/logo.svg";
import arrow from "./images/arrow.svg";

const Header = ({ withItem }) => {
  if (withItem) {
    return (
      <header className={styles.header}>
        <Link to="/">
          <VectorImage
            width="20"
            height="50"
            source={arrow}
          />
        </Link>
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <VectorImage
        width="50"
        height="50"
        source={logo}
      />
    </header>
  );
};

Header.propTypes = {
  withItem: PropTypes.bool,
};
Header.defaultProps = {
  withItem: false,
};

export default Header;
