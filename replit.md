# BizHeal - Financial Management SaaS Platform

## Project Overview
BizHeal is a comprehensive Brazilian financial management SaaS platform that provides intelligent business analytics, automated integrations, and financial insights for businesses. The platform is built with Next.js, TypeScript, Prisma, and PostgreSQL.

## Architecture
This is a monorepo setup with pnpm workspace containing:
- **apps/app**: Main SaaS application with full feature set
- **apps/web**: Marketing website (currently not in use)
- **packages/db**: Shared database schema and Prisma client
- **packages/ui**: Shared UI components
- **packages/config**: Shared configuration files

## Technology Stack
- **Frontend**: Next.js 15.5.3, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with Prisma adapter
- **Package Manager**: pnpm with workspace support
- **Payments**: Stripe integration
- **Data Analysis**: Custom analytics service with chart support

## Key Features
- User authentication and registration
- Business profile management
- Financial transaction tracking
- Revenue analysis and churn risk detection
- Third-party integrations (Shopify, banking systems)
- CSV data import functionality
- Subscription management with Stripe
- Admin panel and user management
- Dashboard with financial insights

## Development Setup
The application is configured to run on:
- **Development**: http://0.0.0.0:5000
- **Database**: PostgreSQL provided by Replit
- **Environment**: Configured with NextAuth secrets and database connection

## Current Status
- ✅ Dependencies installed with pnpm
- ✅ PostgreSQL database connected and schema deployed
- ✅ Application running successfully on port 5000
- ✅ Cross-origin configuration updated for Replit environment
- ✅ Deployment configuration set for autoscale
- ✅ All core functionality operational

## Recent Changes (September 19, 2025)
- Fresh GitHub project import and complete setup completed successfully
- Installed all dependencies using pnpm workspace (746 packages)
- Created and configured PostgreSQL database with Prisma schema migration
- Updated next.config.js with current Replit domain (30382c60-0304-4529-953e-000becf2f7cb-00-1kyts45a68e7a.spock.replit.dev)
- Configured Next.js with allowedHosts for proper proxy support in Replit environment  
- Set up workflow to run main SaaS application on port 5000 with correct host binding (0.0.0.0)
- Configured deployment with autoscale target for production readiness
- Successfully deployed database schema using Prisma db:push
- Verified application compilation and functionality through testing
- Application is fully functional and ready for development/production use

## Database Schema
The application uses a comprehensive schema including:
- User management with NextAuth.js models
- Business profiles and onboarding data
- Transaction tracking for financial analysis
- Subscription management for SaaS billing
- Integration data for third-party connections

## Notes
- The application is primarily in Portuguese (Brazilian market)
- Main workflow runs the SaaS app (`apps/app`) rather than the marketing site
- All authentication and payment features are integrated and functional
- Ready for production deployment with autoscale configuration