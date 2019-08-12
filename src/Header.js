import React from 'react';

export default function Header(props) {
    return (
        <header className="header">
            <nav className="external_nav">
              <a href="https://github.com/bmtron" target="_blank" rel="noopener noreferrer">GitHub</a><div>|</div>
              <a href="https://www.linkedin.com/in/brendan-meehan" target="_blank" rel="noopener noreferrer">LinkedIn</a><div>|</div>
              <a href="mailto:bmmeehan3@gmail.com?Subject=Let's Get in Touch" target="_blank" rel="noopener noreferrer">Email</a>
            </nav>
          </header>
    )
}