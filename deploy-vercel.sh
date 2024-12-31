#!/bin/sh

# Install Deno
curl -fsSL https://deno.land/x/install/install.sh | sh

# Install Pagic
/vercel/.deno/bin/deno install --unstable --allow-read --allow-write --allow-net https://deno.land/x/pagic/mod.ts

# Pagic build
/vercel/.deno/bin/deno run --unstable --allow-read --allow-write --allow-net --allow-env --allow-run https://deno.land/x/pagic/mod.ts build

# Deploy to Vercel (assuming Vercel CLI is installed and configured)
vercel --prod
