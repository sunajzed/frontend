import axios from "axios";

const API_BASE = "http://localhost:5000/api"; // Adjust if needed

export const getMenus = () => axios.get(`${API_BASE}/menus`);
export const getMenuItems = (menuId: string) => axios.get(`${API_BASE}/menus/${menuId}/items`);
export const createMenu = (data: any) => axios.post(`${API_BASE}/menus`, data);
export const createMenuItem = (menuId: string, data: any) => axios.post(`${API_BASE}/menus/${menuId}/items`, data);
