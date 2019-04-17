import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import checked from "../../Assets/checkbox_checked.png";
import unchecked from "../../Assets/checkbox_unchecked.png";

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
      className="list-reset flex pt-1"
      role="button"
      onClick={() => {
        setChecked(!isChecked);
        clickHandler();
      }}
    >
      <img className="mt-auto mb-auto ml-2 mr-2" src={isChecked ? checked : unchecked} />
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
