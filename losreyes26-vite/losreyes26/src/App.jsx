import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';
import Register from './components/Register';
import './App.css';

const HomePage = ({ activeSection, onNavigate }) => {
  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={onNavigate} />
      <main>
        <Hero />
        <Events />
        <Footer />
      </main>
    </>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'events', 'footer'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage activeSection={activeSection} onNavigate={handleNavigate} />} 
          />
          <Route path="/register/:eventId" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
