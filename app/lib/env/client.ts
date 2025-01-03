import { z } from 'zod';
import { NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY } from './env';

export const clientEnv = {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z
    .string()
    .min(1)
    .parse(NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY),
};
