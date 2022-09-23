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
import todoImg from "../assets/images/flat-lay-notebook-with-list-desk.jpg";
import socialMediaImg from "../assets/images/6976388_4575.jpg";
import financeImg from "../assets/images/close-up-education-economy-objects.jpg";
import botImg from "../assets/images/8252.jpg";


export const state = {
    skills: [
        {
            skillId: v1(),
            skillName: "TypeSript",
            componentImg: <SiTypescript size={"60"}/>,
            imgSrc: "",
            imgAlt: "TS icon",
            skillDescription: ["Programming languages: ", "Type script and Java script"]
        },
        {
            skillId: v1(),
            skillName: "REST API",
            componentImg: <FaServer size={"60"}/>,
            imgSrc: "",
            imgAlt: "JS icon",
            skillDescription: ["Requests: get, post, put, delete", "Postman", "Axios/fetch", "Working with Backend documentation"]
        },
        {
            skillId: v1(),
            skillName: "React",
            componentImg: <FaReact size={"60"}/>,
            imgSrc: "",
            imgAlt: "React icon",
            skillDescription:
[                "some text the Internet tend to repeat first true generator on the Internet. It use"
]        },
        {
            skillId: v1(),
            skillName: "Redux",
            componentImg: <SiRedux size={"60"}/>,
            imgSrc: "",
            imgAlt: "Redux icon",
            skillDescription: ["Redux and Redux-toolkit", "TDD for Reducers", "Redux-Thunks and Redux-sagas", "React-redux"],
        },
        {
            skillId: v1(),
            skillName: "SASS & CSS",
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
            skillDescription: ["Team experiance working with git: ", "create new repository, push commits, rebase, pull requests, mearge and fetch"]
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
            projectDescription: 'One of my specialties is taking aklcmasknmc',
            imgSrc: todoImg,
            projectLink: "https://AnyaGalkina.github.io/todolist-app"
        },
        {
            projectId: v1(),
            projectName: "Social Network",
            projectDescription: 'One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics ',
            imgSrc: socialMediaImg,
            projectLink: ""
        },
        {
            projectId: v1(),
            projectName: "Finance Tracker",
            projectDescription: 'One of my specialties is taking aklcmasknmc One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics',
            imgSrc: financeImg,
            projectLink: "https://AnyaGalkina.github.io/finance_tracker"
        },
        {
            projectId: v1(),
            projectName: "Telegram Bot",
            projectDescription: 'One of my specialties is taking aklcmasknmc One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics',
            imgSrc: botImg,
            projectLink: ""
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
            // imgComponent: <GitHubIcon/>,
            link: "https://github.com/AnyaGalkina"
        },
        {
            id: v1(), contactName: "LinkedIn",
            imgComponent: <FaLinkedin size={"25"}/>,
            // imgComponent: <LinkedInIcon/>,
            link: ""
        },
        {
            id: v1(), contactName: "Instagram",
            imgComponent: <FaInstagram size={"25"}/>,
            link: "https://www.instagram.com/anyablackbird/"
        }
    ],
}

