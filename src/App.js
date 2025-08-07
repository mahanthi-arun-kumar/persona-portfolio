import React, { useState, useEffect } from 'react';
import './styles.css';

// Import components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideElements from './components/SideElements';
import Analytics from './utils/analytics';

// Main App Component
function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Initialize Google Analytics when the app loads
        Analytics.initialize();
    
        // Track the initial page view
        Analytics.trackPageView();
  Analytics.trackButtonClick('Test Button', 'App Component');
      }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    // Intersection Observer for animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(".animate-in");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="App">
            <Navigation isScrolled={isScrolled} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <SideElements />
        </div>
    );
}

export default App; 