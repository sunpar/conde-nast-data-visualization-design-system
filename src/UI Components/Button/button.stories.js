import React from "react";

import { storiesOf } from "@storybook/react";
import Button from "./button";

storiesOf("Button", module)
  .addWithJSX(
    "Default",
    () => <Button >Hello world</Button>,
    {
      info: {
        text: `Default Button Component`
      }
    }
  )
  .addWithJSX(
    "with Green Background",
    () => <Button bg="green">Hello world2</Button>,
    {
      info: {
        text: `Button with Green Background`
      }
    }
  );
