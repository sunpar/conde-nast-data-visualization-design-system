import React from "react";

import { storiesOf } from "@storybook/react";
import CheckListItem from "./check-list-item";

storiesOf("Atoms/Check List Item", module).addWithJSX("default", () => (
  <CheckListItem>Sample List Item</CheckListItem>
));
