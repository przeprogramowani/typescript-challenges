/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* Warm Up!
* ------------------
*
* Goal: First challenge - fix the types of variables and make sure that tests work fine!
* 
* Hint: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

const age: number = 80;
const firstName: string = 'Przemek';
const todos: Array<object> = [
    { todo: 'Learn TypeScript' },
    { todo: 'Subscribe Przeprogramowani', priority: 1},
    { todo: 'Sign up for newsletter', priority: 1}
]

/* Do not modify tests */

test('should verify age', () => {
    expect(age).toBe(80);
})

test('should verify firstName', () => {
    expect(firstName).toBe('Przemek');
})

test('should verify todos', () => {
    expect(todos.length).toBe(3);
})