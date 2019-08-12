import React, { Component } from 'react';
import picofme from './picture/picofme.jpg';

export default class Bio extends Component {
    render() {
       return (
            <section className="bio">
                <div className="pic_container"><img className="self_pic" src={picofme} alt="The subject of this portfolio, yours truly, Brendan Meehan." height="250" width="250"/></div>
                <h1 className="mainName">Brendan Meehan</h1>
                <h2 className="hello">Hello</h2>
                <h2>My name is Brendan, and I am a full-stack developer,<br></br>bridging the gap between creativity and functionality.</h2>
                <p className="projects_scroll" onClick={() => this.props.scroll()}>Projects</p>
                <section className="bio_info">
                    <p>I am currently a student at Thinkful's Full Stack web development program. 
                    Ever since I built my first computer, I have had a growing passion for technology in all its facets, 
                    but more specifically with learning how software functions. Solving unique problems in creative ways 
                    is what drives me, and the more I explored programming and software development, 
                    the more I fell in love with it. The process of turning an idea into code, 
                    and watching that code become a useful, hands on solution never ceases to excite me. 
                    Through building a multitude of well structured, reusable functions and crafting user friendly, 
                    accessible UI, I have taken my passion and put it to use, solving problems one web page at a time.</p>
                  </section>
              </section>
        )
    }
}