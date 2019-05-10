import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components';
import './Gif.scss';

export const Gif = ({ removeFunc, title, url }) =>
    <div className="gif">
        <h3 className="gif__heading">{ title }</h3>

        <div className="gif__image-wrapper">
            <img className="gif__image" src={url} alt={`Giphy result ${title}`} />

            { removeFunc &&
                <div className="gif__action">
                    <Button buttonType="icon" onClick={removeFunc} type="type">
                        X
                    </Button>
                </div>
            }
        </div>
    </div>

Gif.defaultProps = {
    removeFunc: null
}

Gif.propTypes = {
    removeFunc: PropTypes.func || null,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
