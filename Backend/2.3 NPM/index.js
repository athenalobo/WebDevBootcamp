import generateName from "sillyname";
import {randomSuperhero} from 'superheroes';

var sillyName = generateName();
var superhero = randomSuperhero();

console.log(`My name is ${sillyName}.`);
console.log(`I am ${superhero}!`);