import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import checked from "../Assets/checkbox_checked.png";
import unchecked from "../Assets/checkbox_unchecked.png";

const CheckListItem = ({
  listStyles = {},
  imageStyles = {},
  children,
  clickHandler = () => {},
  shouldCheck = false,
  active = true
}) => {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    if (shouldCheck !== isChecked) {
      setChecked(shouldCheck);
    }
  }, [shouldCheck]);
  return (
    <li
      style={listStyles}
      className={`list-reset flex pt-3 ${
        active ? "opacity-100" : "opacity-50"
      }`}
      role={active ? "button" : "listitem"}
      onClick={() => {
        if (active) {
          setChecked(!isChecked);
          clickHandler();
        }
      }}
    >
      <img
        className="mt-auto mb-auto ml-2 mr-2"
        style={imageStyles}
        src={isChecked ? checked : unchecked}
      />
      {children}
    </li>
  );
};

CheckListItem.propTypes = {
  listStyles: PropTypes.object,
  imageStyles: PropTypes.object,
  children: PropTypes.node,
  clickHandler: PropTypes.func,
  shouldCheck: PropTypes.bool,
  active: PropTypes.bool
};

export default CheckListItem;
