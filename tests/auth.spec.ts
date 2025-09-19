import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  // Configure serial execution to prevent race conditions
  test.describe.configure({ mode: 'serial' });
  
  // Generate unique test data for each test run to avoid conflicts
  const testRunId = Date.now() + '-' + Math.random().toString(36).substring(7);
  const testUser = {
    name: `Test User ${testRunId}`,
    email: `test.${testRunId}@example.com`,
    password: 'test123456'
  };

  test('should complete full registration flow and redirect to dashboard', async ({ page }) => {
    // Navigate to register page
    await page.goto('/register');
    
    // Wait for the register page to load
    await expect(page.getByTestId('register-title')).toContainText('Criar conta gratuita');

    // Fill in registration form using robust data-testid selectors
    await page.getByTestId('register-name-input').fill(testUser.name);
    await page.getByTestId('register-email-input').fill(testUser.email);
    await page.getByTestId('register-password-input').fill(testUser.password);
    await page.getByTestId('register-confirm-password-input').fill(testUser.password);

    // Submit the registration form
    await page.getByTestId('register-submit-button').click();

    // Wait for navigation and check if we're redirected to onboarding first
    // The app redirects to /onboarding after successful registration
    await page.waitForURL('**/onboarding', { timeout: 10000 });
    expect(page.url()).toContain('/onboarding');

    // Navigate to dashboard (or wait if auto-redirected)
    await page.goto('/dashboard');

    // Verify we're on the dashboard page
    await page.waitForURL('**/dashboard', { timeout: 10000 });
    
    // Check for dashboard elements - the actual title is "Dashboard Empresarial"
    await expect(page.locator('#dashboard-title')).toContainText('Dashboard Empresarial');
    
    // Verify user is logged in by checking for user greeting
    await expect(page.getByTestId('user-greeting')).toBeVisible();
    
    // Check for key dashboard elements using data-testid
    await expect(page.getByTestId('kpi-faturamento')).toBeVisible();
    await expect(page.getByTestId('kpi-despesas')).toBeVisible();
    await expect(page.getByTestId('kpi-lucro')).toBeVisible();
    
    // Check for dashboard cards/sections
    await expect(page.locator('#churn-scanner-card')).toBeVisible();
    await expect(page.locator('#integrations-button')).toBeVisible();
    await expect(page.locator('#settings-button')).toBeVisible();
  });

  test('should handle logout and login flow', async ({ page }) => {
    // Generate unique user for this specific test to avoid conflicts
    const loginTestUser = {
      name: `Login User ${testRunId}`,
      email: `login.${testRunId}@example.com`,
      password: 'test123456'
    };
    
    // First, we need to register a user for this test
    await page.goto('/register');
    
    await page.getByTestId('register-name-input').fill(loginTestUser.name);
    await page.getByTestId('register-email-input').fill(loginTestUser.email);  
    await page.getByTestId('register-password-input').fill(loginTestUser.password);
    await page.getByTestId('register-confirm-password-input').fill(loginTestUser.password);
    
    await page.getByTestId('register-submit-button').click();
    
    // Wait for successful registration and navigate to dashboard
    await page.waitForURL('**/onboarding', { timeout: 10000 });
    await page.goto('/dashboard');
    await page.waitForURL('**/dashboard', { timeout: 10000 });
    
    // Verify we're logged in
    await expect(page.locator('#dashboard-title')).toContainText('Dashboard Empresarial');
    
    // Logout - click the logout button using data-testid
    await page.getByTestId('logout-button').click();
    
    // Verify redirect to login page
    await page.waitForURL('**/login', { timeout: 10000 });
    await expect(page.getByTestId('login-title')).toContainText('Bem-vindo de volta');
    
    // Login with the same credentials using robust selectors
    await page.getByTestId('login-email-input').fill(loginTestUser.email);
    await page.getByTestId('login-password-input').fill(loginTestUser.password);
    await page.getByTestId('login-submit-button').click();
    
    // Verify successful login and redirect to dashboard
    await page.waitForURL('**/dashboard', { timeout: 10000 });
    await expect(page.locator('#dashboard-title')).toContainText('Dashboard Empresarial');
    
    // Verify user is logged in again
    await expect(page.getByTestId('user-greeting')).toBeVisible();
  });

  test('should show validation errors for invalid registration data', async ({ page }) => {
    await page.goto('/register');
    
    // Generate unique email for this validation test
    const validationTestEmail = `validation.${testRunId}@example.com`;
    
    // Test password mismatch using robust selectors
    await page.getByTestId('register-name-input').fill(`Validation User ${testRunId}`);
    await page.getByTestId('register-email-input').fill(validationTestEmail);
    await page.getByTestId('register-password-input').fill('password123');
    await page.getByTestId('register-confirm-password-input').fill('differentpassword');
    
    await page.getByTestId('register-submit-button').click();
    
    // Check for password mismatch error using data-testid
    await expect(page.getByTestId('register-error-message')).toContainText('As senhas não coincidem');
    
    // Test short password
    await page.getByTestId('register-password-input').fill('123');
    await page.getByTestId('register-confirm-password-input').fill('123');
    
    await page.getByTestId('register-submit-button').click();
    
    // Check for short password error
    await expect(page.getByTestId('register-error-message')).toContainText('A senha deve ter pelo menos 6 caracteres');
  });

  test('should show login error for invalid credentials', async ({ page }) => {
    await page.goto('/login');
    
    // Try to login with invalid credentials - use unique email for isolation and robust selectors
    await page.getByTestId('login-email-input').fill(`nonexistent.${testRunId}@example.com`);
    await page.getByTestId('login-password-input').fill('wrongpassword');
    await page.getByTestId('login-submit-button').click();
    
    // Wait for error message to appear using data-testid
    await expect(page.getByTestId('login-error-message')).toBeVisible({ timeout: 5000 });
  });

  test('should redirect unauthenticated users from dashboard to login', async ({ page }) => {
    // Try to access dashboard without being logged in
    await page.goto('/dashboard');
    
    // Should be redirected to login page
    await page.waitForURL('**/login', { timeout: 10000 });
    await expect(page.getByTestId('login-title')).toContainText('Bem-vindo de volta');
  });
});