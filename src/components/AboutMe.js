import "./Styles.css";
import React from "react";

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
                        <table>
                            <tr>
                                <td>{/*paper form icon*/} Resume</td>
                                <td><a>Download Resume</a></td>
                            </tr>
                            <tr>
                                <td>{/*globe icon*/} Location</td>
                                <td><a>South Jordan, UT, USA</a></td>
                            </tr>
                            <tr>
                                <td>{/*email icon*/} Email</td>
                                <td><a href="" target="_blank">DanielEliotJanis@gmail.com</a></td>
                            </tr>
                            <tr>
                                <td>{/*linkedin icon*/} LinkedIn</td>
                                <td><a href="https://www.linkedin.com/in/daniel-janis-71995119a/" target="_blank">Daniel Janis on LinkedIn</a></td>
                            </tr>
                            <tr>
                                <td>{/*github icon*/} GitHub</td>
                                <td><a href="https://github.com/DanJan1999" target="_blank">DanJan1999 </a></td>
                            </tr>
                            <tr>
                                <td>{/*facebook icon*/} FaceBook</td>
                                <td><a href="https://www.facebook.com/daniel.e.janis" target="_blank">Daniel Janis on Facebook</a></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
};

export default AboutMe;