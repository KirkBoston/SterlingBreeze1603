import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/calendar': {
        target: 'https://www.vrbo.com',
        changeOrigin: true,
        rewrite: () =>
          '/icalendar/e093697f12a04b218d199a606fcd2d3b.ics?nonTentative&includeTentative=true',
      },
    },
  },
})
