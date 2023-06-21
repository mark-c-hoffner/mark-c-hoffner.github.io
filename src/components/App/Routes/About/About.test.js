import React from 'react';
import { render, waitFor } from '@testing-library/react';

const aboutDataMock = {
    image: {
        src: 'imageSource',
        label: 'imageLabel'
    },
    text: [
        `text line 1.`,
        `text line 2.`
    ]
};

describe('About', () => {

    let About;

    beforeEach(async () => {
        jest.doMock('../../../../util/about-data.js', () => aboutDataMock);

        const obj = await import('./About.jsx');
        About = obj.default;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders without crashing', () => {
        render(<About />);
    });

    it('displays the about data image', () => {
        const { getByAltText } = render(<About />);
        expect(getByAltText('imageLabel').getAttribute('src')).toBe('imageSource');
    });

    it('displays the about data text', () => {
        const { getByText } = render(<About />);
        expect(getByText(/text line 1./)).toBeTruthy();
        expect(getByText(/text line 2./)).toBeTruthy();
    });
})