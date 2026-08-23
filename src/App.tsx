import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Lookbook } from './components/Lookbook';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer for scroll spy and scroll-reveal animations
  useEffect(() => {
    const sectionIds = ['home', 'about', 'gallery', 'lookbook', 'partnerships', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver for reveal-on-scroll elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#121212] selection:bg-[#D4AF37] selection:text-[#FFFFFF] font-sans antialiased">
      {/* Navbar with brand logo "ANA" */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Layout */}
      <main id="main-content">
        {/* 1. Hero Section ("THE WORLD OF ANA") */}
        <Hero />

        {/* 2. About Section ("Defining the Moment") */}
        <About />

        {/* 3. Exclusive Gallery ("ANA'S MOMENTS") */}
        <Gallery />

        {/* 4. Lookbook & Brand Partnerships */}
        <Lookbook />

        {/* 5. Contact Section ("Connect with Ana") */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
