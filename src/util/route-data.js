import React, { lazy } from "react";

const Home = lazy(() => import('../components/App/Routes/Home'));
const About = lazy(() => import('../components/App/Routes/About'));
const Projects = lazy(() => import('../components/App/Routes/Projects'));

export default [
    {
        name: "Home",
        path: "*",
        element: <Home />
    },
    {
        name: "About",
        path: "/about",
        element: <About />
    },
    {
        name: "Projects",
        path: "/projects",
        element: <Projects />
    }
];