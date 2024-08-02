import { test, expect } from 'vitest';

import { age, firstName, todos } from './warm-up';

test('should verify age', () => {
  expect(age).toBe(80);
});

test('should verify firstName', () => {
  expect(firstName).toBe('Przemek');
});

test('should verify todos', () => {
  expect(todos.length).toBe(3);
});
