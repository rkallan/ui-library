import React from "react";
import PropTypes from "prop-types";

const Button = ({ disabled, label, onClick, style }) => (
    <button type="button" disabled={disabled} onClick={onClick} style={style}>
        {label}
    </button>
);

Button.defaultProps = {
    disabled: false,
    onClick: () => {},
    style: {},
};

Button.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    /**
     * The inner radius for the chart center.
     */
    onClick: PropTypes.func,
    style: PropTypes.shape({}),
};

export default Button;
