import "./Styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AboutMe extends React.Component {
    render() {
        return (
            <div className="aboutMe">
                <div className="photo-container">
                <div className="backgroundPic">
                    <div className="profilePic">
                    </div>
                </div>
                </div>
                <div className="aboutMe-2">
                    <div className="descriptionTitle"><h2>About Me</h2></div>
                    <div className="description">
                     Hi! I'm Daniel Janis. I am a software developer based out of South Jordan, UT.
                    I learned to code at Devmountain's Web Development "bootcamp", a 16 week course learning full stack development 
                    and many other skills developers in today's industry need. I am a BYU student majoring in Music Performance. 
                    I love to learn and I love to create. Music is a great outlet and inspiration for me. However, software development is a passion of mine because I love to see something built
                    from the ground up. I also love to get creative! In my free time, I enjoy spending time with my family, playing my drums, and exercise.
                   
                    </div>
                    <div className="generalInfo" id="education">
                                <a href="https://drive.google.com/file/d/1HF62Ikl2ZfFaao9EN_zCr3WucgEfcAr7/view?usp=sharing" target="_blank"><FontAwesomeIcon icon="file" className="infoLinks" /></a>
                                <a href="mailto:danieleliotjanis@gmail.com" target="_blank"><FontAwesomeIcon icon="envelope" className="infoLinks" /></a>
                                <a href="https://www.linkedin.com/in/daniel-janis-71995119a/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} className="infoLinks" /></a>
                                <a href="https://github.com/daniel-janis" target="_blank"><FontAwesomeIcon icon={["fab", "github-square"]} className="infoLinks" /></a>
                                <a href="https://www.facebook.com/daniel.e.janis" target="_blank"><FontAwesomeIcon icon={["fab", "facebook-square"]} className="infoLinks" /></a>
                    </div>
                </div>
            </div>
        )
    }
};

export default AboutMe;