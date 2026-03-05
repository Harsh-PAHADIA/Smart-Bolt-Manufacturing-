import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}></div>
        <div className={styles.logoText}>Smart Bolt</div>
      </div>
      
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#dashboard" className={styles.navItem}>
              <span className={styles.icon}></span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#production" className={styles.navItem}>
              <span className={styles.icon}></span>
              <span>Production Flow</span>
            </a>
          </li>
          <li>
            <a href="#defects" className={styles.navItem}>
              <span className={styles.icon}></span>
              <span>Defect Analysis</span>
            </a>
          </li>
          <li>
            <a href="#docs" className={styles.navItem}>
              <span className={styles.icon}></span>
              <span>Standard Work</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <small>Manufacturing MES v1.0</small>
      </div>
    </aside>
  );
}