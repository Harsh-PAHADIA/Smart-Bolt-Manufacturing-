const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function fetchKPIs() {
  try {
    const response = await fetch(`${API_BASE_URL}/kpi`);
    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Error fetching KPIs:', error);
    return null;
  }
}

export async function fetchProduction() {
  try {
    const response = await fetch(`${API_BASE_URL}/production`);
    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Error fetching production data:', error);
    return null;
  }
}

export async function fetchWorkflow() {
  try {
    const response = await fetch(`${API_BASE_URL}/workflow`);
    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Error fetching workflow:', error);
    return null;
  }
}

export async function fetchDefects() {
  try {
    const response = await fetch(`${API_BASE_URL}/defects`);
    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Error fetching defects:', error);
    return null;
  }
}

export async function fetchDefectSummary() {
  try {
    const response = await fetch(`${API_BASE_URL}/defects/summary`);
    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Error fetching defect summary:', error);
    return null;
  }
}

export async function fetchDefectsByStage() {
  try {
    const response = await fetch(`${API_BASE_URL}/defects/by-stage`);
    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error('Error fetching defects by stage:', error);
    return null;
  }
}
