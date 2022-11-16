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
//animaal = object to be added
function add(animals, animal){
    //check if animal has a name property greater than 0 length
    //if it has a species property greater than 0 length
    //and if it has a unique name that no other animals have
    if(animal.name.length > 0 && animal.species.length > 0 && animal.name !== new Set ){
    animals.push(animal);
    } else if(animal.name === new Set){
        animals.splice(0, 1);
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
