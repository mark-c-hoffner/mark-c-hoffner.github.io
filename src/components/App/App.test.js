import React from 'react';
import { render, waitFor } from '@testing-library/react';

describe('App', () => {

    let App;

    beforeEach(async () => {
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

    it('displays the text', () => {
        const { getByText } = render(<App />);
        expect(getByText('Mark C Hoffner')).toBeTruthy();
        expect(getByText('Full Stack Developer, Azure Architect')).toBeTruthy();
    })
})