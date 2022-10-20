import {v1} from "uuid";
import {SiMaterialui, SiRedux, SiStorybook, SiTypescript} from "react-icons/si";
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaPhoneAlt,
    FaReact,
    FaSass,
    FaServer,
    FaTelegram
} from "react-icons/fa";
import todoImg from "../assets/images/todolist/flat-lay-notebook-with-list-desk.jpg";
import todoImg2 from "../assets/images/todolist/todo2.png";
import socialMediaImg from "../assets/images/social-network/6976388_4575.jpg";
import financeImg from "../assets/images/finance-tracker/close-up-education-economy-objects.jpg";
import financeImg2 from "../assets/images/finance-tracker/finance.png";
import financeImg3 from "../assets/images/finance-tracker/goals.png";
import botImg from "../assets/images/tg-bot/8252.jpg";
import cardsImg from "../assets/images/cards/cardsImgMain.png";
import cardsImg2 from "../assets/images/cards/cardsImg.png";
import cardsImg3 from "../assets/images/cards/cardsImg2.png";


export const state = {
    skills: [
        {
            skillId: v1(),
            skillName: "REST API",
            componentImg: <FaServer size={"60"}/>,
            imgSrc: "",
            imgAlt: "JS icon",
            skillDescription: ["Requests: get, post, put, delete", "Postman", "Axios/fetch", "Working with backend documentation"]
        },
        {
            skillId: v1(),
            skillName: "React",
            componentImg: <FaReact size={"60"}/>,
            imgSrc: "",
            imgAlt: "React icon",
            skillDescription:
                ["Functional components, hocs and hooks:",
                    "useEffect, useState, useCallback, useMemo, useRef, useReduce.",
                    "Class components"
                ]
        },
        {
            skillId: v1(),
            skillName: "Redux",
            componentImg: <SiRedux size={"60"}/>,
            imgSrc: "",
            imgAlt: "Redux icon",
            skillDescription: ["Redux and Redux-toolkit",
                // "TDD for Reducers",
                "Redux-thunks and Redux-sagas",
                // "React-redux"
            ],
        },
        {
            skillId: v1(),
            skillName: "Programming languages",
            componentImg: <SiTypescript size={"60"}/>,
            imgSrc: "",
            imgAlt: "TS icon",
            skillDescription: ["TypeScript and JavaScript"]
        },
        {
            skillId: v1(),
            skillName: "SCSS & CSS",
            componentImg: <FaSass size={"60"}/>,
            imgSrc: "",
            imgAlt: "CSS icon",
            skillDescription: ["Scss: variables, mixins ", "CSS modules", "Flex and grids", "Mobile first approach"]
        },
        // {
        //     skillId: v1(),
        //     skillName: "HTML",
        //     componentImg: <FaHtml5 size={"60"}/>,
        //     imgSrc: "",
        //     imgAlt: "HTML icon",
        //     skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        // },
        {
            skillId: v1(),
            skillName: "Tests",
            componentImg: <SiStorybook size={"60"}/>,
            imgSrc: "",
            imgAlt: "Storybook icon",
            skillDescription: ["Integration tests with storybook and snapshots", "Unit tests for reducers and thunks"]
        },
        {
            skillId: v1(),
            skillName: "UI libraries",
            componentImg: <SiMaterialui size={"60"}/>,
            imgSrc: "",
            imgAlt: "Storybook icon",
            skillDescription: ["Working with Material Ui, ", "AntDesign ", "and other react libraries for css effects"]
        },
        {
            skillId: v1(),
            skillName: "Git",
            componentImg: <FaGithub size={"60"}/>,
            imgSrc: "",
            imgAlt: "Git icon",
            skillDescription: ["Team work projects. ", "Create new repository, push commits, rebase, pull requests, merge and fetch"]
        },
        // {
        //     skillId: v1(),
        //     skillName: "Docker",
        //     componentImg: <FaDocker size={"60"}/>,
        //     imgSrc: "",
        //     imgAlt: "Git icon",
        //     skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        // },
    ],
    projects: [
        {
            projectId: v1(),
            projectName: "Todolist",
            main: "",
            projectDescription: 'Todo List app with ability to login.',
            imgSrc: [todoImg, todoImg2],
            mobileResponsive: true,
            technicalStack: "REST API, TS, React, Redux-toolkit, React-redux, React router dom v6, Axios, MUI, Formik, Jest.",
            gitHubLink: "https://github.com/AnyaGalkina/cards",
            projectLink: "https://AnyaGalkina.github.io/todolist-app"
        },
        {
            projectId: v1(),
            projectName: "Learning Cards",
            main: "Team work project ",
            projectDescription: 'Learning cards app with ability to create your own profile account. Easy to create own packs with cards to learn in question/answer format and monitor your study progress. Use search and filters to find packs created by other users.',
            imgSrc: [cardsImg, cardsImg2, cardsImg3],
            mobileResponsive: false,
            technicalStack: "REST API, TS, React, Redux-toolkit, React-redux, React router dom v6, Axios, MUI, Formik, Jest.",
            gitHubLink: "https://github.com/AnyaGalkina/cards",
            projectLink: "https://anyagalkina.github.io/cards/"
        },
        {
            projectId: v1(),
            projectName: "Finance Tracker",
            main: 'Developed from scratch ',
            projectDescription: 'Budget app that let you track expenditures and income. It\'s also give an opportunity to set goals and gradually save money to achieve the targets.',
            imgSrc: [financeImg, financeImg2, financeImg3],
            mobileResponsive: true,
            technicalStack: "TS, React, Redux, React-redux, React router dom v6, Local Storage, React-Chartjs-2, MUI, React-Fontawesome, Jest, Uuid.",
            gitHubLink: "https://github.com/AnyaGalkina/finance_tracker",
            projectLink: "https://AnyaGalkina.github.io/finance_tracker"
        },

        {
            projectId: v1(),
            projectName: "Social Network",
            main: 'App written with class components and refactored functional components with rect hooks.',
            projectDescription: '',
            imgSrc: [socialMediaImg],
            mobileResponsive: false,
            technicalStack: ""
            // "REST API, Typescript, React, Redux, React-redux, React router dom v5, Axios, MUI, Formik."
            ,
            gitHubLink: "https://github.com/AnyaGalkina/samurai-way",
            projectLink: ""
        },
        {
            projectId: v1(),
            projectName: "Telegram Bot",
            main: "",
            projectDescription: 'Training adviser for pole sportsmen which help them to choose exercises for different levels.',
            imgSrc: [botImg],
            mobileResponsive: true,
            technicalStack: "Javascript, Telegraf, Node-telegram-bot-api",
            gitHubLink: "https://github.com/AnyaGalkina/Pole-tg-bot",
            projectLink: "https://t.me/Pole_Training_Adviser_bot"
        },
    ],
    contacts: [
        {
            id: v1(), contactName: "Phone number",
            contactDetails: "+79629114695",
            imgComponent: <FaPhoneAlt size={"23"} color={"#59c378"}/>,
            link: ""
        },
        {
            id: v1(), contactName: "Email",
            contactDetails: "anna.blackbird1@gmail.com",
            imgComponent: <FaEnvelope size={"23"} color={"#59c378"}/>,
            link: "https://github.com/AnyaGalkina"
        },
        {
            id: v1(), contactName: "Telegram",
            contactDetails: "@anna_blackbird",
            imgComponent: <FaTelegram size={"23"} color={"#59c378"}/>,
            link: "https://t.me/anna_blackbird"
        },
    ],
    socialMedia: [
        {
            id: v1(), contactName: "Git",
            imgComponent: <FaGithub size={"25"}/>,
            link: "https://github.com/AnyaGalkina"
        },
        {
            id: v1(), contactName: "LinkedIn",
            imgComponent: <FaLinkedin size={"25"}/>,
            link: "https://www.linkedin.com/in/anna-galkina-28016088/"
        },
        {
            id: v1(), contactName: "Instagram",
            imgComponent: <FaInstagram size={"25"}/>,
            link: "https://www.instagram.com/anyablackbird/"
        }
    ],
}

