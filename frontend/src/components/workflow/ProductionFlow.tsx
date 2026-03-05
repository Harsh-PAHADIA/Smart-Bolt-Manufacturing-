import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchWorkflow } from '../../utils/api';
import styles from './ProductionFlow.module.css';

interface WorkflowStage {
  stageName: string;
  status: string;
  efficiency: number;
  quantity: number;
}

export default function ProductionFlow() {
  const { t } = useTranslation();
  const [stages, setStages] = useState<WorkflowStage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWorkflow = async () => {
      const data = await fetchWorkflow();
      if (data) {
        setStages(data);
      }
      setLoading(false);
    };
    loadWorkflow();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✔';
      case 'in_progress':
        return '●';
      case 'queued':
        return '…';
      default:
        return '?';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return styles.completed;
      case 'in_progress':
        return styles.active;
      case 'queued':
        return styles.pending;
      default:
        return styles.default;
    }
  };

  if (loading) {
    return <div className={styles.container}>Loading workflow...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Production Workflow</h2>
      
      <div className={styles.flowContainer}>
        {stages.map((stage, index) => (
          <div key={index} className={styles.stageWrapper}>
            <div className={`${styles.stage} ${getStatusColor(stage.status)}`}>
              <div className={styles.stageIcon}>{getStatusIcon(stage.status)}</div>
              <h3 className={styles.stageName}>{stage.stageName}</h3>
              <div className={styles.stageDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Qty:</span>
                  <span className={styles.value}>{stage.quantity}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Efficiency:</span>
                  <span className={styles.value}>{stage.efficiency}%</span>
                </div>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${stage.efficiency}%` }}
                ></div>
              </div>
            </div>
            
            {index < stages.length - 1 && (
              <div className={styles.arrow}>
                <span>→</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: '#10b981' }}></span>
          <span>Completed</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: '#f59e0b' }}></span>
          <span>In Progress</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: '#9ca3af' }}></span>
          <span>Queued</span>
        </div>
      </div>
    </div>
  );
}