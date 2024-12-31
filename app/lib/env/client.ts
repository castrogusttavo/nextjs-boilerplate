import { z } from "zod"
import { config } from "dotenv"

const env = config() as Record<string, string>

export const validatedEnv = {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1).parse(env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY),
}
