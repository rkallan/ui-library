import React from "react";
import PropTypes from "prop-types";

const Button = ({ disabled, label, onClick, style }) => (
    <button type="button" disabled={disabled} onClick={onClick} style={style}>
        {label}
    </button>
);

Button.defaultProps = {
    disabled: false,
    onClick: undefined,
    style: {},
};

Button.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    /**
     * set extra description text
     */
    onClick: PropTypes.func,
    style: PropTypes.shape({}),
};

export default Button;
