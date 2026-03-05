import { useState } from 'react';
import styles from './RootCauseForm.module.css';

export default function RootCauseForm() {
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
    alert('Root cause analysis submitted!');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Root Cause Analysis Form</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="defectType" className={styles.label}>
            Defect Type
          </label>
          <select
            id="defectType"
            name="defectType"
            value={formData.defectType}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Select defect type...</option>
            <option value="Crack">Surface Crack</option>
            <option value="ThreadError">Thread Error</option>
            <option value="Hardness">Hardness Issue</option>
            <option value="Dimension">Dimensional Error</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="stage" className={styles.label}>
            Production Stage
          </label>
          <select
            id="stage"
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Select stage...</option>
            <option value="Cold Forging">Cold Forging</option>
            <option value="Thread Rolling">Thread Rolling</option>
            <option value="Heat Treatment">Heat Treatment</option>
            <option value="Inspection">Inspection</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="rootCause" className={styles.label}>
            Root Cause Analysis
          </label>
          <textarea
            id="rootCause"
            name="rootCause"
            value={formData.rootCause}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Describe the root cause..."
            rows={4}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="countermeasure" className={styles.label}>
            Countermeasure
          </label>
          <textarea
            id="countermeasure"
            name="countermeasure"
            value={formData.countermeasure}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Describe the corrective action..."
            rows={4}
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Submit Analysis
        </button>
      </form>
    </div>
  );
}