import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const useMeasureMock = jest.fn();
const heightRefMock = jest.fn();
const boundsMock = {};
const polyFillMock = { ResizeObserver: 'ResizeObserver' };
const setPropertyMock = jest.fn();

const projectDataMock = [
    {
        name: "mock project 1",
        links: [
            { title: "mock1-link1", url: "mock1-link1-url" },
            { title: "mock1-link2", url: "mock1-link2-url" },
        ],
        description: [
            "mock 1 description 1",
            "mock 1 description 2"
        ],
        details: [
            "mock 1 detail 1",
            "mock 1 detail 2"
        ]
    },
    {
        name: "mock project 2",
        links: [
            { title: "mock2-link1", url: "mock2-link1-url" },
            { title: "mock2-link2", url: "mock2-link2-url" },
        ],
        description: [
            "mock 2 description 1",
            "mock 2 description 2"
        ],
        details: [
            "mock 2 detail 1",
            "mock 2 detail 2"
        ]
    },
    {
        name: "mock project 3",
        description: [
            "mock 3 description 1",
            "mock 3 description 2"
        ],
        details: [
            "mock 3 detail 1",
            "mock 3 detail 2"
        ]
    }
];

describe('Projects', () => {

    let Projects;

    beforeEach(async () => {
        jest.doMock('react-use-measure', () => useMeasureMock);
        jest.doMock('@juggle/resize-observer', () => polyFillMock);
        useMeasureMock.mockReturnValue([heightRefMock, boundsMock]);

        boundsMock.width = 0;
        window.root = {
            style: {
                setProperty: setPropertyMock
            }
        };

        jest.doMock('../../../../util/project-data.js', () => projectDataMock);

        const obj = await import('./Projects.jsx');
        Projects = obj.default;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders without crashing', () => {
        render(<Projects />);
    });

    it('calls use measure with the polyfill', () => {
        render(<Projects />);
        expect(useMeasureMock.mock.lastCall[0].polyfill).toBe('ResizeObserver')
    });

    it('displays project titles', () => {
        const { getByText } = render(<Projects />);
        expect(getByText(/mock project 1/)).toBeTruthy();
        expect(getByText(/mock project 2/)).toBeTruthy();
    });

    it('renders project title classes as unchosen', () => {
        const { getByText } = render(<Projects />);
        expect(getByText(/mock project 1/).parentElement.className).toBe('projectListTitle unchosen ');
        expect(getByText(/mock project 2/).parentElement.className).toBe('projectListTitle unchosen ');
    });

    it('renders project title classes as chosen and active on click', () => {
        const { getAllByText } = render(<Projects />);
        fireEvent.click(getAllByText(/mock project 1/)[0]);
        expect(getAllByText(/mock project 1/)[1].parentElement.className).toBe('projectListTitle chosen active');
        expect(getAllByText(/mock project 2/)[0].parentElement.className).toBe('projectListTitle chosen ');
        fireEvent.click(getAllByText(/mock project 2/)[0]);
        expect(getAllByText(/mock project 1/)[0].parentElement.className).toBe('projectListTitle chosen ');
        expect(getAllByText(/mock project 2/)[1].parentElement.className).toBe('projectListTitle chosen active');
    });

    it('renders project info and project spacer classes as chosen on click', () => {
        const { getByTestId, getAllByText } = render(<Projects />);
        expect(getByTestId('projectInfo').className).toBe('projectInfo unchosen');
        expect(getByTestId('projectsSpacer').className).toBe('projectsSpacer unchosen');
        fireEvent.click(getAllByText(/mock project 2/)[0]);
        expect(getByTestId('projectInfo').className).toBe('projectInfo chosen');
        expect(getByTestId('projectsSpacer').className).toBe('projectsSpacer chosen');
    });

    it('renders project description on click', () => {
        const { getByText } = render(<Projects />);
        fireEvent.click(getByText(/mock project 1/));
        expect(getByText(/mock 1 description 1/)).toBeTruthy();
        expect(getByText(/mock 1 description 2/)).toBeTruthy();
        fireEvent.click(getByText(/mock project 2/));
        expect(getByText(/mock 2 description 1/)).toBeTruthy();
        expect(getByText(/mock 2 description 2/)).toBeTruthy();
    });

    it('renders project details on click', () => {
        const { getByText } = render(<Projects />);
        fireEvent.click(getByText(/mock project 1/));
        expect(getByText(/mock 1 detail 1/)).toBeTruthy();
        expect(getByText(/mock 1 detail 2/)).toBeTruthy();
        fireEvent.click(getByText(/mock project 2/));
        expect(getByText(/mock 2 detail 1/)).toBeTruthy();
        expect(getByText(/mock 2 detail 2/)).toBeTruthy();
    });

    it('renders project links on click', () => {
        const { getByText, getAllByRole, queryByTestId } = render(<Projects />);
        fireEvent.click(getByText(/mock project 1/));
        expect(getAllByRole('link')[0].getAttribute('href')).toBe('mock1-link1-url');
        expect(getAllByRole('link')[0].getAttribute('target')).toBe('_blank');
        expect(getAllByRole('link')[0].getAttribute('rel')).toBe('noopener noreferrer');
        expect(getAllByRole('link')[1].getAttribute('href')).toBe('mock1-link2-url');
        expect(getAllByRole('link')[1].getAttribute('target')).toBe('_blank');
        expect(getAllByRole('link')[1].getAttribute('rel')).toBe('noopener noreferrer');
        expect(queryByTestId('projectBottom')).not.toBeInTheDocument();
        fireEvent.click(getByText(/mock project 2/));
        expect(getAllByRole('link')[0].getAttribute('href')).toBe('mock2-link1-url');
        expect(getAllByRole('link')[0].getAttribute('target')).toBe('_blank');
        expect(getAllByRole('link')[0].getAttribute('rel')).toBe('noopener noreferrer');
        expect(getAllByRole('link')[1].getAttribute('href')).toBe('mock2-link2-url');
        expect(getAllByRole('link')[1].getAttribute('target')).toBe('_blank');
        expect(getAllByRole('link')[1].getAttribute('rel')).toBe('noopener noreferrer');
        expect(queryByTestId('projectBottom')).not.toBeInTheDocument();
    });

    it('renders project bottom if there are no links', () => {
        const { getByText, getByTestId } = render(<Projects />);
        fireEvent.click(getByText(/mock project 3/));
        expect(getByTestId('projectBottom')).toBeTruthy();
    });

    it('updates css variables on width change', () => {
        boundsMock.width = 20;
        const { rerender } = render(<Projects />);
        expect(setPropertyMock.mock.calls[0][0]).toBe('--project-flex-transition-duration');
        expect(setPropertyMock.mock.calls[0][1]).toBe('0.6s');
        expect(setPropertyMock.mock.calls[1][0]).toBe('--project-font-size-transition-duration');
        expect(setPropertyMock.mock.calls[1][1]).toBe('0.5s');
        setPropertyMock.mockReset();
        boundsMock.width = 20000;
        rerender(<Projects />);
        expect(setPropertyMock.mock.calls[0][0]).toBe('--project-flex-transition-duration');
        expect(setPropertyMock.mock.calls[0][1]).toBe('17.76s');
        expect(setPropertyMock.mock.calls[1][0]).toBe('--project-font-size-transition-duration');
        expect(setPropertyMock.mock.calls[1][1]).toBe('14.21s');
    });
});