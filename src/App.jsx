import './App.scss';
import Header from "./ components/Header/Header";
import Main from "./ components/Main/Main";
import Skills from "./ components/Skills/Skills";
import Projects from "./ components/Projects/Projects";
import Contacts from "./ components/Contacts/Contacts";
import {Footer} from "./ components/Footer/Footer";
import {v1} from "uuid";
import todoImg from "./assets/images/flat-lay-notebook-with-list-desk.jpg";
import socialMediaImg from "./assets/images/6976388_4575.jpg";
import financeImg from "./assets/images/close-up-education-economy-objects.jpg";
import botImg from "./assets/images/8252.jpg"
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import {FaSass} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaServer} from "react-icons/fa";
import {FaDocker} from "react-icons/fa";
import {SiRedux} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {SiStorybook} from "react-icons/si";
import {SiMaterialui} from "react-icons/si";

function App() {

    const skills = [
        {
            skillId: v1(),
            skillName: "TypeSript",
            componentImg: <SiTypescript size={"60"}/>,
            imgSrc: "",
            imgAlt: "TS icon",
            skillDescription: " Lorem Ipsum generators on the Internet tend to repeat first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ips"
        },
        {
            skillId: v1(),
            skillName: "REST API",
            componentImg: <FaServer size={"60"}/>,
            imgSrc: "",
            imgAlt: "JS icon",
            skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use the Internet tend to repeat first true generator on the Internet. It use"
        },
        {
            skillId: v1(),
            skillName: "React",
            componentImg: <FaReact size={"60"}/>,
            imgSrc: "",
            imgAlt: "React icon",
            skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        },
        {
            skillId: v1(),
            skillName: "Redux",
            componentImg: <SiRedux size={"60"}/>,
            imgSrc: "",
            imgAlt: "Redux icon",
            skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        },
        {
            skillId: v1(),
            skillName: "SASS & CSS",
            componentImg: <FaSass size={"60"}/>,
            imgSrc: "",
            imgAlt: "CSS icon",
            skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        },
        {
            skillId: v1(),
            skillName: "HTML",
            componentImg: <FaHtml5 size={"60"}/>,
            imgSrc: "",
            imgAlt: "HTML icon",
            skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        },
        {
            skillId: v1(),
            skillName: "Storybook",
            componentImg: <SiStorybook size={"60"}/>,
            imgSrc: "",
            imgAlt: "Storybook icon",
            skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        },
        {
            skillId: v1(),
            skillName: "MaterialUI",
            componentImg: <SiMaterialui size={"60"}/>,
            imgSrc: "",
            imgAlt: "Storybook icon",
            skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        },
        {
            skillId: v1(),
            skillName: "Git",
            componentImg: <FaGithub size={"60"}/>,
            imgSrc: "",
            imgAlt: "Git icon",
            skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        },
        {
            skillId: v1(),
            skillName: "Docker",
            componentImg: <FaDocker size={"60"}/>,
            imgSrc: "",
            imgAlt: "Git icon",
            skillDescription: "some text the Internet tend to repeat first true generator on the Internet. It use"
        },
    ];


    const projects = [
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
    ]

    const contacts = [
        {
            id: v1(), contactName: "Git",
            imgComponent: <FaGithub size={"30"}/>,
            // imgComponent: <GitHubIcon/>,
            link: "https://github.com/AnyaGalkina"
        },
        {
            id: v1(), contactName: "LinkedIn",
            imgComponent: <FaLinkedin size={"30"}/>,
            // imgComponent: <LinkedInIcon/>,
            link: ""
        },
        {
            id: v1(), contactName: "Instagram",
            imgComponent: <FaInstagram size={"30"}/>,
            link: ""
        }
    ]


    return (
        <div className="App">
            <Header/>
            <Main contacts={contacts}/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <Contacts/>
            <Footer contacts={contacts}/>
        </div>
    );
}

export default App;
