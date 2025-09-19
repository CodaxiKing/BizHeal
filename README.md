# BizHeal - Business Health Analytics Platform

BizHeal is a comprehensive SaaS platform for business health analytics and financial insights. Built with Next.js, TypeScript, and modern tools in a monorepo architecture.

## Project Structure

This is a monorepo managed with pnpm workspaces:

- `apps/app` - Main Next.js application
- `apps/web` - Marketing website
- `packages/ui` - Shared UI components
- `packages/db` - Database schema and utilities
- `packages/config` - Shared configuration files

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- pnpm (latest version)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up your environment variables
4. Start the development server:
   ```bash
   cd apps/app && pnpm dev
   ```

The application will be available at `http://localhost:5000`.

## End-to-End Testing

This project uses Playwright for end-to-end testing with comprehensive reliability improvements including test data isolation, database separation, and CI optimization.

### Test Architecture

- **Test Data Isolation**: Each test run generates unique user data to prevent conflicts
- **Serial Execution**: Authentication tests run serially to prevent race conditions
- **Database Separation**: Tests use a dedicated test database to avoid polluting development data
- **Robust Selectors**: Uses `data-testid` attributes for stable element identification
- **CI Optimization**: Production build testing with optimized timeouts and retry logic

### Running E2E Tests

#### Prerequisites
1. Install all dependencies: `pnpm install`
2. Install Playwright browsers: `pnpm exec playwright install`
3. Ensure test database is configured (handled automatically by global setup)

#### Local Development Commands

```bash
# Run all E2E tests (uses dev server)
pnpm exec playwright test

# Run tests in headed mode (show browser)
pnpm exec playwright test --headed

# Run tests in a specific browser
pnpm exec playwright test --project=chromium
pnpm exec playwright test --project=firefox
pnpm exec playwright test --project=webkit

# Run a specific test file
pnpm exec playwright test tests/auth.spec.ts

# Run tests in debug mode
pnpm exec playwright test --debug

# Show test report
pnpm exec playwright show-report
```

#### CI/Production Testing

```bash
# Test against production build (simulates CI environment)
CI=true pnpm exec playwright test

# Run with explicit test environment
NODE_ENV=test pnpm exec playwright test
```

#### Test Configuration

The Playwright configuration (`playwright.config.ts`) includes reliability improvements:

- **Global Setup**: Automatic database reset and migration before tests
- **Environment Isolation**: Separate `.env.test` configuration
- **Production Testing**: Uses `next build && next start` in CI environments
- **Optimized Timeouts**: Extended timeouts for CI stability (45s vs 30s)
- **Enhanced Reporting**: GitHub Actions integration with artifact upload
- **Browser Coverage**: Chromium, Firefox, and WebKit
- **Test Artifacts**: Screenshots, videos, and traces on failures

#### Current Test Coverage

- **Authentication Flow** (`tests/auth.spec.ts`) with reliability improvements:
  - User registration with unique test data per run
  - Login and logout functionality with robust selectors
  - Dashboard access verification using `data-testid` attributes
  - Form validation testing with isolated test scenarios
  - Error handling for invalid credentials
  - Redirect behavior verification
  - Serial execution to prevent race conditions

#### Writing New Tests

1. Create test files in the `tests/` directory with `.spec.ts` extension
2. Import test utilities: `import { test, expect } from '@playwright/test'`
3. Use robust selectors with `data-testid` attributes
4. Generate unique test data to avoid conflicts
5. Follow existing patterns for consistency

Example test structure with best practices:
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  // Configure serial execution if tests have dependencies
  test.describe.configure({ mode: 'serial' });
  
  // Generate unique test data
  const testId = Date.now() + '-' + Math.random().toString(36).substring(7);
  
  test('should perform expected behavior', async ({ page }) => {
    await page.goto('/page-url');
    
    // Use robust data-testid selectors
    await page.getByTestId('element-id').click();
    await expect(page.getByTestId('result-element')).toBeVisible();
    
    // Use unique test data
    await page.getByTestId('input-field').fill(`test-${testId}@example.com`);
  });
});
```

#### Debugging Tests

- **Debug Mode**: `--debug` flag opens Playwright Inspector
- **Headed Mode**: `--headed` shows browser actions during execution
- **Test Reports**: `pnpm exec playwright show-report` for detailed results
- **Artifacts**: Screenshots, videos, and traces captured on failures
- **Database State**: Global setup logs database operations for debugging
- **Environment Variables**: Check `.env.test` for test-specific configuration
- **Unique Test Data**: Each test run generates unique identifiers for isolation

#### Test Environment Setup

**Before Running Tests**:
1. Copy the environment template:
   ```bash
   cp apps/app/.env.test.example apps/app/.env.test
   ```
2. Configure your test database URL in `apps/app/.env.test`
3. Generate a unique test secret for `NEXTAUTH_SECRET`
4. Ensure your test database is separate from development data

**Environment Variables**:
- Tests use a dedicated `.env.test` file for environment isolation
- **IMPORTANT**: Never commit `.env.test` - it contains sensitive credentials
- Use `.env.test.example` as a template for setup
- The `.gitignore` file prevents accidental commits of sensitive test files

**Database Setup**:
- Tests automatically reset the database before each run
- Uses a separate test database to prevent development data pollution
- Global setup handles schema migrations and data cleanup
- All tables are cleaned in proper order to respect foreign key constraints

**Production Build Testing**:
```bash
# Test against production build (simulates production environment)
CI=true pnpm exec playwright test

# Run with explicit test environment
NODE_ENV=test pnpm exec playwright test
```

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run unit tests
- `pnpm exec playwright test` - Run E2E tests

### Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma
- **Authentication**: NextAuth.js
- **Testing**: Jest (unit), Playwright (E2E)
- **Package Manager**: pnpm

## Contributing

1. Follow the existing code style and patterns
2. Write tests for new features
3. Ensure all tests pass before submitting PR
4. Update documentation as needed

## License

[Your License Here]