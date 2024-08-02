import { test, expect } from 'vitest';

import { monkey, snake, eatSomething } from './only-one';

test('should eat banana', () => {
  expect(eatSomething(monkey)).toBe('Eating banana!');
});

test('should eat mouse', () => {
  expect(eatSomething(snake)).toBe('Eating mouse!');
});
