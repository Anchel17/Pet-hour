import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Pet Hour',
        short_name: 'PetHour',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4caf50',
        icons: [
          {
            src: '/pet-hour-icon.svg',
            sizes: '192x192',
            type: 'image/svg'
          },
          {
            src: '/pet-hour-icon.svg',
            sizes: '512x512',
            type: 'image/svg'
          }
        ]
      }
    })
  ],
})
