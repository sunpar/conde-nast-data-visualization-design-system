import React from "react";
import { storiesOf } from "@storybook/react";
import DropDown from "../src/UI Components/Drop Down/dropdown";

storiesOf("DropDown", module)
  .add("with text", () => <DropDown>Hello DropDown</DropDown>)
  .add("with emoji", () => (
    <DropDown>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </DropDown>
  ));
