import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (el) {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    }
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Animated background particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      {/* Scan line effect */}
      <div className={styles.scanLine}></div>

      <div className={styles.heroContent}>
        {/* College name */}
        <div className={styles.collegeBadge}>
          <span className={styles.collegeShort}>JCT</span>
          <span className={styles.collegeDivider}></span>
          <span className={styles.collegeFull}>COLLEGE OF ENGINEERING AND TECHNOLOGY</span>
        </div>

        <div className={styles.deptName}>
          DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
        </div>

        <div className={styles.presents}>
          <span className={styles.presentsLine}></span>
          <span className={styles.presentsText}>PRESENTS</span>
          <span className={styles.presentsLine}></span>
        </div>

        {/* Main title */}
        <div className={styles.titleWrapper}>
          <div className={styles.titleGlowBg}></div>
          <div className={styles.titleCornerTL}></div>
          <div className={styles.titleCornerTR}></div>
          <div className={styles.titleCornerBL}></div>
          <div className={styles.titleCornerBR}></div>
          <h1 className={styles.mainTitle} ref={titleRef}>
            LOS REYES <span className={styles.titleYear}>'26</span>
          </h1>
        </div>

        <div className={styles.symposiumLabel}>
          <div className={styles.labelLine}></div>
          <span>NATIONAL LEVEL TECHNICAL SYMPOSIUM</span>
          <div className={styles.labelLine}></div>
        </div>

        <div className={styles.dateWrapper}>
          <div className={styles.dateIcon}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="12" rx="1" stroke="#ff8c00" strokeWidth="1.2"/>
              <line x1="1" y1="6" x2="15" y2="6" stroke="#ff8c00" strokeWidth="1.2"/>
              <line x1="5" y1="1" x2="5" y2="5" stroke="#ff8c00" strokeWidth="1.5"/>
              <line x1="11" y1="1" x2="11" y2="5" stroke="#ff8c00" strokeWidth="1.5"/>
            </svg>
          </div>
          <span className={styles.date}>MARCH 25 &amp; 26, 2026</span>
        </div>

        <p className={styles.inviteText}>INVITES YOU ALL</p>

        <div className={styles.heroCta}>
          <button className={styles.ctaPrimary} onClick={() => document.getElementById('events').scrollIntoView({ behavior: 'smooth' })}>
            <span>EXPLORE EVENTS</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button className={styles.ctaSecondary} onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}>
            REGISTER NOW
          </button>
        </div>
      </div>

      <div className={styles.heroDecor}>
        <div className={styles.decorRing}></div>
        <div className={styles.decorRing2}></div>
      </div>
    </section>
  );
};

export default Hero;
