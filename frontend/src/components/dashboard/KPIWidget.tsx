import { useTranslation } from 'react-i18next';
import styles from './KPIWidget.module.css';

interface KPIWidgetProps {
  title: string;
  value: number;
  unit?: string;
  target?: number;
  status?: 'optimal' | 'warning' | 'error';
  trend?: 'up' | 'down' | 'stable';
}

export default function KPIWidget({
  title,
  value,
  unit = '',
  target,
  status = 'optimal',
  trend = 'stable',
}: KPIWidgetProps) {
  const { t } = useTranslation();
  const getStatusColor = () => {
    switch (status) {
      case 'optimal':
        return styles.optimal;
      case 'warning':
        return styles.warning;
      case 'error':
        return styles.error;
      default:
        return styles.optimal;
    }
  };

  const getTrendIndicator = () => {
    switch (trend) {
      case 'up':
        return '↑';
      case 'down':
        return '↓';
      default:
        return '→';
    }
  };

  const variance = target ? ((value - target) / target * 100).toFixed(1) : null;

  return (
    <div className={`${styles.widget} ${getStatusColor()}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.trend}>{getTrendIndicator()}</span>
      </div>
      
      <div className={styles.body}>
        <div className={styles.valueContainer}>
          <div className={styles.value}>{value}</div>
          <div className={styles.unit}>{unit}</div>
        </div>
        
        {target && (
          <div className={styles.meta}>
            <span className={styles.label}>{t('target')}:</span>
            <span className={styles.target}>{target}{unit}</span>
            <span className={`${styles.variance} ${variance && parseFloat(variance) > 0 ? styles.positive : styles.negative}`}>
              {variance && (variance > 0 ? '+' : '')}{variance}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}