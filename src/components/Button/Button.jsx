import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ children, disabled, icon, type, ...props }) => 
    <button className="button" disabled={disabled} type={type} {...props}>{ children }</button>

Button.defaultProps = {
    disabled: false,
    icon: '',
    type: 'button'
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    type: PropTypes.string
};