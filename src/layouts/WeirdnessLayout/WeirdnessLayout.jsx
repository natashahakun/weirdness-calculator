import React from 'react';
import PropTypes from 'prop-types';
import './WeirdnessLayout.scss';

export const WeirdnessLayout = ({ top, bottom, panel }) =>
    <div className="weirdness-layout">
        <div className="weirdness-layout__main">
            <div className="weirdness-layout__top">{ top }</div>
            <div className="weirdness-layout__bottom">{ bottom }</div>
        </div>
        <div className="weirdness-layout__panel">{ panel }</div>
    </div>

WeirdnessLayout.propTypes = {
	top: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
	bottom: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
    panel: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])
}
