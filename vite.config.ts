import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80, // Установите нужный вам порт
    strictPort: true, // Это заставит Vite выдать ошибку, если порт будет занят
  },
})
