"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_swc_1 = __importDefault(require("@vitejs/plugin-react-swc"));
const vite_2 = __importDefault(require("@tailwindcss/vite"));
const path_1 = __importDefault(require("path"));
exports.default = (0, vite_1.defineConfig)(({ mode }) => {
    const env = (0, vite_1.loadEnv)(mode, '.', '');
    return {
        plugins: [(0, plugin_react_swc_1.default)(), (0, vite_2.default)()],
        define: {
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        },
        resolve: {
            alias: {
                '@': path_1.default.resolve(__dirname, './src'),
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3000',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
            hmr: process.env.DISABLE_HMR !== 'true',
        },
    };
});
