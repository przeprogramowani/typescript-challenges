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

interface IEatable{ //Can eat ;)
    eat:()=>string;
}

class Monkey implements IEatable{
    eat() {
        return 'Eating banana!'
    }
}

class Snake implements IEatable{
    eat() {
        return 'Eating mouse!'
    }
}

const monkey = new Monkey()
const snake = new Snake()

type AnimalInZoo = Monkey | Snake
//Animal shoul implement behavior - eat
function eatSomething(animal: AnimalInZoo) {

   return animal.eat();
    
}

/* Do not modify tests */

test('should eat banana', () => {
    expect(eatSomething(monkey)).toBe('Eating banana!')
})

test('should eat mouse', () => {
    expect(eatSomething(snake)).toBe('Eating mouse!')
})
