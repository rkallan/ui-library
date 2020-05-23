import { create } from "@storybook/theming/create";

const defaultProps = {
    appBorderRadius: 4,
    inputBorderRadius: 4,
    fontBase: "Roboto, Verdana, sans-serif",
    fontCode: "monospace",
    brandTitle: "RKallan UI Library storybook",
    brandUrl: "https://example.com",
    brandImage: "https://placehold.it/350x150",
};

export default create({
    dark: {
        base: "dark",
        ...defaultProps,
        colorPrimary: "#FF4785",
        colorSecondary: "#1EA7FD",

        // UI
        appBg: "#2f2f2f",
        appContentBg: "#333",
        appBorderColor: "rgba(255,255,255,.1)",

        // Text colors
        textColor: "#FFFFFF",
        textInverseColor: "#333333",

        // Toolbar default and active colors
        barTextColor: "#999999",
        barSelectedColor: "#1EA7FD",
        barBg: "#333333",

        // Form colors
        inputBg: "#3f3f3f",
        inputBorder: "rgba(0,0,0,.3)",
        inputTextColor: "#FFFFFF",
    },
    light: {
        base: "light",
        ...defaultProps,
        colorPrimary: "#FF4785",
        colorSecondary: "#1EA7FD",

        // UI
        appBg: "#F6F9FC",
        appContentBg: "#FFFFFF",
        appBorderColor: "rgba(0,0,0,.1)",

        // Text colors
        textColor: "#333333",
        textInverseColor: "#FFFFFF",

        // Toolbar default and active colors
        barTextColor: "#999999",
        barSelectedColor: "#1EA7FD",
        barBg: "#FFFFFF",

        // Form colors
        inputBg: "#FFFFFF",
        inputBorder: "rgba(0,0,0,.1)",
        inputTextColor: "#333333",
    },
});
