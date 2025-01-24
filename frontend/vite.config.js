import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      "plugins": [["module:@preact/signals-react-transform"]] // To make signals function properly
    }
  })],
  build: { target: "esnext" } // To prevent top-level await errors
})