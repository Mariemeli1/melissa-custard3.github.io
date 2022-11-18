//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



function objectValues(object) {
//use object.values to return the objects values in an array
return Object.values(object)
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
//use object.keys to get the keys and put it in an array
var arr = Object.keys(object);
//use join method to join them into a string seperated by a space
return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr= [];
    //for in loop
    for(let key in object){
        //determine if values are in a string
        if(typeof object[key] === "string"){
            //push values into array
            arr.push([object[key]]);
        }
    }
    //use join method to join the values into a string seperated by a space
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //check if collection is an array
    if(Array.isArray(collection)){
        //return array in a string
        return 'array';
        //else if collection is an object
    } else if(typeof collection === 'object'){
        //return object as a string 
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return input string with first letter capitalized using uppercase method and slice method
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  //create an array and set it to the input string and split it
  let arr = string.split(" ");
  //iterate through arr
  for(let i = 0; i < arr.length; i++){
    //capitalize each first letter of every word using charAt, upperCase and slice.
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }//return the array into a string seperated by spaces using the join method
  return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    console.log(object);
    //iterate through object to get name property
    for(let key in object){
     // return Welcome object name with first letter capitalized and adding a exclamation mark at the end   
    return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1) + '!';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//return property name and property species capitalized at the first letter and putting 'is a' in between
return object.name[0].toUpperCase() +  object.name.slice(1) + ' is a ' + object.species[0].toUpperCase() + object.species.slice(1);
}
//checking my work
console.log(profileInfo({name: "jake", species: "dog"}));
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //iterate through object with a for in loop
    for(let key in object){
        //check if there is a noises array
        if(object.noises.length > 0){
         //return them as a string seperated by spaces using join
         return object.noises.join(" ");
         //else if there are no noises array
        }else if(object.noises.length === 0){
        //return "there are no noises"
        return 'there are no noises';
        //else if there isnt a noise array
        }
    }//returns there are no noises if there is no noises array
    return 'there are no noises'
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //check if string includes word
    if(string.includes(word)){
        //return true
        return true;
    }else{
        //return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //push name into objects friends array
    object.friends.push(name);
    //return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //iterate through object
    for(let key in object){
        //check if name is a friend of object
        if(object.friends.includes(name)){
            //return true
            return true;
        //else
        }else
        //return false
        return false
    }//returns false if there is no friends array
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//return a list of all the names that name is not friends with
function nonFriends(name, array) {
    //create a new array to later return with all the names that name is not friends with
    var loners = [];
    //iterate through array
    for(let i = 0; i < array.length; i++){
      if(array[i].name !== friends){
        //push that name into new array
        loners.push(name);
      }
    }
    return loners;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}