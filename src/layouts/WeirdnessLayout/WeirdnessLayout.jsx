import React from 'react';
import './WeirdnessLayout.scss';

export const WeirdnessLayout = ({ top, bottom, panel }) =>
    <div className="weirdness-layout">
        <div className="weirdness-layout__main">
            <div className="weirdness-layout__top">{ top }</div>
            <div className="weirdness-layout__bottom">{ bottom }</div>
        </div>
        <div className="weirdness-layout__panel">{ panel }</div>
    </div>