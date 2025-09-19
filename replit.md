# Overview

BizHeal is a comprehensive SaaS platform designed as a "digital doctor for businesses," analyzing company data to identify inefficiencies and suggest solutions. The project is built as a monorepo containing two Next.js applications: a marketing website and the main SaaS platform, along with shared packages for UI components, database schema, and configuration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Monorepo Structure
The project uses a pnpm workspace-based monorepo with the following structure:
- `apps/web`: Marketing website built with Next.js for static generation (SSG)
- `apps/app`: Main SaaS application with authentication and dashboard
- `packages/ui`: Shared React components using Shadcn/UI
- `packages/db`: Database schema and Prisma client
- `packages/config`: Shared configurations (ESLint, TypeScript, Prettier)

## Frontend Architecture
Both applications use Next.js 15+ with App Router and TypeScript. The marketing site focuses on conversion with static generation, while the main app provides authenticated user experiences with server-side rendering. Tailwind CSS handles styling across both applications, with a shared design system through the UI package.

## Authentication & Authorization
NextAuth.js v4 provides authentication with multiple providers including Google OAuth and email/password credentials. The system includes session management, password hashing with bcryptjs, and role-based access control. Authentication state is managed client-side with React Context.

## Database Architecture
PostgreSQL serves as the primary database with Prisma as the ORM. The schema includes user management, business profiles, subscriptions, and NextAuth.js session handling. A singleton pattern ensures proper database connection management across the monorepo.

## Component Architecture
Shared UI components are built on Radix UI primitives with class-variance-authority for type-safe styling variants. The design system follows Shadcn/UI patterns with consistent theming through CSS variables and Tailwind CSS configuration.

## Development Workflow
TypeScript provides type safety across all packages, with shared configurations ensuring consistency. ESLint and Prettier maintain code quality, while the monorepo structure enables code sharing and coordinated deployments.

# External Dependencies

## Core Framework Dependencies
- **Next.js 15+**: Full-stack React framework for both applications
- **React 19**: UI library for component development
- **TypeScript 5.9+**: Type system across the entire monorepo

## Authentication Services
- **NextAuth.js v4**: Authentication framework with session management
- **Google OAuth**: Social login integration requiring client credentials
- **bcryptjs**: Password hashing for credential-based authentication

## Database & ORM
- **PostgreSQL**: Primary database (configured and running)
- **Prisma 6.16+**: Database ORM with type-safe queries (schema deployed)
- **@auth/prisma-adapter**: NextAuth.js adapter for Prisma

## UI & Styling
- **Tailwind CSS 3.4+**: Utility-first CSS framework
- **Shadcn/UI Components**: Based on Radix UI primitives
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe component variants

## Development Tools
- **pnpm**: Package manager for monorepo workspace management
- **ESLint**: Code linting with TypeScript integration
- **Prettier**: Code formatting for consistency
- **PostCSS & Autoprefixer**: CSS processing pipeline

## Planned Integrations
- **Stripe**: Payment processing for subscription management
- **Email Service**: Password reset and notification functionality
- **Analytics**: Business intelligence and reporting capabilities

# Recent Changes (September 19, 2025)

## Replit Environment Setup (Completed)
- Successfully imported GitHub project to Replit environment
- Installed all dependencies using pnpm workspace management (734 packages)
- Configured PostgreSQL database with Prisma schema deployment
- Set up Next.js configuration for Replit proxy compatibility with allowedDevOrigins
- Main SaaS app running on port 5000 with proper host configuration (0.0.0.0)
- Deployment configuration set for autoscale deployment target
- Fixed Next.js 15 configuration warnings and cross-origin request handling

## Current Status
- All dependencies installed and working correctly
- PostgreSQL database schema deployed and functional
- Main SaaS application running successfully on port 5000
- NextAuth.js configured for Google OAuth and credentials authentication
- Deployment configuration ready for production
- Ready for development and deployment