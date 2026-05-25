import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import requestCvHandler from './api/request-cv.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load .env / .env.local and expose all keys to process.env
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        // Simple dev-time wiring so /api/request-cv works when running `npm run dev`.
        name: 'dev-api-request-cv',
        configureServer(server) {
          server.middlewares.use('/api/request-cv', (req, res) => {
            if (req.method !== 'POST') {
              // Let the handler itself deal with non-POST methods.
            }

            let body = ''
            req.on('data', (chunk) => {
              body += chunk
            })
            req.on('end', () => {
              try {
                req.body = body ? JSON.parse(body.toString()) : {}
              } catch {
                req.body = {}
              }

              const resWrapper = {
                setHeader: (...args) => res.setHeader(...args),
                status(code) {
                  res.statusCode = code
                  return this
                },
                json(payload) {
                  if (!res.headersSent) {
                    res.setHeader('Content-Type', 'application/json')
                  }
                  res.end(JSON.stringify(payload))
                },
              }

              Promise.resolve(requestCvHandler(req, resWrapper)).catch(() => {
                if (!res.headersSent) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ error: 'Internal error.' }))
                }
              })
            })
          })
        },
      },
    ],
    test: {
      environment: 'jsdom',
      setupFiles: ['./vitest.setup.js'],
      css: true,
    },
  }
})
