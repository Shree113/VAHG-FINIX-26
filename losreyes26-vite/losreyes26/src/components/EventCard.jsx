import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './EventCard.module.css';

const EventCard = ({ event }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.card} ${expanded ? styles.expanded : ''}`}>
      <div className={styles.cardGlow}></div>
      <div className={styles.cardBorderAnim}></div>

      <div className={styles.cardHeader}>
        <h3 className={styles.eventName}>{event.name}</h3>
        <div className={styles.teamSize}>
          {event.min && <span>MIN {event.min}</span>}
          {event.min && event.max && <span className={styles.divider}>|</span>}
          {event.max && <span>MAX {event.max}</span>}
        </div>
      </div>

      <p className={styles.description}>{event.description}</p>

      <div className={styles.cardActions}>
        <Link
          to={`/register/${event.id}`}
          className={styles.btnRegister}
        >
          REGISTER
        </Link>
        <button
          className={styles.btnDetails}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'HIDE DETAILS ▲' : 'VIEW DETAILS ▼'}
        </button>
      </div>

      {expanded && (
        <div className={styles.detailsPanel}>
          <div className={styles.detailsInner}>
            <h4>Event Details</h4>
            <p>{event.details || event.description}</p>
            {event.rules && (
              <ul className={styles.rulesList}>
                {event.rules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
