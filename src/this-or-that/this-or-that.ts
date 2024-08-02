/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * This or that
 * ------------------
 *
 * Goal: Make sure that `configureScreenSize` function can accept both types of parameters.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
 */

const iAmANumber = 800;
const iAmAString = '600';

function configureScreenSize(width, height) {
  return `Setting screen size as ${width}px x ${height}px`;
}

export function verify() {
  const result1 = configureScreenSize(1920, '1080');
  const result2 = configureScreenSize('1920', '1080');
  const result3 = configureScreenSize(1920, 1080);
  const result4 = configureScreenSize('1920', 1080);

  return {
    result1,
    result2,
    result3,
    result4,
  };
}
