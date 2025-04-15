import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    port: 5173
  },
  // base: '/menu/' ← BU QATORNI O'CHIRIB TASHALANG YOKI COMMENTGA OLING
})