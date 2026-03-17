import React from 'react';
import styles from './Footer.module.css';

const coordinators = {
  hod: [{ name: 'Dr. S. SAKTHI VINAYAGAM', role: 'HOD / CSE', phone: '+91 98651 40132' }],
  staff: [
    { name: 'PROF. V ASHOK KUMAR', role: 'AP / CSE', phone: '7708776431' },
  ],
  student: [
    { name: 'S. KARTHICK', role: 'Student Coordinator', phone: '6379001194' },
    { name: 'K. SHARMI', role: 'Student Coordinator', phone: '8122676570' },
  ]
};

const PersonCard = ({ name, role, phone, highlight }) => (
  <div className={`${styles.personCard} ${highlight ? styles.highlight : ''}`}>
    <div className={styles.avatar}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="6" stroke="#ff8c00" strokeWidth="1.2"/>
        <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#ff8c00" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    </div>
    <div className={styles.personInfo}>
      <span className={styles.personName}>{name}</span>
      <span className={styles.personRole}>{role}</span>
      {phone && <span className={styles.personPhone}>{phone}</span>}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerGlow}></div>

      <div className={styles.footerContent}>
        {/* Registration Info */}
        <div className={styles.registrationSection}>
          <h4 className={styles.regTitle}>REGISTRATION INFORMATION</h4>
          <div className={styles.regBox}>
            <div className={styles.regNote}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{flexShrink:0}}>
                <circle cx="8" cy="8" r="7" stroke="#ff8c00" strokeWidth="1.2"/>
                <line x1="8" y1="7" x2="8" y2="11" stroke="#ff8c00" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="5" r="0.8" fill="#ff8c00"/>
              </svg>
              <span className={styles.regNoteLabel}>NOTE</span>
            </div>
            <div className={styles.regDetails}>
              <div className={styles.regItem}>
                <span className={styles.regLabel}>Day 1 Technical Symposium</span>
                <span className={styles.regValue}>Rs 250/-</span>
              </div>
              <div className={styles.regItem}>
                <span className={styles.regLabel}>Day 2 Workshop</span>
                <span className={styles.regValue}>Rs 400/-</span>
              </div>
              <div className={styles.regItem}>
                <span className={styles.regLabel}>Combined Combo (D1 & D2)</span>
                <span className={styles.regValue}>Rs 550/-</span>
              </div>
              <div className={styles.regItem}>
                <span className={styles.regLabel}>Mode</span>
                <span className={styles.regValue}>Online / On-Spot</span>
              </div>
              <div className={styles.regItem}>
                <span className={styles.regLabel}>Contact</span>
                <span className={styles.regValue}>Dept of CSE, JCT</span>
              </div>
            </div>

            <div className={styles.regInstructions}>
              <h5 className={styles.instructionTitle}>IMPORTANT INSTRUCTIONS</h5>
              <ul className={styles.instructionList}>
                <li>Registration can be done online through the website or on-spot at the venue.</li>
                <li>Registration fee must be paid per head at the registration desk.</li>
                <li>Participants must carry their college ID cards for verification during on-spot registration.</li>
                <li>Online registered participants should show their confirmation at the help desk.</li>
              </ul>
              
              <div className={styles.regAction}>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScF9ItKaym5Yjh9wAPFxjRRj8aXOEY_bpMsejOIEz_e42TE1g/viewform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.regButton}
                >
                  <span>REGISTER & PAY NOW</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coordinators Section */}
        <div className={styles.coordinatorsSection}>
          {/* Top row: HOD, Staff */}
          <div className={styles.topCoordinators}>
            <div className={styles.coordGroup}>
              <h4 className={styles.coordTitle}>HOD</h4>
              <div className={styles.coordCards}>
                {coordinators.hod.map((p, i) => (
                  <PersonCard key={i} {...p} highlight />
                ))}
              </div>
            </div>

            <div className={styles.coordDivider}></div>

            <div className={styles.coordGroup}>
              <h4 className={styles.coordTitle}>STAFF COORDINATORS</h4>
              <div className={styles.coordCards}>
                {coordinators.staff.map((p, i) => (
                  <PersonCard key={i} {...p} />
                ))}
              </div>
            </div>
          </div>

          {/* Student Coordinators */}
          <div className={styles.studentCoords}>
            <h4 className={styles.coordTitle}>STUDENT COORDINATORS</h4>
            <div className={styles.studentGrid}>
              {coordinators.student.map((p, i) => (
                <PersonCard key={i} {...p} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.footerLogo}>
            <svg viewBox="0 0 40 40" width="28" height="28">
              <polygon points="20,2 38,35 2,35" fill="none" stroke="#ff8c00" strokeWidth="2"/>
              <circle cx="20" cy="22" r="3" fill="#ff8c00"/>
            </svg>
            <div className={styles.footerLogoText}>
              <span className={styles.footerEventName}>VAHG FINIX '26</span>
              <span className={styles.footerOrgName}>JCT COLLEGE OF ENGINEERING AND TECHNOLOGY</span>
              <span className={styles.footerDeptName}>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</span>
            </div>
          </div>
          <div className={styles.copyright}>
            © 2026 VAHG FINIX '26 — DEPT. OF COMPUTER SCIENCE AND ENGINEERING
            <br />
            JCT COLLEGE OF ENGINEERING AND TECHNOLOGY
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
