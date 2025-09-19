import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';

// Load test environment variables
const testEnvPath = path.resolve(__dirname, './apps/app/.env.test');
dotenv.config({ path: testEnvPath });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Global setup to prepare test environment */
  globalSetup: require.resolve('./tests/global-setup'),
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [
    ['html', { open: 'never' }],
    ['github']
  ] : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:5000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Take screenshot on failure */
    screenshot: 'only-on-failure',
    /* Record video on failure */
    video: 'retain-on-failure',
    /* Wait for specific conditions - increased for CI stability */
    actionTimeout: process.env.CI ? 45000 : 30000,
    navigationTimeout: process.env.CI ? 45000 : 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: process.env.CI 
      ? 'cd apps/app && pnpm build && pnpm start -p 5000'
      : 'cd apps/app && pnpm dev -- --port 5000 --hostname 0.0.0.0',
    url: 'http://localhost:5000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    env: {
      NODE_ENV: 'test',
      ...(process.env.DATABASE_URL && { DATABASE_URL: process.env.DATABASE_URL }),
      ...(process.env.NEXTAUTH_SECRET && { NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET }),
      ...(process.env.NEXTAUTH_URL && { NEXTAUTH_URL: process.env.NEXTAUTH_URL }),
      // Include other defined environment variables
      ...Object.fromEntries(
        Object.entries(process.env).filter(([_, value]) => value !== undefined) as [string, string][]
      )
    },
  },
});