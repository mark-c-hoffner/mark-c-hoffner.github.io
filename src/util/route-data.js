import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import('../components/App/Routes/Home'));
const About = lazy(() => import('../components/App/Routes/About'));
const Projects = lazy(() => import('../components/App/Routes/Projects'));

export default [
    {
        name: "Home",
        path: "/",
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
    },
    {
        path: "*",
        element: <Navigate to='/' />
    }
];