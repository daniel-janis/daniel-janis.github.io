import "./Styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AboutMe extends React.Component {
    render() {
        return (
            <div className="aboutMe" id="aboutMe">
                <div className="photo-container">
                <div className="backgroundPic">
                    <div className="profilePic">
                    </div>
                </div>
                </div>
                <div className="aboutMe-2">
                    <div className="description">
                     Hi! I'm Daniel Janis. I am a software developer based out of South Jordan, UT.
                    I learned to code at Devmountain's Web Development "bootcamp", a 16 week course learning full stack development 
                    and many other skills developers in today's industry need. I am a BYU student majoring in Music Performance. 
                    I love to learn and I love to create. Music is a great outlet and inspiration for me. However, software development is a passion of mine because I love to see something built
                    from the ground up. I also love to get creative! In my free time, I enjoy spending time with my family, playing my drums, and exercise.
                   
                    </div>
                    <div className="generalInfo">
                                <a href="https://docs.google.com/document/d/1k9YPmfDQpAO_ijNJM3-S1fmVdpr4y0DSJZolPfg9A4I/edit?usp=sharing" target="_blank"><FontAwesomeIcon icon="file" /></a>
                                <a><FontAwesomeIcon icon="map" /></a>
                                <a href="mailto:danieleliotjanis@gmail.com" target="_blank"><FontAwesomeIcon icon="envelope" /></a>
                                <a href="https://www.linkedin.com/in/daniel-janis-71995119a/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                                <a href="https://github.com/daniel-janis" target="_blank"><FontAwesomeIcon icon={["fab", "github-square"]} /></a>
                                <a href="https://www.facebook.com/daniel.e.janis" target="_blank"><FontAwesomeIcon icon={["fab", "facebook-square"]} /></a>
                    </div>
                </div>
            </div>
        )
    }
};

export default AboutMe;