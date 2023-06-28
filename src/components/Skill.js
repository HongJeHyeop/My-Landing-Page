import '../css/skill.css'
import { forwardRef } from "react";

function Skill(prop, ref) {
    return (
        <div id="skill" ref={ref}>
            <div id="skill-wrap">
                <h2>SKILL</h2>
                <div id="skill-list-wrap">
                    <div className="skill-list">
                        <h3>Back-End</h3>
                        <ul>
                            <li>Java</li>
                            <li>Spring</li>
                            <li>Spring Boot</li>
                            <li>Node-Express</li>
                            <li>Mybatis</li>
                        </ul>
                    </div>
                    <div className="skill-list">
                        <h3>Front-End</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React/React Hooks</li>
                        </ul>
                    </div>
                    <div className="skill-list">
                        <h3>Database</h3>
                        <ul>
                            <li>MySQL</li>
                            <li>MariaDB</li>
                        </ul>
                    </div>
                    <div className="skill-list">
                        <h3>Deploy</h3>
                        <ul>
                            <li>AWS EC2/RDS</li>
                            <li>Github pages</li>
                        </ul>
                    </div>
                    <div className="skill-list">
                        <h3>Tools</h3>
                        <ul>
                            <li>Git / Github</li>
                            <li>IntelliJ / WebStorm</li>
                            <li>Eclipse / VSConde</li>
                            <li>VMware</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Skill);