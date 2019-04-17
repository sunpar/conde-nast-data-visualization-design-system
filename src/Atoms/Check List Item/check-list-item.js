import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CheckListItem = ({
  styles = {},
  children,
  clickHandler = () => {},
  shouldCheck = false
}) => {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (shouldCheck !== isChecked) {
      setChecked(shouldCheck);
    }
  }, [shouldCheck]);

  return (
    <li
      style={styles}
      className="list-reset"
      role="button"
      onClick={() => {
        setChecked(!isChecked);
        clickHandler();
      }}
    >
      {children}
    </li>
  );
};

CheckListItem.propTypes = {
  styles: PropTypes.shape,
  children: PropTypes.node,
  clickHandler: PropTypes.func,
  shouldCheck: PropTypes.bool
};

export default CheckListItem;
