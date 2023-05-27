import GitHubLogo from "../assets/images/github-mark-white.svg"
import LinkedInLogo from "../assets/images/linkedin-white.svg"

export default [
    {
        name: "smart-bot",
        links: [
            { title: "View Site", url: "https://mark-c-hoffner.github.io/smart-bot" },
            { title: "GitHub", url: "https://github.com/mark-c-hoffner/smart-bot" },
        ],
        description: [
            "Talk with an animated bot through dialog selection. Teach the bot colors.",
            "Site created with React, css and webpack.",
            "Full unit test coverage written in Jest."
        ]
    },
    {
        name: "Ride Commander",
        images: [{ src: GitHubLogo, label: "GitHub Logo" }, { src: LinkedInLogo, label: "LinkedIn Logo" }, { src: GitHubLogo, label: "GitHub Logo" }],
        description: [
            "Cloud Native Web App suite. Leverages Azure resources to provide communication and remote control to a fleet of buses and street performers.",
            "Identity services built on Azure Active Directory",
            "Hosted on Azure Static Web Apps for simple deployment",
            "Azure Functions ",
            "Azure Web PubSub provides real time communication and updates",
            ""
        ]
    },
];