import os

def create_project_structure():
    # Using "." means it will build inside your current open folder
    project_root = "." 
    
    files_to_create = [
        # Frontend Structure
        f"{project_root}/frontend/src/components/dashboard/KPIWidget.tsx",
        f"{project_root}/frontend/src/components/dashboard/DashboardLayout.tsx",
        f"{project_root}/frontend/src/components/workflow/ProductionFlow.tsx",
        f"{project_root}/frontend/src/components/defects/ParetoChart.tsx",
        f"{project_root}/frontend/src/components/defects/RootCauseForm.tsx",
        f"{project_root}/frontend/src/components/docs/StandardWork.tsx",
        f"{project_root}/frontend/src/components/layout/Sidebar.tsx",
        f"{project_root}/frontend/src/components/layout/TopNavbar.tsx",
        
        # i18n (Internationalization) Files
        f"{project_root}/frontend/src/locales/en/translation.json",
        f"{project_root}/frontend/src/locales/ja/translation.json",
        f"{project_root}/frontend/src/i18n.ts",
        
        # Frontend Core
        f"{project_root}/frontend/src/pages/index.tsx",
        f"{project_root}/frontend/src/pages/_app.tsx",
        f"{project_root}/frontend/src/styles/globals.css",
        f"{project_root}/frontend/src/utils/api.ts",
        f"{project_root}/frontend/package.json",
        f"{project_root}/frontend/tsconfig.json",
        
        # Backend Structure
        f"{project_root}/backend/src/controllers/manufacturingController.ts",
        f"{project_root}/backend/src/controllers/defectController.ts",
        f"{project_root}/backend/src/models/KPIModel.ts",
        f"{project_root}/backend/src/routes/api.ts",
        
        # Mock Data for initial testing
        f"{project_root}/backend/src/data/mock_production_data.json",
        f"{project_root}/backend/src/data/mock_defect_logs.json",
        
        # Backend Core
        f"{project_root}/backend/src/server.ts",
        f"{project_root}/backend/package.json",
        f"{project_root}/backend/tsconfig.json",
        
        # Project Root Documentation
        f"{project_root}/docs/architecture.md",
        f"{project_root}/docs/kaizen_guidelines.md",
        f"{project_root}/README.md",
        f"{project_root}/.gitignore",
    ]

    print("🚀 Initializing project structure...")

    for file_path in files_to_create:
        directory = os.path.dirname(file_path)
        
        if not os.path.exists(directory):
            os.makedirs(directory)
            
        if not os.path.exists(file_path):
            with open(file_path, 'w') as f:
                if file_path.endswith('.json'):
                    f.write('{\n\n}')
                elif file_path.endswith('.md'):
                    f.write(f'# {os.path.basename(file_path).replace(".md", "").capitalize()}\n')
                else:
                    f.write('') 

    print("✅ Project structure successfully generated in current directory!")

if __name__ == "__main__":
    create_project_structure()