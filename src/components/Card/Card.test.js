import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './Card';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('Card', () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Card>Card</Card>, container);
    });
});