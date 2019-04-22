import React from "react";
import PropTypes from "prop-types";

const Button = ({
  styles = {},
  children,
  clickHandler,
  onMouseOver,
  onMouseOut
}) => {
  return (
    <button
      style={styles}
      className={`w-full bg-white text-grey-darker p-2 border-grey-light border rounded font-sans`}
      onClick={clickHandler}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.node,
  clickHandler: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func
};

Button.defaultProps = {
  clickHandler: () => {},
  onMouseOver: () => {},
  onMouseOut: () => {}
};

export default Button;
