import './App.css';
import Header from "./ components/Header/Header";
import Main from "./ components/Main/Main";
import Skills from "./ components/Skills/Skills";
import Projects from "./ components/Projects/Projects";
import Contacts from "./ components/Contacts/Contacts";
import {Footer} from "./ components/Footer/Footer";
import {v1} from "uuid";
import todoImg from "./images/flat-lay-notebook-with-list-desk.jpg";
// import todoImg from "./images/top-view-notebook-with-checklist-desk.jpg";
import socialMediaImg from "./images/6976388_4575.jpg";
import financeImg from "./images/close-up-education-economy-objects.jpg";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {

    const skills = [
        {
            skillId: v1(),
            skillName: "TypeSript",
            imgSrc: "",
            imgAlt: "TS icon",
            skillDescription: " Lorem Ipsum generators on the Internet tend to repeat first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ips"
        },
        {skillId: v1(), skillName: "React", imgSrc: "", imgAlt: "React icon", skillDescription: "some text"},
        {skillId: v1(), skillName: "Redux", imgSrc: "", imgAlt: "Redux icon", skillDescription: "some text"},
        {skillId: v1(), skillName: "JavaSript", imgSrc: "", imgAlt: "JS icon", skillDescription: "some text"},
        {skillId: v1(), skillName: "CSS", imgSrc: "", imgAlt: "CSS icon", skillDescription: "some text"},
        {skillId: v1(), skillName: "HTML", imgSrc: "", imgAlt: "HTML icon", skillDescription: "some text"},
        {skillId: v1(), skillName: "Storybook", imgSrc: "", imgAlt: "Storybook icon", skillDescription: "some text"},
        {skillId: v1(), skillName: "Git", imgSrc: "", imgAlt: "Git icon", skillDescription: "some text"},
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
    ]

    const contacts = [
        {id: v1(), contactName: "Git",
            // imgSrc: GitHubIcon,
            // imgSrc: "",
            link: "https://github.com/AnyaGalkina"},
        {id: v1(), contactName: "LinkedIn",
            // imgSrc: LinkedInIcon,
            link: ""},
        {id: v1(), contactName: "Instagram",
            // imgSrc: InstagramIcon,
            link: ""},
    ]


    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skills={skills}/>
            <Projects projects={projects}/>
            <Contacts />
            <Footer contacts={contacts}/>
        </div>

    );
}

export default App;
