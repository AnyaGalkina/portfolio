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
    FaDocker,
    FaJira,
    FaTelegram,
    FaNode
} from "react-icons/fa";
import todoImg from "../assets/images/todolist/flat-lay-notebook-with-list-desk.jpg";
import todoImg2 from "../assets/images/todolist/todo2.png";
import socialMediaImg from "../assets/images/social-network/happy-friends-looking-social-media-smartphone.jpg";
import socialMediaImg2 from "../assets/images/social-network/Screenshot-music.png";
import socialMediaImg3 from "../assets/images/social-network/Screenshot-profile.png";
import socialMediaImg4 from "../assets/images/social-network/Screenshot-news.png";
import financeImg from "../assets/images/finance-tracker/close-up-education-economy-objects.jpg";
import financeImg2 from "../assets/images/finance-tracker/finance.png";
import financeImg3 from "../assets/images/finance-tracker/goals.png";
import botImg from "../assets/images/tg-bot/robot.png";
import cardsImg from "../assets/images/cards/cardsImgMain.jpg";
import cardsImg2 from "../assets/images/cards/cardsImg.png";
import cardsImg3 from "../assets/images/cards/cardsImg2.png";
import shop1 from "../assets/images/shop/shop1.png";
import shop3 from "../assets/images/shop/shop3.png";
import shop2 from "../assets/images/shop/shop2.png";
import shop4 from "../assets/images/shop/shop4.png";
import star1 from "../assets/images/starWars/star1.png";
import star2 from "../assets/images/starWars/star2.png";
import star3 from "../assets/images/starWars/star3.png";
import star4 from "../assets/images/starWars/star4.png";
import star5 from "../assets/images/starWars/star5.png";
import calc1 from "../assets/images/calculator/calculator1.png";
import calc2 from "../assets/images/calculator/calculator2.png";
import calc3 from "../assets/images/calculator/calculator3.png";


