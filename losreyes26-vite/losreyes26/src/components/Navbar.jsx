import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logoImg from '../assets/title.png';

const Navbar = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <img src={logoImg} alt="LOS REYES" className={styles.logoImage} />
        </div>
        <span className={styles.logoText}>LOS REYES</span>
        <span className={styles.logoYear}>'26</span>
      </div>

      <ul className={styles.navLinks}>
        {['home', 'events', 'footer'].map((item) => (
          <li key={item}>
            <button
              className={`${styles.navLink} ${activeSection === item ? styles.active : ''}`}
              onClick={() => onNavigate(item)}
            >
              <span className={styles.navLinkText}>{item.toUpperCase()}</span>
              <span className={styles.navUnderline}></span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
