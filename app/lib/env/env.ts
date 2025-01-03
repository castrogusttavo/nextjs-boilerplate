import { z } from 'zod';

const env = {
    DATABASE_URL: process.env.DATABASE_URL,
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
};

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    OPEN_AI_API_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
});

export const validatedEnv = envSchema.parse(env);

export const {
    DATABASE_URL,
    OPEN_AI_API_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
} = validatedEnv;