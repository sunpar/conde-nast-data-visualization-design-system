import React from "react";

import { storiesOf } from "@storybook/react";
import Button from "./button";
import { color } from "@storybook/addon-knobs";
import "../../css/tailwind.css";

storiesOf("Button", module)
  .addWithJSX("with background", () => (
    <Button bg="palegoldenrod">Hello world</Button>
  ))
  .addWithJSX("with background 2", () => (
    <Button bg={color("bg", "green", "group1")}>Hello world2</Button>
  ));
