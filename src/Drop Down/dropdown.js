import React, { useState, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { fromEvent } from "rxjs";
import { filter, tap } from "rxjs/operators";
import Button from "../Button";

const DropDown = ({
  children,
  parentStyles,
  childStyles,
  buttonStyles,
  listStyles
}) => {
  const [isOpen, setOpen] = useState(false);
  const containerEl = useRef(null);

  // Get a stream of clicks in document when dropdown is open
  // If element clicked isn't ref element or anything inside ref, set open to false
  useLayoutEffect(() => {
    if (containerEl.current !== null && isOpen) {
      const clickSub = fromEvent(document.querySelector("html"), "click")
        .pipe(
          filter(click => {
            return !containerEl.current.contains(click.target);
          })
        )
        .subscribe(() => setOpen(false));
      return () => clickSub.unsubscribe();
    }
    return;
  }, [containerEl.current, isOpen]);

  return (
    <div
      style={parentStyles}
      className="relative inline-block"
      ref={containerEl}
    >
      <Button style={buttonStyles} clickHandler={() => setOpen(!isOpen)}>
        Sample Dropdown
      </Button>
      {isOpen ? (
        <div
          style={childStyles}
          className="bg-white text-grey-darker p-2 border-grey-light border absolute w-full shadow z-50"
        >
          <ul style={listStyles} className="list-reset">
            {children}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

DropDown.propTypes = {
  children: PropTypes.node,
  parentStyles: PropTypes.object,
  childStyles: PropTypes.object,
  buttonStyles: PropTypes.object,
  listStyles: PropTypes.object
};

DropDown.defaultProps = {
  children: <></>,
  parentStyles: {},
  buttonStyles: {},
  childStyles: {},
  listStyles: {}
};

export default DropDown;
