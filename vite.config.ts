import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'frontend'),
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  base: process.env.VITE_BASE_URL || "/Traffic-Base-Route-Guidance-System",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./frontend/src"),
    },
  },
})
