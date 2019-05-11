import React from 'react';
import PropTypes from 'prop-types';

export const Slider = ({ id, min, max, onChange, value }) =>
    <input type="range" id={id} min={min} max={max} value={value} className="slider" onChange={onChange} />

Slider.defaultProps = {
    min: 0,
    max: 10,
    value: 5
}

Slider.propTypes = {
    id: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number
}