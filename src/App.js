import './App.css';

import Header from './components/Header';
import TitleImage from "./components/TitleImage";
import Introduction from './components/Introduction';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {useRef} from "react";

function App() {
    const introRef = useRef(null);
    const skillRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const move_introRef = async () => {
        const introTop = await introRef.current?.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({
            top     : introTop,
            behavior: "smooth"
        })
        // introRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    const move_skillRef = async () => {
        const skillTop = await skillRef.current?.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({
            top     : skillTop,
            behavior: "smooth"
        })
        // skillRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    const move_projectRef = async () => {
        const projectTop = await projectRef.current?.getBoundingClientRect().top + window.scrollY -90;
        console.log(projectTop)
        window.scrollTo({
            top : projectTop,
            behavior: "smooth"
        })
    }
    const move_contactRef = async () => {
        const contactTop = await contactRef.current?.getBoundingClientRect().top + window.scrollY - 90;
        console.log(contactTop)
        window.scrollTo({
            top: contactTop,
            behavior: "smooth"
        })
    }

    return (
        <div className="App">
            <Header move_introRef={move_introRef} move_skillRef={move_skillRef}
                    moveProjectRef={move_projectRef} move_contactRef={move_contactRef}/>
            <TitleImage/>
            <Introduction ref={introRef}/>
            <Skill ref={skillRef}/>
            <Project ref={projectRef}/>
            <Contact ref={contactRef}/>
            <Footer/>
        </div>
    );
}

export default App;
