import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import csp from 'vite-plugin-csp'

export default defineConfig({
  plugins: [
    react(),
    csp({
      policies: {
        'default-src': [ "'self'" ],
        'script-src': [ "'self'" ],
        'style-src': [ "'self'", "'unsafe-inline'" ],
        'img-src': [ "*" ]
      }
    })
  ]
})
