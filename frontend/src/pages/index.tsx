import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import KPIWidget from '../components/dashboard/KPIWidget';
import ProductionFlow from '../components/workflow/ProductionFlow';
import ParetoChart from '../components/defects/ParetoChart';
import StandardWork from '../components/docs/StandardWork';
import RootCauseForm from '../components/defects/RootCauseForm';
import { fetchKPIs } from '../utils/api';
import styles from './index.module.css';

interface KPIMetrics {
  productionRate: any;
  defectRate: any;
  machineUtilization: any;
  cycleTime: any;
}

export default function Home() {
  const { t } = useTranslation();
  const [kpis, setKpis] = useState<KPIMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    const loadKPIs = async () => {
      const data = await fetchKPIs();
      if (data) {
        setKpis(data);
      }
      setLoading(false);
    };

    // first load
    loadKPIs();

    // Poll for updates every 10 seconds
    const interval = setInterval(loadKPIs, 10000);

    return () => clearInterval(interval);
  }, []);

  // set last update on client only
  useEffect(() => {
    const updateTime = () => {
      setLastUpdate(new Date().toLocaleTimeString());
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Smart Bolt Manufacturing Dashboard</h1>
          <span className={styles.lastUpdate}>
            Last updated: {lastUpdate}
          </span>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'dashboard' ? styles.active : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'workflow' ? styles.active : ''}`}
            onClick={() => setActiveTab('workflow')}
          >
            Production Flow
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'defects' ? styles.active : ''}`}
            onClick={() => setActiveTab('defects')}
          >
            Defect Analysis
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'docs' ? styles.active : ''}`}
            onClick={() => setActiveTab('docs')}
          >
            Standard Work
          </button>
        </div>

        {activeTab === 'dashboard' && (
          <div className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Performance Indicators</h2>
              {loading ? (
                <div className={styles.loading}>Loading KPI data...</div>
              ) : kpis ? (
                <div className={styles.kpiGrid}>
                  <KPIWidget
                    title={t('kpi_production_rate')}
                    value={kpis.productionRate.value}
                    unit={kpis.productionRate.unit}
                    target={kpis.productionRate.target}
                    status={kpis.productionRate.status}
                    trend="up"
                  />
                  <KPIWidget
                    title={t('kpi_defect_rate')}
                    value={kpis.defectRate.value}
                    unit={kpis.defectRate.unit}
                    target={kpis.defectRate.target}
                    status={kpis.defectRate.status}
                    trend="down"
                  />
                  <KPIWidget
                    title="Machine Utilization"
                    value={kpis.machineUtilization.value}
                    unit={kpis.machineUtilization.unit}
                    target={kpis.machineUtilization.target}
                    status={kpis.machineUtilization.status}
                    trend="stable"
                  />
                  <KPIWidget
                    title="Cycle Time"
                    value={kpis.cycleTime.value}
                    unit={kpis.cycleTime.unit}
                    target={kpis.cycleTime.target}
                    status={kpis.cycleTime.status}
                    trend="down"
                  />
                </div>
              ) : (
                <div className={styles.error}>Failed to load KPI data</div>
              )}
            </section>

            <section className={styles.section}>
              <ProductionFlow />
            </section>

            <section className={styles.section}>
              <ParetoChart />
            </section>
          </div>
        )}

        {activeTab === 'workflow' && (
          <div className={styles.content}>
            <section className={styles.section}>
              <ProductionFlow />
            </section>
          </div>
        )}

        {activeTab === 'defects' && (
          <div className={styles.content}>
            <section className={styles.section}>
              <ParetoChart />
            </section>
            <section className={styles.section}>
              <RootCauseForm />
            </section>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className={styles.content}>
            <section className={styles.section}>
              <StandardWork />
            </section>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}