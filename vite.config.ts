import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_PUBLIC_POSTHOG_HOST': JSON.stringify(env.REACT_APP_PUBLIC_POSTHOG_HOST),
      'process.env.REACT_APP_PUBLIC_POSTHOG_KEY': JSON.stringify(env.REACT_APP_PUBLIC_POSTHOG_KEY),
    },
    plugins: [tailwindcss()],
  }
})