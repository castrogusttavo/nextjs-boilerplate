#!/bin/sh

# Instalar Deno
curl -fsSL https://deno.land/x/install/install.sh | sh

# Adicionar Deno ao PATH
export PATH="$HOME/.deno/bin:$PATH"

# Instalar dependências Node.js
npm install

# Build do Next.js
npm run build
