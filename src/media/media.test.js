import { test, expect } from 'vitest';

import { przeprogramowani } from './media';

test('should use proper media type', () => {
  expect(przeprogramowani).toBe('Internet');
});
