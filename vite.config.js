import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    outDir: 'build', // Ändere den Output-Ordner von 'dist' auf 'build'
    base: "/myCV/",
  },
});