import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Enable historyApiFallback for client-side routing
    // This ensures that all routes redirect to index.html
    // so React Router can handle the routing
    historyApiFallback: true,
  },
})
