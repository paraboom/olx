import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./style.m.css";

const Navigation = ({
  currentPage,
  totalPages,
}) => {
  const pages = Array.from({ length: totalPages }, (v, k) => k + 1);

  return (
    <nav className={styles.navigation}>
      <ul>
        Pages:
        {" "}
        {pages.map(page => (
          currentPage === page
            ? <li key={page}>{page}</li>
            : (
              <li key={page}>
                <Link
                  to={{
                    pathname: "/list",
                    search: `?page=${page}`,
                  }}
                >
                  {page}
                </Link>
              </li>
            )
        ))}
      </ul>
    </nav>
  );
};
const navigationPropTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
Navigation.propTypes = navigationPropTypes;

export default Navigation;
