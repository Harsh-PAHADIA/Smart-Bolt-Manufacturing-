import { useTranslation } from 'react-i18next';
import styles from './StandardWork.module.css';

export default function StandardWork() {
  const { t } = useTranslation();

  const steps = [
    {
      step: 1,
      title: 'Load Raw Material',
      duration: '2 min',
      details: 'Load steel bars into the loading hopper',
    },
    {
      step: 2,
      title: 'Cold Forging',
      duration: '12 sec',
      details: 'High-speed forging under controlled pressure',
    },
    {
      step: 3,
      title: 'Thread Rolling',
      duration: '8 sec',
      details: 'Apply thread profile using precision rollers',
    },
    {
      step: 4,
      title: 'Heat Treatment',
      duration: '20 min',
      details: 'Temperature cycling: 850°C hardening + tempering',
    },
    {
      step: 5,
      title: 'Inspection',
      duration: '4 sec',
      details: 'Automated vision + manual QC checks',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Standard Work Procedures</h2>

      <div className={styles.stepsContainer}>
        {steps.map((item, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{item.step}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDetails}>{item.details}</p>
            </div>
            <div className={styles.stepDuration}>{item.duration}</div>
          </div>
        ))}
      </div>

      <div className={styles.totalTime}>
        <strong>Total Cycle Time:</strong> ~47 seconds per unit
      </div>
    </div>
  );
}