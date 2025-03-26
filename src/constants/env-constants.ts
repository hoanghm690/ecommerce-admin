import { z } from 'zod'

const configSchema = z.object({
  API_URL: z.string()
})

const configEnv = configSchema.safeParse({
  API_URL: import.meta.env.VITE_API_URL
})

if (!configEnv.success) {
  console.error(configEnv.error.issues)
  throw new Error('The declared values in the .env file are invalid.')
}

const EnvConfig = configEnv.data
export { EnvConfig }
