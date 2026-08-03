import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api':'http://localhost:3000',
    }
  },
  //proxy means they append in react and server ko lgega url origi isi url se hui hai(request same server se aari hai).
  plugins: [react()],
})
