
import axios from 'axios';

const API_BASE_URL = '/api';

// Always send the session cookie with API requests. Harmless for same-origin
// (the Vite dev server and Express share :3000), and required if the API ever
// moves to a separate origin.
axios.defaults.withCredentials = true;

export const getUser = async () => {
  const response = await axios.get(`${API_BASE_URL}/user`);
  return response.data;
};

export const getBrand = async () => {
  const response = await axios.get(`${API_BASE_URL}/brand`);
  return response.data;
};

export const updateBrand = async (brandData: any) => {
  const response = await axios.post(`${API_BASE_URL}/brand`, brandData);
  return response.data;
};

export const getContent = async () => {
  const response = await axios.get(`${API_BASE_URL}/content`);
  return response.data;
};

export const addContent = async (contentData: any) => {
  const response = await axios.post(`${API_BASE_URL}/content`, contentData);
  return response.data;
};

export const getAnalytics = async () => {
  const response = await axios.get(`${API_BASE_URL}/analytics`);
  return response.data;
};

export const getHabits = async () => {
  const response = await axios.get(`${API_BASE_URL}/habits`);
  return response.data;
};

export const getGoogleAuthUrl = async () => {
  const response = await axios.get(`${API_BASE_URL}/auth/google/url`);
  return response.data.url;
};

export const getConnectedAccounts = async () => {
  const response = await axios.get(`${API_BASE_URL}/accounts`);
  return response.data;
};

export const publishToYouTube = async (data: { title: string; description: string; videoUrl: string; }) => {
  const response = await axios.post(`${API_BASE_URL}/publish/youtube`, data);
  return response.data;
};

export const getYouTubeAnalytics = async () => {
  const response = await axios.get(`${API_BASE_URL}/analytics/youtube`);
  return response.data;
};

export const updateContent = async (id: string, contentData: any) => {
  const response = await axios.put(`${API_BASE_URL}/content/${id}`, contentData);
  return response.data;
};

export const deleteContent = async (id: string) => {
  const response = await axios.delete(`${API_BASE_URL}/content/${id}`);
  return response.data;
};

export const publishContent = async (id: string) => {
  const response = await axios.post(`${API_BASE_URL}/content/${id}/publish`);
  return response.data;
};

export const completeChallenge = async (day: number) => {
  const response = await axios.post(`${API_BASE_URL}/challenge/${day}/complete`);
  return response.data;
};

export const generateAIContent = async (prompt: string, niche: string, platform: Platform) => {
  const response = await axios.post(`${API_BASE_URL}/ai/generate-content`, { prompt, niche, platform });
  return response.data.content;
};

export const scoreContent = async (content: string) => {
  const response = await axios.post(`${API_BASE_URL}/ai/score-content`, { content });
  return response.data;
};