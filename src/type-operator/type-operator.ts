/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Utility Types
 * ------------------
 *
 * Goal: Now we can add wrong value types as parameter to the function. Let's fix it by using on of the type operators.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 */

interface IdentifiableItem {
  id: number;
  name: string;
}

interface Book extends IdentifiableItem {
  author: string;
}

interface Video extends IdentifiableItem {
  length: number;
}

const books: Book[] = [
  { id: 1, name: 'Our Friends from Frolix 8', author: 'Philip K. Dick' },
  {
    id: 2,
    name: 'When: The Scientific Secrets of Perfect Timing',
    author: 'Daniel H. Pink'
  },
  {
    id: 3,
    name: 'Total Recall: My Unbelievably True Life Story',
    author: 'John Doe'
  },
  { id: 4, name: 'Wyloguj swój mózg', author: 'Anders Hansen' }
];

const videos: Video[] = [
  { id: 1, name: 'Ciekawostki o typach', length: 17 },
  { id: 2, name: 'Refaktoryzacja JS do TS', length: 15 },
  { id: 3, name: 'TypeScript na Backendzie', length: 13 },
  { id: 4, name: 'TypeScript i Frameworki Front-Endowe', length: 19 },
  { id: 5, name: 'Poznaj TypeScript', length: 15 }
];

function filterByProperty<T extends IdentifiableItem, K extends keyof T>(
  items: T[],
  key: K,
  value: T[any]
): T[] {
  return items.filter(item => item[key] === value);
}

export const filteredBooksByAuthor = filterByProperty(books, 'author', {author:'Philip K. Dick'});

export const filteredVideosByLength = filterByProperty(videos, 'length', '15');
