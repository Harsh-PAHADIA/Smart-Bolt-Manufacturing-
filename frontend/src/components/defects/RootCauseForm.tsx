import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './RootCauseForm.module.css';

export default function RootCauseForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    defectType: '',
    stage: '',
    rootCause: '',
    countermeasure: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting:', formData);
    // Reset form
    setFormData({
      defectType: '',
      stage: '',
      rootCause: '',
      countermeasure: '',
    });
    alert(t('analysis_submitted'));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('root_cause_form')}</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="defectType" className={styles.label}>
            {t('defect_type')}
          </label>
          <select
            id="defectType"
            name="defectType"
            value={formData.defectType}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">{t('select_defect_type')}</option>
            <option value="Crack">{t('defect_crack')}</option>
            <option value="ThreadError">{t('defect_thread_error')}</option>
            <option value="Hardness">{t('defect_hardness')}</option>
            <option value="Dimension">{t('defect_dimension')}</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="stage" className={styles.label}>
            {t('production_stage')}
          </label>
          <select
            id="stage"
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">{t('select_stage')}</option>
            <option value="Cold Forging">{t('stage_cold_forging')}</option>
            <option value="Thread Rolling">{t('stage_thread_rolling')}</option>
            <option value="Heat Treatment">{t('stage_heat_treatment')}</option>
            <option value="Inspection">{t('stage_inspection')}</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="rootCause" className={styles.label}>
            {t('root_cause_label')}
          </label>
          <textarea
            id="rootCause"
            name="rootCause"
            value={formData.rootCause}
            onChange={handleChange}
            className={styles.textarea}
            placeholder={t('root_cause_placeholder')}
            rows={4}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="countermeasure" className={styles.label}>
            {t('countermeasure')}
          </label>
          <textarea
            id="countermeasure"
            name="countermeasure"
            value={formData.countermeasure}
            onChange={handleChange}
            className={styles.textarea}
            placeholder={t('countermeasure_placeholder')}
            rows={4}
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          {t('submit_analysis')}
        </button>
      </form>
    </div>
  );
}