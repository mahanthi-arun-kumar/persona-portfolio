import React from 'react';

const Projects = () => {
    const featuredProjects = [
        {
            title: "Personal portifolio",
            description:
                "A web app for showcasing personal projects, skills, and experiences. Built with React and bootstrap.",
            tech: [
                "React",
                "bootstrap",
            ],
            external: "https://arun-kumar-mahanthi.netlify.app/",
            image: "/project1.png",
        },
    ];

    return (
        <section id="work" className="section container">
            <h2 className="numbered-heading">
                Some Things I've Built
            </h2>
            <ul className="projects-grid">
                {featuredProjects.map((project, index) => (
                    <li key={index} className="project">
                        <div className="project-content">
                            <div>
                                <p className="project-overline">
                                    Featured Project
                                </p>
                                <h3 className="project-title">
                                    <a  style={{ color: "var(--green)"}}href={project.external}>
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="project-description">
                                    <p>{project.description}</p>
                                </div>
                                <ul className="project-tech-list">
                                    {project.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            aria-label="GitHub Link"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                width="22"
                                                height="22"
                                            >
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                    )}
                                    <a
                                        href={project.external}
                                        aria-label="External Link"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            width="22"
                                            height="22"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15,3 21,3 21,9"></polyline>
                                            <line
                                                x1="10"
                                                y1="14"
                                                x2="21"
                                                y2="3"
                                            ></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project-image">
                            <a href={project.external}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="img"
                                />
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects; 