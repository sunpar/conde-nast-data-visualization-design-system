import React from "react";

import { storiesOf } from "@storybook/react";
import Button from "./button";
import { text } from "@storybook/addon-knobs";
import "../css/tailwind.css";

storiesOf("Atoms/Button", module)
  .addWithJSX("default", () => <Button>Click Me</Button>)
  .addWithJSX("with custom colors", () => (
    <Button
      styles={{
        backgroundColor: text("backgroundColor", "green"),
        color: text("color", "white")
      }}
    >
      Click Me
    </Button>
  ))
  .addWithJSX("with click handler", () => (
    <Button clickHandler={() => alert("hello")}>Click Me</Button>
  ))
  .addWithJSX("with hover", () => (
    <Button onmouseover={() => alert("hello")}>Click Me</Button>
  ));;
