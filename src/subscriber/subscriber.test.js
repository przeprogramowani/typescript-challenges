import { test, expect } from 'vitest';

import { db } from './subscriber';

test('db should have users, articles, photos, and subscribe properties', () => {
  expect(db).toHaveProperty('users');
  expect(db).toHaveProperty('articles');
  expect(db).toHaveProperty('photos');
  expect(db).toHaveProperty('subscribe');
});

test('db.subscribe should return the event', () => {
  const event = 'usersCreated';
  const callback = () => {};
  expect(db.subscribe(event, callback)).toBe(event);
});
