// src/test/api-setup.ts
import { describe, beforeAll, afterAll, expect, vi } from 'vitest';
import { createServer } from './server';

// Mock environment variables for testing
vi.mock('@/src/db.ts', () => ({
  db: {
    prepare: vi.fn().mockReturnValue({
      get: vi.fn().mockReturnValue({}),
      all: vi.fn().mockReturnValue([]),
      run: vi.fn().mockReturnValue({}),
    }),
  },
}));

vi.mock('@/src/lib/api', () => ({
  getUser: vi.fn().mockResolvedValue({
    id: 'test-user',
    email: 'test@example.com',
    name: 'Test User',
  }),
}));

// We'll set up the test server in a beforeAll hook
let server: any;

export const setupTestServer = async () => {
  // Import the actual server module and start it in test mode
  const serverModule = await import('./server');
  // We'll need to modify the server to accept a port or use a test port
  // For now, we'll create a simple test that verifies the setup works
  return serverModule;
};

export const teardownTestServer = async (serverInstance: any) => {
  if (serverInstance?.server) {
    await serverInstance.server.close();
  }
};