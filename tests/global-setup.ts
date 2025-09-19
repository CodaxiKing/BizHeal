import { FullConfig } from '@playwright/test';
import { PrismaClient } from '../packages/db/generated/prisma';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

async function globalSetup(config: FullConfig) {
  console.log('🧪 Setting up test environment...');

  // Note: NODE_ENV is set to 'test' via playwright config webServer env
  
  // Load test environment variables
  const testEnvPath = path.resolve(__dirname, '../apps/app/.env.test');
  console.log(`📋 Loading test environment from: ${testEnvPath}`);
  
  try {
    // Load environment variables from .env.test
    const dotenv = await import('dotenv');
    dotenv.config({ path: testEnvPath });
    
    console.log('✅ Test environment variables loaded');
  } catch (error) {
    console.warn('⚠️  Warning: Could not load .env.test file:', error);
  }

  // Ensure we have a test database URL
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL must be set in .env.test for testing');
  }

  console.log('🗄️  Setting up test database...');

  try {
    // Initialize Prisma client for test database
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });

    // Reset the test database - remove all data
    console.log('🧹 Cleaning test database...');
    
    // Clean up in reverse order due to foreign key constraints
    await prisma.transaction.deleteMany();
    await prisma.integration.deleteMany();
    await prisma.businessProfile.deleteMany();
    await prisma.subscription.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();
    
    console.log('✅ Test database cleaned');

    // Run database migrations to ensure schema is up to date
    console.log('🔄 Running database migrations...');
    
    const rootPath = path.resolve(__dirname, '..');
    await execAsync('pnpm --filter @bizheal/db db:push', { 
      cwd: rootPath,
      env: { 
        ...process.env,
        DATABASE_URL: process.env.DATABASE_URL 
      }
    });
    
    console.log('✅ Database migrations completed');

    await prisma.$disconnect();
    
    console.log('🎉 Test environment setup completed');
    
  } catch (error) {
    console.error('❌ Test setup failed:', error);
    throw error;
  }
}

export default globalSetup;