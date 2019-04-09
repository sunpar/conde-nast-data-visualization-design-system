import { configure } from '@storybook/react';

// require all the stories.js files in src
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
    require('./welcomeStory');
    req.keys().forEach(file => req(file));
}

configure(loadStories, module);