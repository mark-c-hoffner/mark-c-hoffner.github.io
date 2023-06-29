import React, { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure'
import { ResizeObserver } from '@juggle/resize-observer'
import "./Projects.css";

import Video from '../../Video';
import projectData from '../../../../util/project-data';

/**
 * React Function Component displays project data.
 * @returns {JSX.Element} - A React Component instance.
 */
const Projects = () => {
    const [widthRef, bounds] = useMeasure({ polyfill: ResizeObserver })

    useEffect(() => {
        if (bounds.width != 0) {
            const flexChange = Math.round((bounds.width / 1126) * 100) / 100;
            const fontChange = Math.round((bounds.width / (1126 * 1.25)) * 100) / 100;
            root.style.setProperty('--project-flex-transition-duration', `${Math.max(flexChange, .6)}s`);
            root.style.setProperty('--project-font-size-transition-duration', `${Math.max(fontChange, .5)}s`);
        }
    }, [bounds.width])

    const [currentProjectElement, setCurrentProjectElement] = useState(-1);
    const [currentProject, setCurrentProject] = useState({});

    const handleProjectTitleClick = (i) => {
        setCurrentProject(projectData[i]);
        setCurrentProjectElement(i);
    };

    const getProjectDescription = (e) => {
        if (e.description != null) {
            return e.description.map((f, i) => {
                return <p key={i}>{f}</p>;
            });
        };
    };

    const getProjectPoints = (e) => {
        if (e.details != null) {
            return (
                <ul>
                    {e.details.map((f, i) => {
                        return <li key={i}>{f}</li>;
                    })}
                </ul>
            );
        };
    };

    const getProjectMedia = (e) => {
        if (e.media != null) {
            return e.media.map((f, i) => {
                if (f.type === 'video') {
                    return <Video key={i} src={f.src} />;
                }
            });
        };
    };

    const getProjectLinks = (e) => {
        if (e.links != null) {
            return e.links.map((f, i) => {
                return (
                    <a href={f.url} target="_blank" rel="noopener noreferrer" key={i} className='projectLink'>
                        {f.title}
                    </a>
                );
            });
        } else {
            return (
                <div className='projectBottom' data-testid='projectBottom' />
            )
        }
    };

    const getProjectInfoDisplay = (e) => {
        return (
            <>
                <h3 className='projectInfoTitle'>{e.name}</h3>
                <div className='projectBody'>
                    {getProjectDescription(e)}
                    {getProjectPoints(e)}
                    {getProjectMedia(e)}
                    <div className={"projectLinkContainer"}>
                        {getProjectLinks(e)}
                    </div>
                </div >
            </>
        );
    };

    const getProjectDataDisplay = () => {
        return projectData.map((e, i) => {
            return (
                <div
                    key={i}
                    className={[
                        'projectListTitle',
                        (currentProject.name != null) ? 'chosen' : 'unchosen',
                        (currentProjectElement === i) ? 'active' : ''
                    ].join(' ')}
                    onClick={() => handleProjectTitleClick(i)}
                >
                    <h4 className='projectListTitleName'>{e.name}</h4>
                </div>
            );
        });
    };

    return (
        <div className="centered">
            <div className='projectsContainer' ref={widthRef}>
                <div
                    className={[
                        'projectInfo',
                        (currentProject.name != null) ? 'chosen' : 'unchosen'
                    ].join(' ')}
                    data-testid="projectInfo"
                >
                    {getProjectInfoDisplay(currentProject)}
                </div>
                <div
                    className={[
                        'projectsSpacer',
                        (currentProject.name != null) ? 'chosen' : 'unchosen'
                    ].join(' ')}
                    data-testid="projectsSpacer"
                />
                <div className='projectsList'>
                    {getProjectDataDisplay()}
                </div>
            </div>
        </div>
    );
};

export default Projects;