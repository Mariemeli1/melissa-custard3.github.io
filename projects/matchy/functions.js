/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { arrayOrObject } = require("../function-master/function-master");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function declaration called search
//arr is the animals array(an array of objects)
//str is the name of the animals on which we need to perform search on
function search(arr, str){
//iterate through animals array
    for(let i = 0; i < arr.length; i++){
        //check if animal with input name exists
        if(arr[i].name === str){
            //return that animals object
            return arr[i];
        } 
    }
    //return null
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object
function replace(animals, name, replacement){
//iterate through animals array
for(let i = 0 ; i< animals.length; i++){
    //check if an animal with input name exists
    if(animals[i].name === name){
        //replace it with the replacement object
        animals[i] = replacement;
    }
}
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
//iterate through animals array
    for(var i = 0; i < animals.length; i++){
        //check if an animal with input name exists
     if(animals[i].name === name){
        //remove it
      animals.splice(0, 1);
      } 
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//animals = array
//animal = object to be added
function add(animals, animal){
    //create a var to hold a bool
    var test = false;
   //iterate through animals array
   for(let i = 0; i < animals.length; i++){
     //check if array name is equal to the input object name
     if(animals[i].name === animal.name){
     //change test var to true
     test = true;
     }
    }
     //check if test is equal to false
     if(test === false){
        //check if animal name length is greater than 0 and if the animal species length is greater than 0
        if(animal.name.length > 0 && animal.species.length > 0){
        //push animal object into animals array
        animals.push(animal);       
        }
      }
    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
