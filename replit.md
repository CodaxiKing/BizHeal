# BizHeal SaaS Application

## Overview
This is a monorepo containing a BizHeal SaaS application built with Next.js, PostgreSQL, NextAuth.js, and Stripe integration. The project was successfully imported from GitHub and set up to run in the Replit environment on September 19, 2025.

## Project Structure
- **apps/app**: Main SaaS application (main frontend app running on port 5000)
- **apps/web**: Marketing website (secondary app, runs on port 3000)
- **packages/db**: Shared Prisma database configuration
- **packages/ui**: Shared UI components
- **packages/config**: Shared configuration files

## Current State
✅ **Fully Functional** - All components are working correctly:
- pnpm package manager setup and dependencies installed
- PostgreSQL database connected and schema deployed
- Next.js configuration optimized for Replit environment
- Environment variables configured for NextAuth.js
- Development workflow running on port 5000
- Deployment configuration set up for autoscale

## Architecture
- **Frontend**: Next.js 15.5.3 with React 19
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with support for Google OAuth
- **Payments**: Stripe integration configured (keys needed for full functionality)
- **Styling**: TailwindCSS
- **Package Manager**: pnpm workspace

## Environment Variables
Configured in `apps/app/.env.local`:
- `NEXTAUTH_SECRET`: Authentication secret key
- `NEXTAUTH_URL`: Current Replit domain URL
- `DATABASE_URL`: PostgreSQL connection (provided by Replit)
- Optional: Google OAuth and Stripe keys (commented out, can be added later)

## Development
The main development workflow is configured and running:
- **Command**: `cd apps/app && pnpm dev`
- **Port**: 5000
- **Host**: 0.0.0.0 (configured for Replit proxy)

## Deployment
Configured for autoscale deployment:
- **Build**: `pnpm build`
- **Run**: `cd apps/app && node server.js`
- **Type**: Autoscale (stateless web application)

## Recent Changes
- Updated Next.js config to allow all hosts for Replit proxy compatibility
- Fixed NEXTAUTH_URL to current Replit domain
- Set up development workflow for the main app
- Configured deployment for production use