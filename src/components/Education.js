import "./Styles.css"
import React from "react";

class Education extends React.Component {

    render () {
        return (
            <div className="educationSection">
                <div className="educationTitle"><h2>Education</h2></div>
                <div className="school" id="devmountain">
                    <div className="school-image-1"></div>
                    <div className="schoolContainer-1">
                        <div className="line-1">
                            <div><h3>DevMountain</h3>August 2021 - November 2021</div>
                            <h5>Lehi, Utah (Remote)</h5>
                        </div>
                        <div className="line-2">
                            <ul>
                                <li>16 week full stack software development course</li>
                                <li>Deep dive into full stack software development learning all the skills required to be a successful programmer</li>
                                <li>Facilitated a life altering event where individual learning skills, professional relationships, and critical thinking is internalized.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="school" id="byu">
                    <div className="schoolContainer-2">
                        <div className="line-1">
                            <div><h3>Brigham Young University</h3>2019 - Current</div>
                            <h5>Provo, Utah</h5>
                        </div>
                        <div className="line-2">
                            <ul>
                                <li>Music Performance Major, Emphasis in Percussion</li>
                                <li>Daily study of music theory, aspects of performance, and professional development</li>
                                <li>Following passion with discipline and frequently given opportunities to perform under high stress situations, learning to work through difficult periods of time</li>
                            </ul>
                        </div>
                        <div id="skills"></div>
                    </div>
                    <div className="school-image-2"></div>
                </div>
            </div>
        )
    }
}

export default Education;