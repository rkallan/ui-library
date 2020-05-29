import React from "react";
import Icons from "../index";
import styles from "./resources/styles/icons-story.module.scss";

export default {
    title: "Icons",
    component: Icons,
};

const reqSvgs = require.context("!@svgr/webpack!../resources/svg", true, /\.svg$/);
const svgIcons = reqSvgs.keys().reduce((images, path) => {
    const key = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    images.push(key);
    return images;
}, []);

export const Overview = () => {
    return svgIcons.map((name, index) => {
        const key = index;
        return (
            <div key={key} className={styles.container}>
                <Icons name={name} />
            </div>
        );
    });
};
export const Default = () => {
    return <Icons name="home" />;
};

export const Smallest = () => {
    return <Icons name="home" variant="smallest" />;
};

export const Small = () => {
    return <Icons name="home" variant="small" />;
};

export const Large = () => {
    return <Icons name="home" variant="large" />;
};

export const Largest = () => {
    return <Icons name="home" variant="largest" />;
};

export const Fallback = () => {
    return <Icons name="fallback" />;
};

Fallback.parameters = {
    docs: {
        storyDescription: "If svg icon not exist, show fallback icon svg",
    },
};

export const NoFallback = () => {
    return <Icons name="fallback" noFallback />;
};

NoFallback.parameters = {
    docs: {
        storyDescription: "If svg icon not exist and noFallback is set it will return no component",
    },
};

export const NoContainer = () => {
    return <Icons name="home" noContainer />;
};

NoContainer.parameters = {
    docs: {
        storyDescription: "Svg icon without container",
    },
};
