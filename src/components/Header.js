import "./Styles.css"
import React from "react";

class Header extends React.Component {


    render () {
        return (
            <div className="headerBar">
                <div className="myName"><h1>Daniel Janis</h1><p className="myTitle">Software Developer</p></div>
                <nav className="headerNav">
                    <a href="#top"><h3>About Me</h3></a>
                    <a href="#education"><h3>Education</h3></a>
                    <a href="#skills"><h3>Skills</h3></a>
                    <a href="#professionalExp"><h3>Professional Experience</h3></a>
                    <a href="#contactMe"><h3>Contact Me</h3></a>
                </nav>
            </div>
        )
    }
};

export default Header;