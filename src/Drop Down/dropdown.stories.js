import React from "react";

import { storiesOf } from "@storybook/react";
import DropDown from "./dropdown";
import CheckListItem from "../Check List Item";

const items = [
  { key: 1, text: "Sample Item 1", state: "S" },
  { key: 2, text: "Sample Item 2", state: "O" },
  { key: 3, text: "Sample Item 3", state: "X" },
  { key: 4, text: "Sample Item 4", state: "S" },
  { key: 5, text: "Sample Item 5", state: "O" },
  { key: 6, text: "Sample Item 6", state: "X" },
  { key: 7, text: "Sample Item 7", state: "S" },
  { key: 8, text: "Sample Item 8", state: "O" },
  { key: 9, text: "Sample Item 9", state: "X" }
];

storiesOf("Molecules/Dropdown", module)
  .addWithJSX("default", () => {
    return (
      <DropDown>
        {items.map(item => (
          <CheckListItem
            key={item.key}
            shouldCheck={item.state === "S"}
            active={item.state !== "X"}
          >
            {item.text}
          </CheckListItem>
        ))}
      </DropDown>
    );
  })
  .addWithJSX("with other elements", () => {
    return (
      <>
        <div className="w-48">
          <DropDown>
            {items.map(item => (
              <CheckListItem
                key={item.key}
                shouldCheck={item.state === "S"}
                active={item.state !== "X"}
              >
                {item.text}
              </CheckListItem>
            ))}
          </DropDown>
        </div>
        <div>TEST TEST TEST</div>
      </>
    );
  })
  .addWithJSX("with clear selections", () => {
    return (
      <>
        <div className="w-48">
          <DropDown
            onClearSelections={() => {
              alert("clearing!");
            }}
          >
            {items.map(item => (
              <CheckListItem
                key={item.key}
                shouldCheck={item.state === "S"}
                active={item.state !== "X"}
              >
                {item.text}
              </CheckListItem>
            ))}
          </DropDown>
        </div>
      </>
    );
  });
