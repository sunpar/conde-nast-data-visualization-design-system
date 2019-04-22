import React from "react";
import PropTypes from "prop-types";

const Button = ({
  styles = {},
  children,
  clickHandler,
  active = false,
  onMouseOver,
  onMouseOut
}) => {
  return (
    <button
      style={styles}
      className={`w-full p-2 border-grey-light border rounded font-sans ${
        active ? `bg-grey-darkest text-white` : `bg-white text-grey-darker`
      }`}
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
  active: PropTypes.bool,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func
};

Button.defaultProps = {
  clickHandler: () => {},
  onMouseOver: () => {},
  onMouseOut: () => {}
};

export default Button;
