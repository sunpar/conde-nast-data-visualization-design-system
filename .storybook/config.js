import { configure, setAddon, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import JSXAddon from "storybook-addon-jsx";
import { withKnobs } from "@storybook/addon-knobs";
import "../src/css/tailwind.css";

setAddon(JSXAddon);
addDecorator(withKnobs)
addDecorator(withInfo);

// require all the stories.js files in src
const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  require("./welcomeStory");
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
