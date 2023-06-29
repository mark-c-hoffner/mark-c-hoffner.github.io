import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';

const Home = jest.fn();
const About = jest.fn();
const footerMock = jest.fn();
const routeDataMock = [
    {
        name: "Home",
        path: "/",
        element: <Home />
    },
    {
        name: "About",
        path: "/about",
        element: <About />
    }
]

describe('App', () => {

    let App;

    beforeEach(async () => {
        jest.doMock('../../util/route-data.js', () => routeDataMock)
        jest.doMock('./Footer', () => footerMock)

        Home.mockReturnValue(<>homeMock</>)
        About.mockReturnValue(<>aboutMock</>)
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

    it('displays default route data', () => {
        const { getByText } = render(<App />);
        expect(getByText(/homeMock/)).toBeTruthy();
    })

    it('routes to route data option', async () => {
        const { getByText } = render(<App />);
        fireEvent.click(getByText('About'));
        await waitFor(() => expect(getByText(/aboutMock/)).toBeTruthy());
    })

    it('routes back to default route data', async () => {
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