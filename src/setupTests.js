const path = require("path");
const dotenvExpand = require("dotenv-expand");
const dotEnv = require("dotenv").config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) });
const { toMatchImageSnapshot } = require("jest-image-snapshot");

require("@testing-library/jest-dom/extend-expect");

dotenvExpand(dotEnv);

global.url = process.env.STORYBOOK_IFRAME_URL;

expect.extend({ toMatchImageSnapshot });
