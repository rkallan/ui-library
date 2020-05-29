import React from "react";
// import PropTypes from "prop-types";
import styles from "./resources/styles/icons.module.scss";

const reqSvgs = require.context("!@svgr/webpack!./resources/svg", true, /\.svg$/);
const svgIcons = reqSvgs.keys().reduce((images, path) => {
    const key = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    const image = images;
    image[key] = reqSvgs(path).default;
    return image;
}, {});

const Icons = ({ name, ...rest }) => {
    const Icon = svgIcons[name] || svgIcons.svg || undefined;

    if (Icon) return <Icon className={styles.icon} />;

    return null;
};

export default Icons;
