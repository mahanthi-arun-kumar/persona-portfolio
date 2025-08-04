import React from 'react';

const About = () => {
    const skills = [
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Angular",
        "Node.js",
        "Cypress",
        "Playwright",
        "HTML",
        "CSS",
    ];

    return (
        <section id="about" className="section container">
            <h2 style={{color: "var(--lightest-slate)"}} className="numbered-heading">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Hello! My name is Arun and I enjoy
                        creating things that live on the internet.
                    </p>
                    <p>
                        Fast-forward to today, and I've had the
                        privilege of working at a MNC, a start-up, and huge corporation. My main focus
                        these days is building accessible, inclusive
                        products and digital experiences at
                        Hashedin By deloitte for a variety of clients.
                    </p>
                   
                    <p>
                        Here are a few technologies I've been
                        working with recently:
                    </p>
                    <ul className="skills-list">
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="about-pic">
                    <div className="wrapper">
                        <img
                            className="img"
                            src="/arun.jpg"
                            alt="Headshot"
                            width="500"
                            height="500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 