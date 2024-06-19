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
const iAmAString = "600";

function configureScreenSize(width: string | number, height: string | number) {
  const widthStr = typeof width === "number" ? width.toString() : width;
  const heightStr = typeof height === "number" ? height.toString() : height;

  return `Setting screen size as ${widthStr}px x ${heightStr}px`;
}

/* Do not modify tests */

test("should pass with two numbers", () => {
  expect(configureScreenSize(iAmANumber, iAmANumber)).toBe(
    "Setting screen size as 800px x 800px"
  );
});

test("should pass with number and string", () => {
  expect(configureScreenSize(iAmANumber, iAmAString)).toBe(
    "Setting screen size as 800px x 600px"
  );
});

test("should pass with string and number", () => {
  expect(configureScreenSize(iAmAString, iAmANumber)).toBe(
    "Setting screen size as 600px x 800px"
  );
});

test("should pass with two strings", () => {
  expect(configureScreenSize(iAmAString, iAmAString)).toBe(
    "Setting screen size as 600px x 600px"
  );
});
