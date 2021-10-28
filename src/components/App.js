import "./Styles.css"
import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Education from "./Education";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedin, faFacebookSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap, faFile } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope, faMap, faFile, faLinkedin, faFacebookSquare, faGithubSquare);

class App extends React.Component {
    render() {
        return (
            <div id="top">
                <Header />
                <AboutMe />
                <Education />
            </div>
        )
    }
};

export default App;