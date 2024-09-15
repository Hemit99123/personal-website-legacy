import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const options = {
      threshold: 1 // Adjust this value to set how much of the section should be visible to trigger the observer
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <div>
      <SideBar activeSection={activeSection} />
      <section id='hero' className='h-screen flex'>
        <HeroSection />
      </section>

      <section id='about' className='flex'>
        <About />
      </section>

      <section id='projects' className='flex'>
        <Projects />
      </section>
    </div>
  );
}

export default App;
