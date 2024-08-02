import { test, expect } from 'vitest';

import { devBag } from './shortcuts';

test('should contain proper brand', () => {
  expect(devBag.checkBrand()).toBe('Brand - Przeprogramowani.pl');
});

test('should contain keys', () => {
  expect(devBag.lookInside().includes('keys')).toBeTruthy();
});

test('should contain a logo', () => {
  expect(devBag.logo).toBe('<P/>');
});
