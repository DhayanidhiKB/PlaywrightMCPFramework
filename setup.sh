#!/bin/bash

# Facebook Automation Framework - Setup & Execution Script
# This script sets up and runs the Playwright automation framework

set -e

echo "=========================================="
echo "Facebook Automation Framework Setup"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

echo "✓ Node.js version:"
node --version

echo ""
echo "Step 1: Installing dependencies..."
npm install

echo ""
echo "Step 2: Installing Playwright browsers..."
npx playwright install

echo ""
echo "=========================================="
echo "Setup Complete! ✓"
echo "=========================================="
echo ""
echo "Available commands:"
echo ""
echo "  npm test              - Run all tests"
echo "  npm run test:headed   - Run tests in headed mode (browser visible)"
echo "  npm run test:ui       - Run tests with interactive UI"
echo "  npm run test:debug    - Debug tests with inspector"
echo "  npm run test:report   - View HTML test report"
echo ""
echo "To run a specific test:"
echo "  npx playwright test -g 'TC_FN_001'"
echo ""
echo "To run tests with grep pattern:"
echo "  npx playwright test --grep 'First Name'"
echo ""
echo "=========================================="
