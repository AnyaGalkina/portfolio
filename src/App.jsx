import './App.scss';
import Header from "./ components/Header/Header";
import Main from "./ components/Main/Main";
import Skills from "./ components/Skills/Skills";
import Projects from "./ components/Projects/Projects";
import {Footer} from "./ components/Footer/Footer";
import Contacts from "./ components/Contacts/Contacts";
import {state} from "./state/state";


function App() {

    return (
        <div className="App">
            <Header socialMedia={state.socialMedia}/>
            <Main/>
            <Skills skills={state.skills}/>
            <Projects projects={state.projects}/>
            <Contacts contacts={state.contacts}/>
            <Footer socialMedia={state.socialMedia}/>
        </div>
    );
}

export default App;
