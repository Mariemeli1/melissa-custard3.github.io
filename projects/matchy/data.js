/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a empty object
var animal = {};
//give animal a property of species with a value
animal.species = "Alligator";
//give animal a property of name with a name value
animal['name'] = "Allie";
//give animal of properrty of noises and set it o an empty array
animal.noises = [];
//checking my work
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a noises variable and set to empty array
var noises = [];
//give noises a string value of a noise
noises[0] = 'splash';
//add another noise to end of array
noises.push('crunch');
//use unshift to add noise to front of array
noises.unshift('growl');
//use bracket to add element to add of noises
noises[noises.length] = 'arrr';
//check length of noises
console.log(noises.length);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use bracket notation to assign noises property on animal object to noises array
animal['noises'] = noises;
//add another noise to the animal noises property
animal.noises.push('cricket cricket');
//check my work
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * for in loops, bracket and dot notation
 * 2. What are the different ways of accessing elements on arrays?
 *for loops , and bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable and set it to a empty array
var animals = [];
//push animal object into animals array
animals.push(animal);
//check work
console.log(animals);
//added a duck object
var duck = { species: 'duck', 
name: 'Jerome', 
noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//push duck to animals
animals.push(duck);
//check work
console.log(animals);
//create a cat object
var cat = {
 species: 'cat',
 name: 'Tuesday',
 noises: ['meow', 'purr'] 
}
//push cat into animals
animals.push(cat);
//create  a pig object
var pig = {
  species: 'pig',
  name: 'Chris P. Bacon',
  noises: ['sizzle', 'oink']
}
//push pig into animals
animals.push(pig);
//check animals array
console.log(animals);
//check length of animals array
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//chose an array because arrays are better in my opinion for lists.

//create a variable and set it to a array
var friends = [];
//create a function called get random
function getRandom(animals) {
  return Math.floor(Math.random() * animals.length);
}
console.log(getRandom(animals));
//add random animal name to friends array
 friends.push(animals[getRandom(animals)].name);
 //add a property of friends to our animals array and set it to an array
animals[getRandom(animals)]['friends'] = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}