#!/bin/bash
# Cloudflare Pages build script

echo "Building Next.js app for Cloudflare Pages..."

# Install dependencies
npm ci --legacy-peer-deps

# Build with next-on-pages
npx @cloudflare/next-on-pages@latest

# Remove cache directories to stay under 25MB file limit
echo "Cleaning cache files..."
find .vercel/output/static -type d -name "cache" -exec rm -rf {} + 2>/dev/null || true
find .vercel/output/static/.next -type d -name "cache" -exec rm -rf {} + 2>/dev/null || true

echo "Build complete!"
