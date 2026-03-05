import { Router } from 'express';
import { getProductionKPIs, getProductionData, getWorkflowStatus } from '../controllers/manufacturingController';
import { getDefects, getDefectSummary, getDefectsByStage } from '../controllers/defectController';

const router = Router();

// Production API routes
router.get('/kpi', (req, res) => {
  const result = getProductionKPIs();
  res.json(result);
});

router.get('/production', (req, res) => {
  const result = getProductionData();
  res.json(result);
});

router.get('/workflow', (req, res) => {
  const result = getWorkflowStatus();
  res.json(result);
});

// Defect API routes
router.get('/defects', (req, res) => {
  const result = getDefects();
  res.json(result);
});

router.get('/defects/summary', (req, res) => {
  const result = getDefectSummary();
  res.json(result);
});

router.get('/defects/by-stage', (req, res) => {
  const result = getDefectsByStage();
  res.json(result);
});

router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;
