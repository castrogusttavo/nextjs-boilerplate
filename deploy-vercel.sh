#!/bin/sh

# Install deno
curl -fsSL https://deno.land/x/install/install.sh | sh

# Install pagic with the required permissions
/vercel/.deno/bin/deno install --unstable --allow-read --allow-write --allow-net --allow-import https://deno.land/x/pagic/mod.ts

# Pagic build with the required permissions
/vercel/.deno/bin/deno run --unstable --allow-read --allow-write --allow-net --allow-env --allow-run --allow-import https://deno.land/x/pagic/mod.ts build
