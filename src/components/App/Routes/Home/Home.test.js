import React from 'react';
import { render, waitFor } from '@testing-library/react';

describe('Home', () => {

    let Home;

    beforeEach(async () => {
        const obj = await import('./Home.jsx');
        Home = obj.default;
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('renders without crashing', () => {
        render(<Home />);
    })

    it('displays the text', () => {
        const { getByText } = render(<Home />);
        expect(getByText('Mark C Hoffner')).toBeTruthy();
        expect(getByText('Full Stack Developer, Azure Architect')).toBeTruthy();
    })
})