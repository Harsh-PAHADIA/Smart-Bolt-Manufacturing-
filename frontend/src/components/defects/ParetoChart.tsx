import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchDefects } from '../../utils/api';
import styles from './ParetoChart.module.css';

interface DefectData {
  type: string;
  count: number;
  percentage: number;
}

export default function ParetoChart() {
  const { t } = useTranslation();
  const [defects, setDefects] = useState<DefectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDefects = async () => {
      const data = await fetchDefects();
      if (data && Array.isArray(data)) {
        // Sort by count descending and calculate cumulative percentage
        const sorted = [...data].sort((a, b) => b.count - a.count);
        const total = sorted.reduce((sum, d) => sum + d.count, 0);
        const withPercentage = sorted.map((d) => ({
          ...d,
          percentage: (d.count / total) * 100,
        }));
        setDefects(withPercentage);
      }
      setLoading(false);
    };
    loadDefects();
  }, []);

  if (loading) {
    return <div className={styles.container}>{t('loading_defects')}</div>;
  }

  if (defects.length === 0) {
    return <div className={styles.container}>{t('no_defects')}</div>;
  }

  // Calculate cumulative percentage for Pareto line
  let cumulative = 0;
  const cumulativePercentages = defects.map((d) => {
    cumulative += d.percentage;
    return cumulative;
  });

  const maxCount = Math.max(...defects.map((d) => d.count));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('pareto_title')}</h2>

      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <div className={styles.yAxisLabel}>{t('defect_count_label')}</div>
          <div className={styles.bars}>
            {defects.map((defect, index) => (
              <div key={index} className={styles.barWrapper}>
                <div className={styles.barContainer}>
                  <div
                    className={styles.bar}
                    style={{
                      height: `${(defect.count / maxCount) * 100}%`,
                    }}
                  >
                    <div className={styles.barValue}>{defect.count}</div>
                  </div>
                  <div
                    className={styles.cumulativeDot}
                    style={{
                      bottom: `${cumulativePercentages[index]}%`,
                    }}
                  >
                    {cumulativePercentages[index].toFixed(0)}%
                  </div>
                </div>
                <div className={styles.label}>{defect.type}</div>
              </div>
            ))}
          </div>
          <div className={styles.xAxisLabel}>{t('defect_type_label')}</div>
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendBar}></div>
            <span>{t('number_of_defects')}</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendDot} ${styles.cumulative}`}></div>
            <span>{t('cumulative_percent')}</span>
          </div>
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>{t('top_defect')}:</span>
          <span className={styles.summaryValue}>{defects[0]?.type}</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>{t('total_defects')}:</span>
          <span className={styles.summaryValue}>
            {defects.reduce((sum, d) => sum + d.count, 0)}
          </span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>{t('coverage_80')}:</span>
          <span className={styles.summaryValue}>
            {defects
              .slice(0, defects.findIndex((_, i) => cumulativePercentages[i] >= 80) + 1)
              .map((d) => d.type)
              .join(', ')}
          </span>
        </div>
      </div>
    </div>
  );
}