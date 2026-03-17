import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import { eventsData } from '../data/events';
import styles from './Events.module.css';

const SectionTitle = ({ children, subtitle }) => (
  <div className={styles.sectionTitle}>
    <div className={styles.titleLine}></div>
    <div className={styles.titleContent}>
      <h2 className={styles.title}>{children}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
    <div className={styles.titleLine}></div>
  </div>
);

const Events = () => {
  return (
    <section className={styles.events} id="events">
      {/* Day 1 Header */}
      <div className={styles.dayBadge}>
        <span className={styles.dayLabel}>DAY — 1</span>
        <span className={styles.dayDate}>MARCH 25, 2026</span>
      </div>

      {/* Technical Events */}
      <div className={styles.category}>
        <SectionTitle subtitle="March 25, 2026">TECHNICAL EVENTS</SectionTitle>
        <div className={styles.gridTwoCols}>
          {eventsData.day1.technical.map((event, i) => (
            <div
              key={event.id}
              style={{ animationDelay: `${i * 0.1}s` }}
              className={styles.cardWrapper}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className={styles.categoryDivider}></div>

      {/* Non Technical Events */}
      <div className={styles.category}>
        <SectionTitle>NON-TECHNICAL EVENTS</SectionTitle>
        <div className={styles.gridTwoCols}>
          {eventsData.day1.nonTechnical.map((event, i) => (
            <div
              key={event.id}
              style={{ animationDelay: `${i * 0.1}s` }}
              className={styles.cardWrapper}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>

      {/* Day 2 Header */}
      <div className={`${styles.dayBadge} ${styles.dayBadge2}`}>
        <span className={styles.dayLabel}>DAY — 2</span>
        <span className={styles.dayDate}>MARCH 26, 2026</span>
      </div>

      {/* Webinar */}
      <div className={styles.category}>
        <SectionTitle>WEBINAR</SectionTitle>
        <div className={styles.webinarCard}>
          <div className={styles.webinarGlow}></div>
          <div className={styles.webinarImagePlaceholder}>
            <div className={styles.imagePlaceholderInner}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="4" y="8" width="40" height="30" rx="2" stroke="#ff8c00" strokeWidth="1.5"/>
                <polygon points="20,18 20,30 32,24" fill="rgba(255,140,0,0.6)"/>
                <line x1="16" y1="42" x2="32" y2="42" stroke="#ff8c00" strokeWidth="1.5"/>
                <line x1="24" y1="38" x2="24" y2="42" stroke="#ff8c00" strokeWidth="1.5"/>
              </svg>
              <span>WEBINAR PREVIEW</span>
            </div>
          </div>
          <div className={styles.webinarContent}>
            <h3 className={styles.webinarTitle}>{eventsData.day2.webinar.name}</h3>
            <p className={styles.webinarDesc}>{eventsData.day2.webinar.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
