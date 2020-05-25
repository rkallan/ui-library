const path = require("path");

const root = path.resolve(__dirname, "../src");

module.exports = {
    preset: "jest-puppeteer",
    rootDir: root,
    testRegex: "./*\\.integration-test\\.js$",
    setupFilesAfterEnv: ["./setupTests.js"],
};
