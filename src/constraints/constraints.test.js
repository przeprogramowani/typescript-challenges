import { test, expect } from 'vitest';

import { processedBooks, processedVideos } from './constraints.js';

test('should return only some specific books', () => {
  expect(processedBooks.length).toBe(2);
});

test('should return only some specific videos', () => {
  expect(processedVideos.length).toBe(3);
});
