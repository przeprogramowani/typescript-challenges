/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* Only one
* ------------------
*
* Goal: Make sure that both `eatBanana` and `eatMouse` can be called inside `eatSomething`.
* 
* Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
*/

class Monkey {
    eatBanana() {
        return 'Eating banana!'
    }
}

class Snake {
    eatMouse() {
        return 'Eating mouse!'
    }
}

const monkey = new Monkey()
const snake = new Snake()

type AnimalInZoo = Monkey | Snake

function eatSomething(animal: AnimalInZoo) {
    animal.eatBanana();
    animal.eatMouse();
}

/* Do not modify tests */

test('should eat banana', () => {
    expect(eatSomething(monkey)).toBe('Eating banana!')
})

test('should eat mouse', () => {
    expect(eatSomething(snake)).toBe('Eating mouse!')
})