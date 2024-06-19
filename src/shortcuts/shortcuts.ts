/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Shortcuts
 * ------------------
 *
 * Goal: Make sure that everything works fine - it's that simple!
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/classes.html
 */

class Bag {
  items: string[];

  constructor(items: string[]) {
    this.items = items;
  }

  lookInside() {
    return this.items;
  }
}

class BrandedBag extends Bag {
  logo: string;
  brand: string;

  constructor(logo: string, brand: string, items: string[]) {
    super(items);
    this.logo = logo;
    this.brand = brand;
  }

  checkBrand() {
    return `Brand - ${this.brand}`;
  }
}

const devBag = new BrandedBag("<P/>", "Przeprogramowani.pl", [
  "keys",
  "sunglassess",
  "books",
]);

/* Do not modify tests */

test("should contain proper brand", () => {
  expect(devBag.checkBrand()).toBe("Brand - Przeprogramowani.pl");
});

test("should contain keys", () => {
  expect(devBag.lookInside().includes("keys")).toBeTruthy();
});

test("should contain a logo", () => {
  expect(devBag.logo).toBe("<P/>");
});
