import React from "react";

import { storiesOf } from "@storybook/react";
import DropDown from "./dropdown";
import CheckListItem from "../Check List Item";

const items = [
  { key: 1, text: "Sample Item 1", state: "S" },
  { key: 2, text: "Sample Item 2", state: "O" },
  { key: 3, text: "Sample Item 3", state: "X" }
];

storiesOf("Molecules/Dropdown", module)
  .addWithJSX("default", () => {
    return (
      <div className="w-64">
        <DropDown>
          {items.map(item => (
            <CheckListItem key={item.key} shouldCheck={item.state === "S"}>
              {item.text}
            </CheckListItem>
          ))}
        </DropDown>
      </div>
    );
  })
  .addWithJSX("with other elements", () => {
    return (
      <>
      <div className="w-64">
        <DropDown>
          {items.map(item => (
            <CheckListItem key={item.key} shouldCheck={item.state === "S"}>
              {item.text}
            </CheckListItem>
          ))}
        </DropDown>
      </div>
      <div>TEST TEST TEST</div> 
      </>
    );
  });
