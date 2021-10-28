import "./Styles.css"
import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import ProfessionalExp from "./ProfessionalExp";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedin, faFacebookSquare, faGithubSquare, faJsSquare, faReact, faNodeJs, faAws, faGitSquare, faHtml5, faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap, faFile } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope, faMap, faFile, faLinkedin, faFacebookSquare, faGithubSquare, faJsSquare, faReact, faNodeJs, faAws, faGitSquare, faHtml5, faCss3Alt);

class App extends React.Component {
    render() {
        return (
            <div id="aboutMe">
                <Header />
                <AboutMe />
                <Education />
                <Skills />
                <ProfessionalExp />
                <ContactMe />
                <Footer />
            </div>
        )
    }
};

export default App;