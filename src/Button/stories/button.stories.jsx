import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import mdx from "./button.stories.mdx";
import Button from "../index";

export default {
    title: "Button",
    component: Button,
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

export const Default = () => <Button onClick={action("clicked")} label={text("Label", "Hello Storybook")} />;

export const WithSomeEmoji = () => <Button onClick={action("clicked")} label="😀 😎 👍 💯" />;

export const WithCounter = () => {
    const [counter, setCounter] = useState(0);
    const label = `Testing: ${counter}`;
    return <Button onClick={() => setCounter(counter + 1)} label={label} />;
};

WithCounter.storyName = "with counter";
