import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export const Card = ({ children, ...props }) =>
    <div className="card" {...props}>{ children }</div>

Card.propTypes = {
    children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string])
};
