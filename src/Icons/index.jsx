import React from "react";
import PropTypes from "prop-types";
import styles from "./resources/styles/icons.module.scss";

const svgFiles = require.context("!@svgr/webpack?-svgo,+titleProp!./resources/svg", true, /\.svg$/);
const svgIcons = svgFiles.keys().reduce((svgComponents, svgUrlPath) => {
    const filename = svgUrlPath.split("/").pop();
    const objectKey = filename.slice(0, filename.lastIndexOf("."));
    const svgComponent = svgComponents;
    svgComponent[objectKey] = svgFiles(svgUrlPath).default;
    return svgComponent;
}, {});

const Icons = ({ name, title, size, noFallback, noContainer, svgProps }) => {
    const Icon = svgIcons[name] || (!noFallback && svgIcons.svg) || undefined;

    if (!Icon) return null;

    const SvgIcon = () => {
        const svgIconVariant = [];
        if (noContainer) svgIconVariant.push(size);

        return (
            <Icon
                {...svgProps}
                className={styles.icon}
                title={title === undefined ? name : title}
                variant={svgIconVariant.length ? svgIconVariant.join(" ") : null}
            />
        );
    };

    if (noContainer) return <SvgIcon />;

    const containerVariant = [size];

    return (
        <div className={styles.container} variant={containerVariant.length ? containerVariant.join(" ") : null}>
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
