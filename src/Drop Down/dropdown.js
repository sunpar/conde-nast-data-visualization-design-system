import React, { useState, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";
import Button from "../Button";

const DropDown = ({
  children,
  onClearSelections,
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
      className="relative inline-block w-full"
      ref={containerEl}
    >
      <Button
        style={buttonStyles}
        clickHandler={() => setOpen(!isOpen)}
        active={isOpen}
      >
        Sample Dropdown
      </Button>
      {isOpen ? (
        <div
          style={childStyles}
          className="bg-white text-grey-darker p-2 border-grey-lighter border 
          absolute overflow-y-hidden overflow-y-scroll w-full h-48 shadow z-50"
        >
          {onClearSelections ? (
            <div
              className="text-sm text-grey uppercase pl-2"
              data-qno={-10}
              role="button"
              onClick={() => onClearSelections()}
            >
              Clear Selections
            </div>
          ) : null}
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
  onClearSelections: PropTypes.func,
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
