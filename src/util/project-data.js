import gameClip from "../assets/video/untitled_survival_game-clip.mp4";

export default [
    {
        name: `smart-bot`,
        links: [
            { title: `View Site`, url: `https://mark-c-hoffner.github.io/smart-bot` },
            { title: `GitHub`, url: `https://github.com/mark-c-hoffner/smart-bot` },
        ],
        description: [
            `React Web App built as a code sample.`,
            `Bot eyes and mouth animate in response to animated text display. 
            Prompts user to correct or agree with bot's assertions about colors. Bot stores and recalls corrections.`,
        ],
        details: [
            `State and event management using hooks`,
            `Complete unit test coverage written in Jest`,
            `App created with Javascript, React, CSS and Webpack`,
        ]
    },
    {
        name: `Ride Commander`,
        description: [
            `Cloud Native Web App suite built for The Ride NYC.`,
            `Automates communication, gathers hardware telemetry and enables remote control for a fleet of buses, mobile street performers and office management staff.`,
        ],
        details: [
            `Web Apps hosted on Azure Static Web Apps for low cost and ease of deployment`,
            `Azure Functions on Consumption plan for low cost API interactions`,
            `Real time communication and updates delivered via Azure Web PubSub`,
            `Azure Table storage provides fast and reliable access to time series data`,
            `Identity services managed in Azure Active Directory`,
            `Electron App for onboard technicians gathers, displays and sends system telemetry. Provides show control, chat and direct message`,
            `Management App displays bus and performance data. Provides chat and direct message. Role based access to historical performance data and user creation`,
            `Publicly accessible endpoint displays performance updates`,
            `Apps created with JavaScript, React, Electron, CSS and Webpack`,
        ]
    },
    {
        name: `Ride VR`,
        description: [
            `Suite of applications built for The Ride NYC.`,
            `Displays, controls and manages 360 video for a live audience environment.`,
        ],
        details: [
            `Android app displays 360 video, receives UDP triggers, dispatches device telemetry`,
            `Controller app sends UDP triggers, displays Android connections`,
            `Server app receives Android and Controller connections, routes telemetry and triggers`,
            `Loader app connects to Android devices to sideload Android app and associated media`,
            `Apps created with Java`
        ]
    },
    {
        name: `untitled survival game`,
        description: [
            `Mobile game for iOS and Android currently in development.`,
            `Simple, responsive, one-handed touch controls. Clean, 2D, line based art style. Expansive, top-down, procedurally generated city. Interactable pedestrian and traffic AI.`,
        ],
        details: [
            `Created in Unity with C#`
        ],
        media: [
            { type: "video", src: gameClip }
        ]
    },
];