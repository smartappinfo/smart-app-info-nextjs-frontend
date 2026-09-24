#!/bin/bash
# Cloudflare Pages build script

echo "Building Next.js app for Cloudflare Pages..."

# Install dependencies
npm ci --legacy-peer-deps

# Build with next-on-pages
npx @cloudflare/next-on-pages@latest
