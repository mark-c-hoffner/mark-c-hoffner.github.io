import React from 'react';
import { render } from '@testing-library/react';

const linkInfoMock = {
    address: "mockAddress",
    logoSrc: "mockSource",
    label: "mockAlt"
};

describe('IconLink', () => {

    let IconLink;

    beforeEach(async () => {
        const obj = await import('./IconLink.jsx');
        IconLink = obj.default;
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('renders without crashing', () => {
        render(<IconLink linkInfo={linkInfoMock} size={"50em"} />);
    })

    it('links to the given address', () => {
        const { getByRole } = render(<IconLink linkInfo={linkInfoMock} size={"50em"} />);
        expect(getByRole('link').getAttribute('href')).toBe('mockAddress');
        expect(getByRole('link').getAttribute('target')).toBe('_blank');
        expect(getByRole('link').getAttribute('rel')).toBe('noopener noreferrer');
    })

    it('displays the given svg at given size', () => {
        const { getByAltText } = render(<IconLink linkInfo={linkInfoMock} size={"50em"} />);
        expect(getByAltText('mockAlt').getAttribute('src')).toBe('mockSource');
        expect(getByAltText('mockAlt').getAttribute('height')).toBe('50em');
        expect(getByAltText('mockAlt').getAttribute('width')).toBe('50em');
    })
})