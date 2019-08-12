import React from 'react';
import './Project.css';

export default function Project(props) {
    let favIcons = {
        html: '<i class="fab fa-html5"></i>',
        css: '<i class="fab fa-css3-alt"></i>',
        javascript: '<i class="fab fa-js-square"></i>',
        jquery: ''
    }
    return (
        <section className="Project" id="Project">
            <h2 className="project_name">{props.name}</h2>
            <section className="ss_container">
                <img className="project_ss" src={props.screenshot} alt={props.ssAlt}/>
                <section className="hover_display">
                    <section className="project_info">
                        <ul className="project_tech">
                            {props.tech.map((item, index) => {
                                return <li style={{listStyleType: "none"}} key={index} className="tech_li">{item}</li>
                            })}
                        </ul>
                        <div className="links_container_container">
                            <a className="project_link" href={props.link} rel="noopener noreferrer" target="_blank"><div className="link_container">Live</div></a>
                            <a className="repo_link" href={props.repo} rel="noopener noreferrer" target="blank"><div className="link_container">GitHub</div></a>
                        </div>
                    </section>
                </section>
            </section>
            <section className="description">
                <p>{props.description}</p>
            </section>
        </section>
    )
}