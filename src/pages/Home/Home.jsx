import AboutMe from "../../components/AboutMe/AboutMe";
import Banner from "../../components/Bannar/Banner";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Experience from "../../components/Skills/Experience";
import Animation from "../../components/AboutMe/animation";


const Home = () => {
    return (
        <div id="home">
            <Animation />
            <Banner />
            <Experience />
            <Projects />
            <AboutMe />
            <Contact />
        </div>
    );
};

export default Home;