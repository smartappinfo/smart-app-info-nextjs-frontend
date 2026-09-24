#!/bin/bash
# Cloudflare Pages build script

echo "Building Next.js app for Cloudflare Pages..."

# Install dependencies
npm ci --legacy-peer-deps

# Build with next-on-pages
npx @cloudflare/next-on-pages@latest

# Remove cache directories to stay under 25MB file limit
echo "Cleaning cache files..."
rm -rf .vercel/output/static/cache
rm -rf .vercel/output/static/.next/cache

# Also remove any webpack cache
find .vercel/output -type f -name "*.pack" -size +20M -delete 2>/dev/null || true
find .vercel/output -type d -name "cache" -exec rm -rf {} + 2>/dev/null || true

echo "Listing large files..."
find .vercel/output -type f -size +10M -exec ls -lh {} \; 2>/dev/null || true

echo "Build complete!"
