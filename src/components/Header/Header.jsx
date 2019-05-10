import React from 'react';
import './Header.scss';

export const Header = ({ children }) =>
    <header className="header">
        <h1 className="header__heading">{ children }</h1>
    </header>
