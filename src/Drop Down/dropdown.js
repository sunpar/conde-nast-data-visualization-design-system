import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const DropDown = ({ children }) => {
  return (
    <div className="">
      <Button>Sample Dropdown</Button>
      <div className="bg-white text-grey-darker p-2 border-grey-light border">
        <ul className="list-reset">{children}</ul>
      </div>
    </div>
  );
};

DropDown.propTypes = {
  children: PropTypes.node
};

export default DropDown;
