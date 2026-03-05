# Smart Bolt Manufacturing System

A professional manufacturing dashboard for monitoring bolt production processes, including cold forging, thread rolling, heat treatment, and inspection stages.

## Features

**Real-time KPI Monitoring**
- Production Rate (units/hour)
- Defect Rate (%)
- Machine Utilization (%)
- Cycle Time (seconds)

**Production Workflow Visualization**
- Multi-stage process flow (Raw Material → Inspection)
- Real-time efficiency tracking
- Queue monitoring

**Pareto Chart Analysis**
- Defect type analysis with cumulative percentage
- 80/20 rule visualization
- Root cause identification

**Standard Work Documentation**
- Step-by-step procedures
- Duration tracking
- Quality checkpoints

**Internationalization**
- English / Japanese language support
- Dynamic language switching
- Complete UI translation

**Professional UI**
- Industrial dashboard design
- Responsive layout
- Real-time data updates (10-second polling)

## Technology Stack

### Frontend
- **Framework**: Next.js 14 with TypeScript
- **Styling**: CSS Modules with CSS custom properties
- **Internationalization**: i18next + react-i18next
- **Data**: Fetch API for REST communication

### Backend
- **Framework**: Express.js with TypeScript
- **Data**: Mock JSON files for development
- **CORS**: Enabled for frontend communication
- **Monitoring**: Health check endpoints

## Project Structure

```
Smart Bolt Manufacturing/
├── frontend/                 # Next.js UI application
│   ├── src/
│   │   ├── components/
│   │   │   ├── dashboard/   # KPI widgets & layout
│   │   │   ├── workflow/    # Production flow
│   │   │   ├── defects/     # Pareto chart & root cause
│   │   │   ├── docs/        # Standard work
│   │   │   └── layout/      # Sidebar & navbar
│   │   ├── pages/           # Next.js pages
│   │   ├── styles/          # Global styles
│   │   ├── utils/           # API calls
│   │   ├── locales/         # i18n translations
│   │   └── i18n.ts          # i18n config
│   ├── package.json
│   └── tsconfig.json
├── backend/                  # Express API server
│   ├── src/
│   │   ├── controllers/     # Business logic
│   │   ├── models/          # Data models
│   │   ├── routes/          # API routes
│   │   ├── data/            # Mock data
│   │   └── server.ts        # Express app
│   ├── package.json
│   └── tsconfig.json
├── docs/                    # Documentation
│   ├── architecture.md
│   └── kaizen_guidelines.md
└── README.md
```

## Setup & Installation

### Prerequisites
- Node.js 16+ with npm
- Terminal/Command line

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`

Available endpoints:
- `GET /api/kpi` - Production KPIs
- `GET /api/production` - Production data & hourly stats
- `GET /api/workflow` - Workflow stage status
- `GET /api/defects` - Defect log details
- `GET /api/defects/summary` - Defect summary statistics
- `GET /api/defects/by-stage` - Defects grouped by production stage
- `GET /health` - Health check

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

## Configuration

### Environment Variables

Create a `.env.local` file in the `frontend` directory:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Language Selection

The app defaults to English. Click the language button (Japanese or English) in the top-right navbar to switch between English and Japanese.

### Mock Data

Modify production metrics in `backend/src/data/mock_production_data.json`:
```json
{
  "kpiMetrics": {
    "productionRate": { "value": 125, ... },
    "defectRate": { "value": 2.4, ... },
    ...
  }
}
```

## Dashboard Features

### Dashboard Tab
- KPI cards showing real-time metrics
- Comparison to targets
- Status indicators (optimal/warning/error)
- Production workflow stages
- Pareto chart for defect analysis

### Production Flow Tab
- Visual representation of manufacturing stages
- Real-time efficiency per stage
- Unit quantity tracking
- Progress bars for visibility

### Defect Analysis Tab
- Pareto analysis with cumulative percentage
- Root cause form for logging defects
- Stage-based categorization
- Trend analysis

### Standard Work Tab
- Step-by-step procedures
- Cycle time breakdown
- Quality checkpoints
- Equipment setup guidelines

## API Response Format

### KPI Endpoint
```json
{
  "productionRate": {
    "value": 125,
    "unit": "units/hour",
    "target": 120,
    "status": "optimal",
    "timestamp": "2026-03-05T10:30:00Z"
  },
  ...
}
```

### Defect Endpoint
```json
{
  "id": "D001",
  "type": "Surface Crack",
  "stage": "Cold Forging",
  "count": 12,
  "percentage": 45.0,
  "trend": "decreasing",
  "rootCause": "Dies wear and tear"
}
```

## Development Workflow

1. **Start Backend**: `cd backend && npm run dev`
2. **Start Frontend**: `cd frontend && npm run dev`
3. **View Dashboard**: Open `http://localhost:3000`
4. **Modify Mock Data**: Edit `backend/src/data/`
5. **Update Translations**: Edit `frontend/src/locales/`

## Data Flow

```
Frontend (Next.js)
    ↓
Fetch API / REST
    ↓
Backend (Express)
    ↓
Mock JSON Data Files
```

The frontend polls the backend API every 10 seconds for updated KPI data.

## Customization

### Adding New KPIs

1. Add to `backend/src/data/mock_production_data.json`
2. Update controller in `backend/src/controllers/manufacturingController.ts`
3. Create KPIWidget component in frontend
4. Add translation keys in `frontend/src/locales/`

### Styling

All components use CSS Modules with a centralized color theme in `frontend/src/styles/globals.css`:
```css
--color-primary: #0f3a7d
--color-success: #10b981
--color-warning: #f59e0b
--color-danger: #ef4444
```

## Performance Notes

- Frontend updates: 10-second polling interval
- Mock data serves instantly
- Consider adding real database for production use
- Implement WebSocket for real-time updates

## Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication & authorization
- [ ] Real-time WebSocket updates
- [ ] Advanced charts (multiple series, animations)
- [ ] Mobile app version
- [ ] Predictive analytics
- [ ] Notification system
- [ ] Multi-language support expansion

## License

Internal - Smart Bolt Manufacturing

## Support

For issues or improvements, please check the codebase documentation or contact the development team.
