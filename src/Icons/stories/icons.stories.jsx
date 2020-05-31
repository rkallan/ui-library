import React from "react";
import mdx from "./icons.stories.mdx";
import { allIconNames } from "../svgFiles";
import Icons from "../index";
import styles from "./resources/styles/icons-story.module.scss";

export default {
    title: "Icons",
    component: Icons,
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

export const Normal = () => {
    return <Icons name="home" title="normal" />;
};

export const Smallest = () => {
    return <Icons name="home" size="smallest" title="smallest" />;
};

export const Small = () => {
    return <Icons name="home" size="small" title="small" />;
};

export const Large = () => {
    return <Icons name="home" size="large" title="large" />;
};

export const Largest = () => {
    return <Icons name="home" size="largest" title="largest" />;
};

export const CustomTitle = () => {
    return <Icons name="home" title="Custom Title" />;
};

export const NoTitle = () => {
    return <Icons name="home" title={null} />;
};

export const Fallback = () => {
    return <Icons name="fallback" />;
};

export const NoFallback = () => {
    return <Icons name="fallback" noFallback />;
};

export const NoContainer = () => {
    return <Icons name="home" noContainer />;
};

export const Overview = () => {
    return allIconNames.map((name, index) => {
        const key = index;
        return (
            <div key={key} className={styles.container}>
                <Icons name={name} />
            </div>
        );
    });
};
