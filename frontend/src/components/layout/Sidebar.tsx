import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}></div>
        <div className={styles.logoText}>{t('logo_text')}</div>
      </div>
      
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#dashboard" className={styles.navItem}>
              <span className={styles.icon}></span>
              <span>{t('nav_dashboard')}</span>
            </a>
          </li>
          <li>
            <a href="#production" className={styles.navItem}>
              <span className={styles.icon}></span>
              <span>{t('nav_production')}</span>
            </a>
          </li>
          <li>
            <a href="#defects" className={styles.navItem}>
              <span className={styles.icon}></span>
              <span>{t('nav_defects')}</span>
            </a>
          </li>
          <li>
            <a href="#docs" className={styles.navItem}>
              <span className={styles.icon}></span>
              <span>{t('nav_docs')}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <small>{t('mes_version')}</small>
      </div>
    </aside>
  );
}