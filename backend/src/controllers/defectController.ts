import * as fs from 'fs';
import * as path from 'path';

const defectDataPath = path.join(__dirname, '../data/mock_defect_logs.json');

export function getDefects() {
  try {
    const data = JSON.parse(fs.readFileSync(defectDataPath, 'utf8'));
    return {
      success: true,
      data: data.defects
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to load defect data',
      data: [
        { type: 'Crack', count: 10 },
        { type: 'Thread Error', count: 7 }
      ]
    };
  }
}

export function getDefectSummary() {
  try {
    const data = JSON.parse(fs.readFileSync(defectDataPath, 'utf8'));
    return {
      success: true,
      data: data.defectSummary
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to load defect summary'
    };
  }
}

export function getDefectsByStage() {
  try {
    const data = JSON.parse(fs.readFileSync(defectDataPath, 'utf8'));
    const grouped = data.defects.reduce((acc: any, defect: any) => {
      if (!acc[defect.stage]) {
        acc[defect.stage] = [];
      }
      acc[defect.stage].push(defect);
      return acc;
    }, {});
    return {
      success: true,
      data: grouped
    };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to load defects by stage'
    };
  }
}