import { test, expect } from 'vitest';

import { johnDoe, buildResume } from './new-skills';

test('should build an impressive resume', () => {
  const resume = buildResume(johnDoe);
  expect(resume).toStrictEqual(['I can dance!', 'I can sing!', 'I can teach!']);
});
