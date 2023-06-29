import React from 'react';
import { render } from '@testing-library/react';

describe('Video', () => {

    let Video;

    beforeEach(async () => {
        const obj = await import('./Video.jsx');
        Video = obj.default;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders without crashing', () => {
        render(<Video />);
    });

    it('renders the video element with the proper settings', () => {
        const { getByTestId } = render(<Video />);
        expect(getByTestId('video').autoplay).toBeTruthy();
        expect(getByTestId('video').loop).toBeTruthy();
        expect(getByTestId('video').playsInline).toBeTruthy();
    });

    it('renders the source element with the proper settings', () => {
        const { getByTestId } = render(<Video src="mockSrc" />);
        expect(getByTestId('source').src).toBe("http://localhost/mockSrc");
        expect(getByTestId('source').type).toBe("video/mp4");
    });
});