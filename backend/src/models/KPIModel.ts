export interface KPI {
  value: number;
  unit: string;
  target: number;
  status: string;
  timestamp: string;
}

export interface ProductionMetrics {
  productionRate: KPI;
  defectRate: KPI;
  machineUtilization: KPI;
  cycleTime: KPI;
}

export interface WorkflowStage {
  stageName: string;
  status: string;
  efficiency: number;
  quantity: number;
}

export interface DefectLog {
  id: string;
  type: string;
  stage: string;
  count: number;
  percentage: number;
  trend: string;
  rootCause: string;
}

export interface DefectSummary {
  totalDefects: number;
  defectRate: number;
  topDefect: string;
  timeWindow: string;
}
