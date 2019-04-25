import React from "react";
import PropTypes from "prop-types";

const Navigation = ({
  currentPage,
  totalPages,
}) => (
  <div className="navigation">
    <span>{currentPage}</span>
    <span>{totalPages}</span>
  </div>
);
const navigationPropTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
Navigation.propTypes = navigationPropTypes;

export default Navigation;
