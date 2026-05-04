"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreContent = exports.generateAIContent = exports.completeChallenge = exports.publishContent = exports.deleteContent = exports.updateContent = exports.getYouTubeAnalytics = exports.publishToYouTube = exports.getConnectedAccounts = exports.getGoogleAuthUrl = exports.getHabits = exports.getAnalytics = exports.addContent = exports.getContent = exports.updateBrand = exports.getBrand = exports.getUser = void 0;
const axios_1 = __importDefault(require("axios"));
const API_BASE_URL = '/api';
const getUser = async () => {
    const response = await axios_1.default.get(`${API_BASE_URL}/user`);
    return response.data;
};
exports.getUser = getUser;
const getBrand = async () => {
    const response = await axios_1.default.get(`${API_BASE_URL}/brand`);
    return response.data;
};
exports.getBrand = getBrand;
const updateBrand = async (brandData) => {
    const response = await axios_1.default.post(`${API_BASE_URL}/brand`, brandData);
    return response.data;
};
exports.updateBrand = updateBrand;
const getContent = async () => {
    const response = await axios_1.default.get(`${API_BASE_URL}/content`);
    return response.data;
};
exports.getContent = getContent;
const addContent = async (contentData) => {
    const response = await axios_1.default.post(`${API_BASE_URL}/content`, contentData);
    return response.data;
};
exports.addContent = addContent;
const getAnalytics = async () => {
    const response = await axios_1.default.get(`${API_BASE_URL}/analytics`);
    return response.data;
};
exports.getAnalytics = getAnalytics;
const getHabits = async () => {
    const response = await axios_1.default.get(`${API_BASE_URL}/habits`);
    return response.data;
};
exports.getHabits = getHabits;
const getGoogleAuthUrl = async () => {
    const response = await axios_1.default.get(`${API_BASE_URL}/auth/google/url`);
    return response.data.url;
};
exports.getGoogleAuthUrl = getGoogleAuthUrl;
const getConnectedAccounts = async () => {
    const response = await axios_1.default.get(`${API_BASE_URL}/accounts`);
    return response.data;
};
exports.getConnectedAccounts = getConnectedAccounts;
const publishToYouTube = async (data) => {
    const response = await axios_1.default.post(`${API_BASE_URL}/publish/youtube`, data);
    return response.data;
};
exports.publishToYouTube = publishToYouTube;
const getYouTubeAnalytics = async () => {
    const response = await axios_1.default.get(`${API_BASE_URL}/analytics/youtube`);
    return response.data;
};
exports.getYouTubeAnalytics = getYouTubeAnalytics;
const updateContent = async (id, contentData) => {
    const response = await axios_1.default.put(`${API_BASE_URL}/content/${id}`, contentData);
    return response.data;
};
exports.updateContent = updateContent;
const deleteContent = async (id) => {
    const response = await axios_1.default.delete(`${API_BASE_URL}/content/${id}`);
    return response.data;
};
exports.deleteContent = deleteContent;
const publishContent = async (id) => {
    const response = await axios_1.default.post(`${API_BASE_URL}/content/${id}/publish`);
    return response.data;
};
exports.publishContent = publishContent;
const completeChallenge = async (day) => {
    const response = await axios_1.default.post(`${API_BASE_URL}/challenge/${day}/complete`);
    return response.data;
};
exports.completeChallenge = completeChallenge;
const generateAIContent = async (prompt, niche, platform) => {
    const response = await axios_1.default.post(`${API_BASE_URL}/ai/generate-content`, { prompt, niche, platform });
    return response.data.content;
};
exports.generateAIContent = generateAIContent;
const scoreContent = async (content) => {
    const response = await axios_1.default.post(`${API_BASE_URL}/ai/score-content`, { content });
    return response.data;
};
exports.scoreContent = scoreContent;
