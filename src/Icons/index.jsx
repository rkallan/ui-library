import React from "react";
import PropTypes from "prop-types";
import styles from "./resources/styles/icons.module.scss";

const reqSvgs = require.context("!@svgr/webpack?-svgo,+titleProp!./resources/svg", true, /\.svg$/);
const svgIcons = reqSvgs.keys().reduce((images, path) => {
    const key = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
    const image = images;
    image[key] = reqSvgs(path).default;
    return image;
}, {});

const Icons = ({ name, variant, noFallback, noContainer, svgProps }) => {
    const Icon = svgIcons[name] || (!noFallback && svgIcons.svg) || undefined;

    if (Icon) {
        const svgIcon = <Icon className={styles.icon} title={name} variant={noContainer ? variant : null} />;

        if (noContainer) return svgIcon;

        return (
            <div className={styles.container} variant={variant}>
                {svgIcon}
            </div>
        );
    }

    return null;
};

Icons.defaultProps = {
    variant: "normal",
    noFallback: false,
    noContainer: false,
    svgProps: undefined,
};

Icons.propTypes = {
    name: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["smallest", "small", "normal", "large", "largest", "full-width"]),
    noFallback: PropTypes.bool,
    noContainer: PropTypes.bool,
    svgProps: PropTypes.shape({}),
};

export default Icons;
