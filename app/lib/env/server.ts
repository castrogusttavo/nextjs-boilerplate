import { z } from "zod"
import { config } from "dotenv"

const env = config() as Record<string, string>

export const validatedEnv = {
    DATABASE_URL: z.string().url().parse(env.DATABASE_URL),
    OPEN_AI_API_KEY: z.string().min(1).parse(env.OPEN_AI_API_KEY),
}
