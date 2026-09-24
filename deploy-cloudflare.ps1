# Cloudflare Deployment Script for Smart App Info
# This script helps deploy both Worker and Pages

Write-Host "🚀 Cloudflare Deployment Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if wrangler is installed
Write-Host "Checking Wrangler installation..." -ForegroundColor Yellow
$wranglerVersion = wrangler --version 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Wrangler is installed: $wranglerVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Wrangler not found. Installing..." -ForegroundColor Red
    npm install -g wrangler
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Step 1: Login to Cloudflare" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Cyan
Write-Host "This will open your browser for authentication..."
Write-Host ""
Read-Host "Press Enter to continue"

wrangler login

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Step 2: Deploy Worker (smartappinfo-worker)" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Read-Host "Press Enter to deploy the worker"

wrangler deploy

Write-Host ""
Write-Host "✅ Worker deployed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "Step 3: Deploy to Cloudflare Pages" -ForegroundColor Yellow
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Choose deployment method:" -ForegroundColor Yellow
Write-Host "1. Via Cloudflare Dashboard (Recommended - Connect GitHub)" -ForegroundColor White
Write-Host "2. Via CLI (Direct deployment)" -ForegroundColor White
Write-Host ""
$choice = Read-Host "Enter your choice (1 or 2)"

if ($choice -eq "1") {
    Write-Host ""
    Write-Host "📋 Follow these steps:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Go to: https://dash.cloudflare.com/" -ForegroundColor White
    Write-Host "2. Click 'Pages' in the sidebar" -ForegroundColor White
    Write-Host "3. Click 'Create a project'" -ForegroundColor White
    Write-Host "4. Click 'Connect to Git'" -ForegroundColor White
    Write-Host "5. Select your repository: smartappinfo/smart-app-info-nextjs-frontend" -ForegroundColor White
    Write-Host ""
    Write-Host "Build Settings:" -ForegroundColor Yellow
    Write-Host "  - Framework preset: Next.js" -ForegroundColor White
    Write-Host "  - Build command: npm run build" -ForegroundColor White
    Write-Host "  - Build output directory: .next" -ForegroundColor White
    Write-Host ""
    Write-Host "Environment Variables:" -ForegroundColor Yellow
    Write-Host "  - NEXT_PUBLIC_API_URL = https://smart-app-info-backend.vercel.app" -ForegroundColor White
    Write-Host "  - NEXT_PUBLIC_FRONTEND_URL = https://smartappinfo.pages.dev" -ForegroundColor White
    Write-Host ""
    Write-Host "Opening Cloudflare Dashboard..." -ForegroundColor Green
    Start-Process "https://dash.cloudflare.com/"
    
} elseif ($choice -eq "2") {
    Write-Host ""
    Write-Host "Building Next.js app..." -ForegroundColor Yellow
    npm run build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "Deploying to Cloudflare Pages..." -ForegroundColor Yellow
        $projectName = Read-Host "Enter project name (default: smartappinfo)"
        if ([string]::IsNullOrWhiteSpace($projectName)) {
            $projectName = "smartappinfo"
        }
        
        wrangler pages deploy .next --project-name=$projectName
        
        Write-Host ""
        Write-Host "✅ Pages deployed successfully!" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "❌ Build failed. Please check errors above." -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "🎉 Deployment Complete!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your app is now deployed to Cloudflare!" -ForegroundColor White
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host "  1. Check your worker at Cloudflare Dashboard" -ForegroundColor White
Write-Host "  2. Configure custom domain (optional)" -ForegroundColor White
Write-Host "  3. Test your deployment" -ForegroundColor White
Write-Host ""
