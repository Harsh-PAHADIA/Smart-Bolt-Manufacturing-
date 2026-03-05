# Quick Start Guide

## 🚀 Get the Dashboard Running in 2 Minutes

### Step 1: Terminal 1 - Start Backend API
```bash
cd backend
npm install
npm run dev
```

Backend running on: **http://localhost:5000**

### Step 2: Terminal 2 - Start Frontend Dashboard
```bash
cd frontend
npm install
npm run dev
```

Dashboard running on: **http://localhost:3000**

### Step 3: Open Dashboard
Open your browser to:
```
http://localhost:3000
```

---

## 🌍 Language Switching

Click the flag button in top-right corner:
- **English** (default)
- **Japanese**

---

## 📊 Dashboard Tabs

| Tab | Description |
|-----|-------------|
| **📊 Dashboard** | KPI cards + Workflow + Defect Pareto |
| **🔧 Production Flow** | 5-stage manufacturing pipeline |
| **⚠️ Defect Analysis** | Pareto chart + Root cause form |
| **📋 Standard Work** | Procedure steps and timing |

---

## 📈 What You'll See

### KPI Widgets
- Production Rate: 125 units/hour (Target: 120)
- Defect Rate: 2.4% (Target: 3.0%)
- Machine Utilization: 87.5% (Target: 85%)
- Cycle Time: 28.8 seconds (Target: 30s)

### Production Workflow
- Raw Material ✅
- Cold Forging ⚙️ (In Progress)
- Thread Rolling ⚙️ (In Progress)
- Heat Treatment ⏳ (Queued)
- Inspection ⏳ (Queued)

### Defect Analysis
- Surface Crack: 45% (12 defects)
- Thread Error: 30% (8 defects)
- Hardness Issue: 18% (5 defects)
- Dimensional Error: 7% (2 defects)

---

## 🔧 Modify Mock Data

Edit files in `backend/src/data/`:

**Production Data**: `mock_production_data.json`
```json
{
  "kpiMetrics": {
    "productionRate": {
      "value": 125,        // Change this
      "target": 120
    }
  }
}
```

**Defect Data**: `mock_defect_logs.json`
```json
{
  "defects": [
    {
      "type": "Surface Crack",
      "count": 12           // Change this
    }
  ]
}
```

Restart backend with `npm run dev` to apply changes.

---

## 🌐 API Endpoints

### Fetch from curl/Postman:

```bash
# Get all KPIs
curl http://localhost:5000/api/kpi

# Get production data
curl http://localhost:5000/api/production

# Get defects
curl http://localhost:5000/api/defects

# Get workflow status
curl http://localhost:5000/api/workflow

# Health check
curl http://localhost:5000/health
```

---

## ⚡ Live Updates

Dashboard automatically updates every **10 seconds**.

To change polling interval, edit `frontend/src/pages/index.tsx`:
```typescript
const interval = setInterval(loadKPIs, 10000);  // Change 10000 to milliseconds
```

---

## 🆘 Troubleshooting

### "Cannot connect to backend"
- Check backend is running on port 5000
- Check `.env.local` has correct URL: `NEXT_PUBLIC_API_URL=http://localhost:5000/api`

### "Module not found"
- Run `npm install` in both `frontend/` and `backend/`
- Clear node_modules: `rm -rf node_modules && npm install`

### "Port already in use"
- Backend: Kill process on port 5000
- Frontend: Kill process on port 3000

### Language not switching
- Refresh browser (Ctrl+R / Cmd+R)
- Check browser console for errors (F12)

---

## 📝 Key Features

✅ Professional industrial UI
✅ Real-time KPI monitoring
✅ Production workflow visualization
✅ Pareto defect analysis
✅ Multi-language support (EN/JP)
✅ Root cause form
✅ Standard work documentation
✅ RESTful API backend
✅ Mock manufacturing data

---

## 📚 Full Documentation

See **SETUP.md** and **IMPLEMENTATION.md** for:
- Detailed feature descriptions
- Component architecture
- API specifications
- Configuration options
- Future enhancements

---

**That's it! Your Smart Bolt Manufacturing Dashboard is ready!** 🎉
