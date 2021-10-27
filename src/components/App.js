import "./Styles.css"
import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Education from "./Education";

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