import React, { useState } from 'react';

const Experience = () => {
    const [activeTabId, setActiveTabId] = useState(0);

    const jobsData = [
        {
            title: "Software Engineer - III ",
            company: "Hashedin By Deloitte",
            range: "Oct 2020 - Present",
            url: "https://hashedin.com/",
            html: [
                "Led front-end and QA teams in developing React-based UIs for various HPE cloud as-a-service products.",
                "Owned the internationalization process for the platform, ensuring global readiness across features and content",
                "Oversaw monthly production pushes for a large-scale enterprise application with millions of users.",
                "Interacted with various HPE and Deloitte teams to improve delivery ratio focusing on value generation",
                "Contributed to major frontend upgrades including React 18 and Grommet, enhancing app performance, improving UI responsiveness, and ensuring alignment with updated design system and accessibility standards",
                "Worked with a variety of languages, platforms, frameworks, and content management systems such as JavaScript, React, Cypress, Playwright, Testrail, and Vercel",                         
            ],
        },
        {
            title: "Assosciate Software Engineer",
            company: "Tekion",
            range: "June 2019 - October 2020",
            url: "https://tekion.com/",
            html: [
                "Took complete ownership of critical modules such as Customer invoice and Cheque printing to ensure end to end development and delivery.",
                "Worked on performance optimization and wrote high quality test cases for developed features."
            ],
        },
        {
            title: "Software Engineer Intern",
            company: "Publicis Sapient",
            range: "Feb - Jan 2019",
            url: "https://www.publicissapient.com/",
            html: [
                "Developed an app called Smart logistics, for transporting goods from one place to another. Built from scratch using React for frontend and Java for backend.",
                "I was trained in the technologies of React and Java.",
            ],
        }
    ];

    return (
        <section id="experience" className="section container">
            <h2 className="numbered-heading">Where I've Worked</h2>
            <div className="jobs">
                <div className="inner">
                    <div
                        className="tablist"
                        role="tablist"
                        aria-label="Job tabs"
                    >
                        {jobsData.map((job, index) => (
                            <button
                                key={index}
                                className={`tab ${activeTabId === index ? "active" : ""}`}
                                id={`tab-${index}`}
                                role="tab"
                                tabIndex={
                                    activeTabId === index
                                        ? "0"
                                        : "-1"
                                }
                                aria-selected={
                                    activeTabId === index
                                }
                                aria-controls={`panel-${index}`}
                                onClick={() =>
                                    setActiveTabId(index)
                                }
                            >
                                <span>{job.company}</span>
                            </button>
                        ))}
                    </div>
                    <div className="tabpanels">
                        {jobsData.map((job, index) => (
                            <div
                                key={index}
                                className="tabpanel"
                                id={`panel-${index}`}
                                role="tabpanel"
                                tabIndex="0"
                                aria-labelledby={`tab-${index}`}
                                style={{
                                    display:
                                        activeTabId === index
                                            ? "block"
                                            : "none",
                                }}
                            >
                                <h3>
                                    <span>{job.title}</span>
                                    <span className="company">
                                        &nbsp;@&nbsp;
                                        <a
                                          style={{ color: "var(--green)" }}
                                           
                                            href={job.url}
                                            className="inline-link"
                                        >
                                            {job.company}
                                        </a>
                                    </span>
                                </h3>
                                <p className="range">{job.range}</p>
                                <div>
                                    <ul className="job-details">
                                        {job.html.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;