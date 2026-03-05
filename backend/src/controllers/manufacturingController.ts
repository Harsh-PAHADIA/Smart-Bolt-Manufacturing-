import * as fs from 'fs';
import * as path from 'path';

const mockDataPath = path.join(__dirname, '../data/mock_production_data.json');

export function getProductionKPIs() {
  try {
    const data = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));
    return {
      success: true,
      data: data.kpiMetrics
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to load production data',
      data: {
        productionRate: { value: 0, unit: 'units/hour', target: 120, status: 'error' },
        defectRate: { value: 0, unit: '%', target: 3.0, status: 'error' },
        machineUtilization: { value: 0, unit: '%', target: 85.0, status: 'error' },
        cycleTime: { value: 0, unit: 'seconds', target: 30.0, status: 'error' }
      }
    };
  }
}

export function getProductionData() {
  try {
    const data = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));
    return {
      success: true,
      data: {
        production: data.kpiMetrics.productionRate.value,
        utilization: data.kpiMetrics.machineUtilization.value,
        workflow: data.workflowStages,
        hourlyProduction: data.hourlyProduction
      }
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to load production data'
    };
  }
}

export function getWorkflowStatus() {
  try {
    const data = JSON.parse(fs.readFileSync(mockDataPath, 'utf8'));
    return {
      success: true,
      data: data.workflowStages
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to load workflow data'
    };
  }
}