import React from 'react';
import { render } from '@testing-library/react';

const iconLinkMock = jest.fn()
const socialDataMock = ["data1", "data2"]

describe('Footer', () => {

    let Footer;

    beforeEach(async () => {
        jest.doMock('./IconLink', () => iconLinkMock)
        jest.doMock('../../../util/social-data.js', () => socialDataMock)

        const obj = await import('./Footer.jsx');
        Footer = obj.default;
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('renders without crashing', () => {
        render(<Footer />);
    })

    it('renders LinkIcon with socialdata', () => {
        render(<Footer />);
        expect(iconLinkMock.mock.calls[0][0].linkInfo).toBe("data1");
        expect(iconLinkMock.mock.calls[0][0].size).toBe("40em");
        expect(iconLinkMock.mock.calls[1][0].linkInfo).toBe("data2");
        expect(iconLinkMock.mock.calls[1][0].size).toBe("40em");
    })
})