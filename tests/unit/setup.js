import { config } from '@vue/test-utils';
import { vi } from 'vitest';

// Mock global components or plugins if needed
config.global.mocks = {
  $t: (msg) => msg,
  $router: { push: vi.fn() },
  $route: { path: '/' }
};
