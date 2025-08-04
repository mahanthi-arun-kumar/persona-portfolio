import React from 'react';

const Hero = () => {
    return (
        <section className="hero container">
            <h1 className="fade-up delay-1">Hi, my name is</h1>
            <h2 className="fade-up delay-2">Mahanthi Arun Kumar</h2>
            <h3 className="fade-up delay-3">
                I build things for the web.
            </h3>
            <p className="fade-up delay-4">
                I'm a software engineer specializing in building
                (and occasionally designing) exceptional digital
                experiences. Currently, I'm focused on building
                accessible, human-centered products at{" "}
                <a
                    color="var(--green)"
                    href="https://hashedin.com/"
                    style={{ color: "var(--green)" }}
                >
                    Hashedin By Deloitte
                </a>
                .
            </p>
            <a
                href="mailto:arun.kannu123@gmail.com"
                className="email-link fade-up delay-5"
            >
                Get In Touch
            </a>
        </section>
    );
};

export default Hero; 