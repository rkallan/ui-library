import React from "react";
import PropTypes from "prop-types";
import { svgIcons } from "./svgFiles";
import styles from "./resources/styles/icons.module.scss";

const Icons = ({ name, title, size, noFallback, noContainer, svgProps }) => {
    const Icon = (svgIcons && svgIcons[name]) || (!noFallback && svgIcons.svg) || undefined;

    if (!Icon) return null;

    const SvgIcon = () => {
        const svgIconVariant = [];
        if (noContainer) svgIconVariant.push(size);
        if (!noContainer) svgIconVariant.push("full-width");

        return <Icon {...svgProps} className={styles.icon} title={title === undefined ? name : title} variant={svgIconVariant.join(" ")} />;
    };

    if (noContainer) return <SvgIcon />;

    const containerVariant = [size];

    return (
        <div className={styles.container} variant={containerVariant.join(" ")}>
            <SvgIcon />
        </div>
    );
};

Icons.defaultProps = {
    title: undefined,
    size: "normal",
    noFallback: false,
    noContainer: false,
    svgProps: undefined,
};

Icons.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(["smallest", "small", "normal", "large", "largest", "full-width"]),
    noFallback: PropTypes.bool,
    noContainer: PropTypes.bool,
    svgProps: PropTypes.shape({}),
};

export default Icons;
