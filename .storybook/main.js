const path = require("path");

module.exports = {
    stories: [`../src/index.stories.mdx`, `../src/**/*.stories.@(js|jsx|mdx)`],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-docs",
        "@storybook/addon-knobs",
        "@storybook/addon-a11y",
        "@storybook/addon-viewport",
        "@storybook/addon-backgrounds",
        "@storybook/addon-notes",
        "storybook-dark-mode/register",
    ],
};
