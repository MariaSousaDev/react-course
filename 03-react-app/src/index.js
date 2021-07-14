import foods from './foods'
import {choice, remove} from './helpers'

let food = choice(foods);
console.log(`I want ${food} please`);
console.log(`This is your fruit ${food}`);
let left = remove(foods, food)
console.log(`Left fruis is ${left.length}`);

