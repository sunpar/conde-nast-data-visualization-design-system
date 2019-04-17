import React from "react";
import PropTypes from "prop-types";

const Button = ({ styles = {}, children, clickHandler = () => {} }) => (
  <button
    style={styles}
    className={`bg-white text-grey-darker p-2 border-grey-light border rounded`}
    onClick={clickHandler}
  >
    {children}
  </button>
);

Button.propTypes = {
  styles: PropTypes.shape,
  children: PropTypes.node,
  clickHandler: PropTypes.func
};

export default Button;
