import "./Styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProfessionalExp extends React.Component {
    render() {
        return(
            <div className="professionalExp">
                <div className="proExpTitle"><h2>Professional Experience</h2></div>
                <div className="projects" id="project-1">
                <div className="projectsContainers">
                    <div className="projectLink">Drum Lessons Online | <a href="" target="_blank">Try it out here!</a></div>
                        <ul>
                            <li>Full stack project demonstrating skills and functionality needed for a fully functional web app designed to help someone learn to play the drums</li>
                            <li>Using industry standard tools, libraries, and languages; data is stored, requested, and received efficiently and reliably</li>
                            <li>Data and objects are displayed in sleek professional pages that don't distract from the product</li>
                        </ul>
                    </div>
                    <div className="projectScreenshot-1"></div>
                </div>
                <div className="projects" id="project-2">
                <div className="projectScreenshot-2"></div>
                <div className="projectsContainers">
                    <div className="projectLink">Tube Searching | <a href="https://tube-searching.herokuapp.com/" target="_blank">Try it out here!</a></div>
                        <ul>
                            <li>Using React, API's, and Semantic UI, this app allows users to mimic searching youtube for videos based on a keyword search</li>
                            <li>Made in order to demonstrate reliable use of API's and an understanding of React components</li>
                            <li>Done simply, using industry standard methods in order to ensure quality</li>
                        </ul>
                    </div>
                </div>
                <div className="projects" id="project-3">
                    <div className="projectsContainers">
                        <div className="projectLink">Magic 8 Ball | <a href="https://magic8ball-fortune.herokuapp.com/" target="_blank">Try it out here!</a></div>
                            <ul>
                                <li>Fun magic 8 ball page that takes a question, and gives an 8 ball response</li>
                                <li>Stores data and reuses repeated questions with corresponding answers</li>
                                <li>Demonstrates an understanding of front end development with HTML, CSS, and Javascript</li>
                            </ul>
                        </div>
                    <div className="projectScreenshot-3"></div>
                </div>
            </div>
        )
    }
};

export default ProfessionalExp;