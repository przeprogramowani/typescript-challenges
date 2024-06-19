/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Media
 * ------------------
 *
 * Goal: At Przeprogramowani.pl we use multiple platforms at once - make sure that our favorite one works!
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/enums.html
 */

enum Media {
  Internet,
  Press,
  Radio,
}

const przeprogramowani: Media = Media.Press;

function checkFavoriteMedia(media: Media): void {
  if (media === Media.Press) {
    console.log("Our favorite platform is Press!");
  } else {
    console.log("Our favorite platform is not Press.");
  }
}

/* Do not modify tests */

test("should use proper media type", () => {
  expect(przeprogramowani).toBe("Internet");
});
