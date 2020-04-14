/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* Constraints
* ------------------
*
* Goal: Implementation of generic function `processItems` is broken. Generic type `T` is not enough so let's fix it!
* 
* Hint: https://www.typescriptlang.org/docs/handbook/generics.html
*/

interface Book {
    id: number;
    name: string;
    author: string;
}

interface Video {
    id: number;
    name: string;
    length: number;
}

const books: Book[] = [
    { id: 1, name: 'Our Friends from Frolix 8', author: 'Philip K. Dick' },
    { id: 2, name: 'When: The Scientific Secrets of Perfect Timing', author: 'Daniel H. Pink' },
    { id: 3, name: 'Total Recall: My Unbelievably True Life Story', author: 'Arnold Schwarzenegger' },
    { id: 4, name: 'Wyloguj swój mózg', author: 'Anders Hansen' }
]

const videos: Video[] = [
    { id: 1, name: 'Ciekawostki o typach', length: 17 },
    { id: 2, name: 'Refaktoryzacja JS do TS', length: 15 },
    { id: 3, name: 'TypeScript na Backendzie', length: 13 },
    { id: 4, name: 'TypeScript i Frameworki Front-Endowe', length: 19 },
    { id: 5, name: 'Poznaj TypeScript', length: 22 }
]

function processItems<T>(items: T[]): T[] {
    return items
        .filter(({ id }) => id > 2)
        .map(({ id, name }) => ({ id, name }));
}

const processedBooks = processItems(books);
const processedVideos = processItems(videos);

/* Do not modify tests */

test('should return only some specific books', () => {
    expect(processedBooks.length).toBe(2);
})

test('should return only some specific videos', () => {
    expect(processedVideos.length).toBe(3);
})