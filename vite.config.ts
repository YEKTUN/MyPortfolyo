import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  // include: ["@tsparticles/engine", "@tsparticles/slim"],
  assetsInclude: ['**/*.PNG', '**/*.png'],
  server: {
    hmr: {
      overlay: true, 
    },
  },
})
