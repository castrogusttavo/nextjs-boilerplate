import { config } from "dotenv"

const env = config() as Record<string, string>
const DATABASE_URL = env.DATABASE_URL
const OPEN_AI_API_KEY = env.OPEN_AI_API_KEY
const NEXT_PUBLIC_PUBLISHABLE_KEY = env.NEXT_PUBLIC_PUBLISHABLE_KEY
