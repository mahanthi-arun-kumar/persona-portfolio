import React, { useState, useEffect } from 'react';

const Navigation = ({ isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
                <div>
                    <a href="#" className="nav-logo">
                        MAK
                    </a>
                </div>
                <div>
                    <ul className="nav-links">
                        <li>
                            <a href="#about">01. About</a>
                        </li>
                        <li>
                            <a href="#experience">02. Experience</a>
                        </li>
                        <li>
                            <a href="#work">03. Work</a>
                        </li>
                        <li>
                            <a href="#contact">04. Contact</a>
                        </li>
                        <li>
                            <a
                                href="/resume.pdf"
                                className="resume-button"
                                download="resume.pdf"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                    <button
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
            
            <aside className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <nav>
                    <ol>
                        <li>
                            <a href="#about" onClick={handleMenuItemClick}>About</a>
                        </li>
                        <li>
                            <a href="#experience" onClick={handleMenuItemClick}>Experience</a>
                        </li>
                        <li>
                            <a href="#work" onClick={handleMenuItemClick}>Work</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={handleMenuItemClick}>Contact</a>
                        </li>
                    </ol>
                    <a href="/resume.pdf" className="resume-link" download="resume.pdf">
                        Resume
                    </a>
                </nav>
            </aside>
        </>
    );
};

export default Navigation;