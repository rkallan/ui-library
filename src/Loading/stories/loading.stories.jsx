import React from "react";
import mdx from "./loading.stories.mdx";
import Loading from "../index";

export default {
    title: "Loading",
    component: Loading,
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

export const Default = () => <Loading />;

export const Delay = () => <Loading delay={2000} />;

export const NoDelay = () => <Loading delay={0} />;
