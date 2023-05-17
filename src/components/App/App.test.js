import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';

const homeMock = jest.fn()
const aboutMock = jest.fn()
const footerMock = jest.fn()

describe('App', () => {

    let App;

    beforeEach(async () => {
        jest.doMock('./Routes/Home', () => homeMock)
        jest.doMock('./Routes/About', () => aboutMock)
        jest.doMock('./Footer', () => footerMock)

        homeMock.mockReturnValue(<>homeMock</>)
        aboutMock.mockReturnValue(<>aboutMock</>)
        footerMock.mockReturnValue(<>footerMock</>)

        const obj = await import('./App.jsx');
        App = obj.default;
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('renders without crashing', () => {
        render(<App />);
    })

    it('displays the title', async () => {
        render(<App />);
        await waitFor(() => expect(document.title).toBe('Mark C Hoffner'));
    })

    it('displays Home', () => {
        const { getByText } = render(<App />);
        expect(getByText(/homeMock/)).toBeTruthy();
    })

    it('routes to about', async () => {
        const { getByText } = render(<App />);
        fireEvent.click(getByText('About'));
        await waitFor(() => expect(getByText(/aboutMock/)).toBeTruthy());
    })

    it('routes to Home', async () => {
        const { getByText } = render(<App />);
        fireEvent.click(getByText('About'));
        await waitFor(() => expect(getByText(/aboutMock/)).toBeTruthy());
        fireEvent.click(getByText('Home'));
        await waitFor(() => expect(getByText(/homeMock/)).toBeTruthy());
    })

    it('displays the footer at all times', async () => {
        const { getByText } = render(<App />);
        await waitFor(() => expect(getByText(/footerMock/)).toBeTruthy());
        fireEvent.click(getByText('About'));
        await waitFor(() => expect(getByText(/aboutMock/)).toBeTruthy());
        await waitFor(() => expect(getByText(/footerMock/)).toBeTruthy());
    })
})