import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/p': {
        target: 'https://rinku-new-test.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
