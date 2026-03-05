import { useTranslation } from 'react-i18next';
import styles from './TopNavbar.module.css';

export default function TopNavbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ja' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('app_title')}</h1>
        <div className={styles.spacer}></div>
        <div className={styles.status}>
          <span className={styles.online}></span>
          <span>Live Monitoring</span>
        </div>
        <button 
          className={styles.languageBtn}
          onClick={toggleLanguage}
          title={`Switch to ${i18n.language === 'en' ? '日本語' : 'English'}`}
        >
          {i18n.language === 'en' ? '日本語' : 'English'}
        </button>
      </div>
    </header>
  );
}