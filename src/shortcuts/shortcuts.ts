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
  constructor(items: string[]) {}

  lookInside() {
    return this.items;
  }
}

class BrandedBag {
  constructor(logo: string, brand: string, items: string[]) {
    super(items);
  }

  checkBrand() {
    return `Brand - ${this.brand}`;
  }
}

export const devBag = new BrandedBag('<P/>', 'Przeprogramowani.pl', [
  'keys',
  'sunglassess',
  'books',
]);
