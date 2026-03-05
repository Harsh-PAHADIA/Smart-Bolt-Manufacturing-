import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", apiRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Manufacturing Dashboard API running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET /api/kpi - Production KPIs`);
  console.log(`  GET /api/production - Production data`);
  console.log(`  GET /api/workflow - Workflow status`);
  console.log(`  GET /api/defects - Defect logs`);
  console.log(`  GET /api/defects/summary - Defect summary`);
  console.log(`  GET /api/defects/by-stage - Defects grouped by stage`);
});