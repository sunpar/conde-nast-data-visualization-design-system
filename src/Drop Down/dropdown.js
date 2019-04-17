import React from "react";

import "./dropdown.css";

const DropDown = ({ children}) => {
    return (
  <div className="">
    <div className="">{children}</div>
    <div className="">
    </div>
    </div>);
};

DropDown.propTypes = {
  children: PropTypes.node
};

export default DropDown;
