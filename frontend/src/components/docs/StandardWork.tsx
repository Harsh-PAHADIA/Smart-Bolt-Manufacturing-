import { useTranslation } from 'react-i18next';
import styles from './StandardWork.module.css';

export default function StandardWork() {
  const { t } = useTranslation();

  const steps = [
    {
      step: 1,
      titleKey: 'step_load_material',
      duration: '2 min',
      detailKey: 'step_load_material_detail',
    },
    {
      step: 2,
      titleKey: 'step_cold_forging',
      duration: '12 sec',
      detailKey: 'step_cold_forging_detail',
    },
    {
      step: 3,
      titleKey: 'step_thread_rolling',
      duration: '8 sec',
      detailKey: 'step_thread_rolling_detail',
    },
    {
      step: 4,
      titleKey: 'step_heat_treatment',
      duration: '20 min',
      detailKey: 'step_heat_treatment_detail',
    },
    {
      step: 5,
      titleKey: 'step_inspection',
      duration: '4 sec',
      detailKey: 'step_inspection_detail',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('standard_work')}</h2>

      <div className={styles.stepsContainer}>
        {steps.map((item, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{item.step}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{t(item.titleKey)}</h3>
              <p className={styles.stepDetails}>{t(item.detailKey)}</p>
            </div>
            <div className={styles.stepDuration}>{item.duration}</div>
          </div>
        ))}
      </div>

      <div className={styles.totalTime}>
        <strong>{t('total_cycle_time')}:</strong> {t('cycle_time_value')}
      </div>
    </div>
  );
}