/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* 
* ------------------
*
* Goal: At Przeprogramowani.pl we use multiple platforms at once - make sure that our favorite one works!
* 
* Hint: https://www.typescriptlang.org/docs/handbook/enums.html
*/

enum Media {
    Internet,
    Press,
    Radio
}

const przeprogramowani: Media = Media.Press;

/* Do not modify tests */

test('should use proper media type', () => {
    expect(przeprogramowani).toBe('Internet')
})