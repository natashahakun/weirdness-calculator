import React from 'react';
import PropTypes from 'prop-types';
import './Gif.scss';

export const Gif = ({ title, url }) =>
    <div className="gif">
        <h3 className="gif__heading">{ title }</h3>
        <img className="gif__image" src={url} alt={`Giphy result ${title}`} />
    </div>

Gif.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
