import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./resources/styles/loading.module.scss";

const Loading = ({ delay }) => {
    const [showLoadingIndicator, setLoadingIndicatorVisibility] = useState(!delay);

    useEffect(() => {
        const timer = setTimeout(() => setLoadingIndicatorVisibility(true), delay);

        return () => {
            clearTimeout(timer);
        };
    });

    if (!showLoadingIndicator) return null;

    return (
        <div className={styles.container}>
            <div className={styles.text}>Loading</div>
            <div className={styles.bullet} variant="first" />
            <div className={styles.bullet} variant="second" />
            <div className={styles.bullet} variant="third" />
            <div className={styles.bullet} variant="fourth" />
        </div>
    );
};

Loading.defaultProps = {
    delay: 200,
};

Loading.propTypes = {
    delay: PropTypes.number,
};

export default Loading;