export const state = {
    skills: [
        {
            skillId: v1(),
            skillName: "Programming languages",
            componentImg: <SiTypescript size={"60"}/>,
            imgSrc: "",
            imgAlt: "TS icon",
            skillDescription: ["TypeScript", "JavaScript (including modern approaches async/await, ES6)"]
        },
        {
            skillId: v1(),
            skillName: "Client-Server",
            componentImg: <FaServer size={"60"}/>,
            imgSrc: "",
            imgAlt: "JS icon",
            skillDescription: ["REST API", "Axios/fetch", "React Query", "WebSocket", "Swagger",]
        },
        {
            skillId: v1(),
            skillName: "React",
            componentImg: <FaReact size={"60"}/>,
            imgSrc: "",
            imgAlt: "React icon",
            skillDescription:
                ["Functional components, hocs and hooks:",
                    "useEffect, useState, memo, useRef, custom hooks",
                    "Class components"
                ]
        },
        {
            skillId: v1(),
            skillName: "Redux",
            componentImg: <SiRedux size={"60"}/>,
            imgSrc: "",
            imgAlt: "Redux icon",
            skillDescription: ["Redux", "Redux Toolkit",
                "Redux-thunks",
                "Redux-Saga",
                "React-redux"
            ],
        },
        {
            skillId: v1(),
            skillName: "SCSS, CSS3, HTML5",
            componentImg: <FaSass size={"60"}/>,
            imgSrc: "",
            imgAlt: "CSS icon",
            skillDescription: ["Scss: variables, mixins ", "CSS modules", "Styled-components", "Tailwindcss", "Responsive Web Design", "Mobile first approach", "Work with Figma"]
        },
        {
            skillId: v1(),
            skillName: "Tests",
            componentImg: <SiStorybook size={"60"}/>,
            imgSrc: "",
            imgAlt: "Storybook icon",
            skillDescription: ["Storybook and snapshots", "Unit tests", "Cypress", "Postman"]
        },
        {
            skillId: v1(),
            skillName: "UI libraries",
            componentImg: <SiMaterialui size={"60"}/>,
            imgSrc: "",
            imgAlt: "MU icon",
            skillDescription: ["Working with Material Ui, ", "Ant Design and other react libraries for css effects.", "Formik and Yup"]
        },
        {
            skillId: v1(),
            skillName: "Back-end(basic)",
            componentImg: <FaNode size={"60"}/>,
            imgSrc: "",
            imgAlt: "Node",
            skillDescription: ["Node.js", "Express", "Nodemailer", "MongoDB", 'validation, sort and pagination']
        },
        {
            skillId: v1(),
            skillName: "Git",
            componentImg: <FaGithub size={"60"}/>,
            imgSrc: "",
            imgAlt: "Git icon",
            skillDescription: ["GitHub, GitHub Pages", "Team work projects. ", "Create new repository, push commits, rebase, pull requests, merge and fetch"]
        },
        {
            skillId: v1(),
            skillName: "Docker",
            componentImg: <FaDocker size={"60"}/>,
            imgSrc: "",
            imgAlt: "Docker icon",
            skillDescription: ["Build the app’s container image.", "Use docker hub"]
        },
        {
            skillId: v1(),
            skillName: "Atlassian stack",
            componentImg: <FaJira size={"60"}/>,
            imgSrc: "",
            imgAlt: "Jira icon",
            skillDescription: ["Jira", "Confluence"]
        },
    ],
    projects: [
        {
            projectId: v1(),
            projectName: "To-Do list",
            main: "",
            projectDescription: 'To-Do List is a mobile responsive web app with the ability to login and create different To-Do lists with tasks and their descriptions, edit content, and track tasks\' status.',
            imgSrc: [todoImg, todoImg2],
            mobileResponsive: true,
            technicalStack: "REST API, TS, React, Redux-toolkit, React-redux, React-router-dom v6, Axios, MUI, Formik, Jest.",
            gitHubLink: "https://github.com/AnyaGalkina/todolist-app",
            projectLink: "https://AnyaGalkina.github.io/todolist-app"
        },
        {
            projectId: v1(),
            projectName: "Learning Cards",
            main: "A team work project. ",
            projectDescription: 'Learning cards app with the ability to create your own profile account. Easy to create own packs with cards to learn in question/answer format and monitor your study progress. Use search and filters to find packs created by other users.',
            imgSrc: [cardsImg, cardsImg2, cardsImg3],
            mobileResponsive: false,
            technicalStack: "REST API, TS, React, Redux-toolkit, React-redux, React-router-dom v6, Axios, MUI, Formik, Jest.",
            gitHubLink: "https://github.com/AnyaGalkina/cards",
            projectLink: "https://anyagalkina.github.io/cards/"
        },
        {
            projectId: v1(),
            projectName: "Finance Tracker",
            main: 'Developed from scratch! ',
            projectDescription: 'Mobile responsive budget SPA that let you track expenditures and income with data saving in Local Storage. It also gives an opportunity to set goals and gradually save money to achieve the targets.',
            imgSrc: [financeImg, financeImg2, financeImg3],
            mobileResponsive: true,
            technicalStack: "TS, React, Redux, React-redux, React-router-dom v6, Local Storage, React-Chartjs-2, Docker, Webpack 5, MUI, React-Fontawesome, Jest, Uuid.",
            gitHubLink: "https://github.com/AnyaGalkina/finance_tracker",
            projectLink: "https://AnyaGalkina.github.io/finance_tracker"
        },
        {
            projectId: v1(),
            projectName: "Social Network",
            main: 'Mobile responsive SPA was developed with class container components and later refactored with functional components and hooks. ',
            projectDescription: 'Social Network for front-end developers: Log in and update profile info. Follow real users. Easy to chat thanks to WebSocket connection. Listen to music at the music library. Read TechCrunch news and share them with one click.',
            imgSrc: [socialMediaImg, socialMediaImg2, socialMediaImg3, socialMediaImg4],
            mobileResponsive: false,
            technicalStack: "REST API, WebSocket, Axios, TS, React, Redux, React-redux, React-router-dom v5, Antd, Howler.js, Formik, Jest, Uuid .",
            gitHubLink: "https://github.com/AnyaGalkina/samurai-way",
            projectLink: "https://anyagalkina.github.io/samurai-way"
        },
        {
            projectId: v1(),
            projectName: "Cakes online shop",
            main: '',
            projectDescription: 'Mobile responsive App. Online shop where you can order cakes and other sweets. Sort products by price and search by name. After making an order you will make email with order confirmation',
            imgSrc: [shop1, shop2, shop3, shop4],
            mobileResponsive: true,
            technicalStack: "REST API, TS, React, Redux-toolkit, Node.js, Express, MongoDB, React-redux, React-router-dom v6, MUI, Formik, Yup, Jest Snapshot, Storybook, Docker, ESlint.",
            gitHubLink: "https://github.com/AnyaGalkina/shop",
            projectLink: "https://anyagalkina.github.io/shop"
        },
        {
            projectId: v1(),
            projectName: "Star Wars",
            main: '',
            projectDescription: 'Mobile responsive App helps to find data about your favorite characters within the Star Wars universe.',
            imgSrc: [star1, star2, star3, star4, star5],
            mobileResponsive: true,
            technicalStack: "REST API, TS, React, Redux-toolkit, React-redux, React-router-dom v6, CSS, Jest, Storybook.",
            gitHubLink: "https://github.com/AnyaGalkina/star-wars",
            projectLink: "https://anyagalkina.github.io/star-wars/"
        },
        {
            projectId: v1(),
            projectName: "Drag & Drop Calculator-constructor",
            main: '',
            projectDescription: 'SPA with constructor and runtime mode. In constructor mode you can drag & drop parts of calculator to canvas in any order. In runtime mode you can use classic calculator.',
            imgSrc: [calc1, calc2, calc3],
            mobileResponsive: true,
            technicalStack: "TS, React, Redux-toolkit, React-redux, MUI, Jest, Figma, ESlint.",
            gitHubLink: "https://github.com/AnyaGalkina/calculator-constructor",
            projectLink: "https://anyagalkina.github.io/calculator-constructor/"
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
            contactDetails: "+7(962)911-46-95",
            imgComponent: <FaPhoneAlt size={"23"} color={"#59c378"}/>,
            link: "tel:+79629114695"
        },
        {
            id: v1(), contactName: "Email",
            contactDetails: "anna.blackbird1@gmail.com",
            imgComponent: <FaEnvelope size={"23"} color={"#59c378"}/>,
            link: "mailto:anna.blackbird1@gmail.com"
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
        },
        // {
        //     id: v1(), contactName: "CodeWars",
        //     imgComponent: <FaInstagram size={"25"}/>,
        //     link: "https://www.codewars.com/users/AnyaGalkina/"
        // }
    ],
}

