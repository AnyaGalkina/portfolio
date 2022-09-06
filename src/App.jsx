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
import {FaInstagram, FaLinkedin, FaReact, FaSass, FaHtml5, FaGithub, FaDocker, FaServer} from "react-icons/fa";
import {FaEnvelope, FaPhoneAlt, FaTelegram} from "react-icons/fa";
import {SiRedux, SiTypescript, SiStorybook, SiMaterialui} from "react-icons/si";


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
    ]

    const socialMedia = [
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
            link: "https://www.instagram.com/anyablackbird/"
        }
    ]


    return (
        <div className="App">
            <Header/>
            <Main contacts={socialMedia}/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <Contacts contacts={contacts}/>
            <Footer contacts={socialMedia}/>
        </div>
    );
}

export default App;
