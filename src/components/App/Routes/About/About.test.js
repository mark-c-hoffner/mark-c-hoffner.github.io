import React from 'react';
import { render, waitFor } from '@testing-library/react';

describe('About', () => {

    let About;

    beforeEach(async () => {
        const obj = await import('./About.jsx');
        About = obj.default;
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('renders without crashing', () => {
        render(<About />);
    })
})