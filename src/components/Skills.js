import "./Styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Skills extends React.Component {
    render () {
        return (
            <div className="skills" id="skills">
                <div className="skillsTitle"><h2>Skills</h2></div>
                <table className="skillsIconsTable">
                    <tr>
                        <td><FontAwesomeIcon icon={["fab", "js-square"]} className="skillsIcons" /><span class="background-image" role="img" aria-label="JavaScript"></span></td>
                        <td><FontAwesomeIcon icon={["fab", "react"]} className="skillsIcons" /><span class="background-image" role="img" aria-label="React JS"></span></td>
                        <td><FontAwesomeIcon icon={["fab", "node-js"]} className="skillsIcons" /><span class="background-image" role="img" aria-label="Node JS"></span></td>
                        <td><div className="pngIcons" id="expressIcon"><span class="background-image" role="img" aria-label="Express"></span></div></td>
                    </tr>
                    <tr>
                        <td><div className="pngIcons" id="postgreSQLIcon"><span class="background-image" role="img" aria-label="PostgreSQL"></span></div></td>
                        <td><FontAwesomeIcon icon={["fab", "aws"]} className="skillsIcons" /><span class="background-image" role="img" aria-label="Amazon Web Services"></span></td>
                        <td><FontAwesomeIcon icon={["fab", "css3-alt"]} className="skillsIcons" /><span class="background-image" role="img" aria-label="CSS"></span></td>
                        <td><FontAwesomeIcon icon={["fab", "git-square"]} className="skillsIcons" /><span class="background-image" role="img" aria-label="Git"></span></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={["fab", "github-square"]} className="skillsIcons" /><span class="background-image" role="img" aria-label="Github"></span></td>
                        <td><div className="pngIcons" id="postmanIcon"><span class="background-image" role="img" aria-label="Postman"></span></div></td>
                        <td><div className="pngIcons" id="herokuIcon"><span class="background-image" role="img" aria-label="Heroku"></span></div></td>
                        <td><FontAwesomeIcon icon={["fab", "html5"]} className="skillsIcons" /><span class="background-image" role="img" aria-label="Html"></span></td>
                    </tr>
                    <tr>
                        <td><div className="pngIcons" id="axiosIcon"><span class="background-image" role="img" aria-label="Axios"></span></div></td>
                    </tr>
                </table>
            </div>
        )
    }
};

export default Skills;