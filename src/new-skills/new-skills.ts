/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * New skills
 * ------------------
 *
 * Goal: Make sure that `johnDoe` can build his impressive resume. Do not use classes.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
 */

interface Singer {
  sing(): string;
}

interface Dancer {
  dance(): string;
}

interface Teacher {
  teach(): string;
}

type SkilledPerson = Singer;
export const johnDoe: SkilledPerson = {};

export function buildResume(person: SkilledPerson) {
  const skills = [person.dance(), person.sing(), person.teach()];
  return skills;
}
