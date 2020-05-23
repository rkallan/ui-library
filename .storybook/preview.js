import { addParameters, addDecorator } from "@storybook/react";
import { DocsContainer, DocsPage } from "@storybook/addon-docs/blocks";
import { withKnobs } from "@storybook/addon-knobs";
import customTheme from "./customTheme";

addDecorator(withKnobs);

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    backgrounds: {
        values: [
            { name: "twitter", value: "#00aced" },
            { name: "facebook", value: "#3b5998" },
        ],
    },
    darkMode: {
        dark: { ...customTheme.dark },
        light: { ...customTheme.light },
        stylePreview: true,
    },
});
