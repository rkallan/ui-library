import React from "react";
import requireContext from "require-context.macro";
import Icons from "../index";
import styles from "./resources/styles/icons-story.module.scss";

export default {
    title: "Icons",
    component: Icons,
    parameters: {
        componentSubtitle: "Hover on icon to see the icon name.",
    },
};

const svgFiles = requireContext("../resources/svg", true, /\.svg$/).keys();

const svgIcons = svgFiles.map((svgUrlPath) => {
    const filename = svgUrlPath.split("/").pop();
    const iconName = filename.slice(0, filename.lastIndexOf("."));
    return iconName;
});

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

export const CustomTitle = () => {
    return <Icons name="home" title="Custom Title" />;
};

export const NoTitle = () => {
    return <Icons name="home" title={null} />;
};

export const Fallback = () => {
    return <Icons name="fallback" />;
};

Fallback.parameters = {
    docs: {
        storyDescription: "If svg icon not exist, show fallback icon. Fallback icon is svg",
    },
};

export const NoFallback = () => {
    return <Icons name="fallback" noFallback />;
};

NoFallback.parameters = {
    docs: {
        storyDescription: "If svg icon not exist and noFallback is true. Component will be empty",
    },
};

export const NoContainer = () => {
    return <Icons name="home" noContainer />;
};

NoContainer.parameters = {
    docs: {
        storyDescription: "Svg icon without container element",
    },
};
