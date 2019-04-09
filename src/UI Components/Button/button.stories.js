import React from "react";

import { storiesOf } from "@storybook/react";
import Button from "./button";

storiesOf("Button", module).add("with white background", () => (
  <Button bg="white">Hello World</Button>
));
