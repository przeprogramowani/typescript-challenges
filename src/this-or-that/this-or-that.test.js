import { test, expect } from 'vitest';

import { verify } from './this-or-that';

test('should pass verification', () => {
  const { result1, result2, result3, result4 } = verify();

  const expected = `Setting screen size as 1920px x 1080px`;

  expect(result1).toBe(expected);
  expect(result2).toBe(expected);
  expect(result3).toBe(expected);
  expect(result4).toBe(expected);
});
