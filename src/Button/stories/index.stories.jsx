import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import Button from "../index";

export default {
    title: "Button",
    component: Button,
    parameters: {
        componentSubtitle: "Handy status label",
    },
};

export const WithText = () => <Button onClick={action("clicked")} label="Hello Button" />;

export const WithSomeEmoji = () => <Button onClick={action("clicked")} label="😀 😎 👍 💯" />;

export const WithCounter = () => {
    const [counter, setCounter] = useState(0);
    const label = `Testing: ${counter}`;
    return <Button onClick={() => setCounter(counter + 1)} label={label} />;
};

WithCounter.story = {
    name: "with counter",
    parameters: {
        docs: {
            storyDescription: "This demonstrates react hooks working inside stories. Go team! 🚀",
        },
    },
};
