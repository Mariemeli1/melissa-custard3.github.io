// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a function that takes in a value(mine is a number)
    return function(num){
        //determine if num is greater than the base
        if(num > base){
        //return true
        return true;
        //else
        }else{
            //return false
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return a function that takes in a value(mine is a number)
    return function(num){
        //determine if num is less than the base
        if(num < base){
        //return true
        return true;
        //else
        }else{
            //return false
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return a function that takes in a string that starts with outer function param
    return function(string){
        //determine if string starts with outer param, case insensitive
        if(string[0].toLowerCase() === startsWith.toLowerCase()){
            //return true
            return true;
            //else
        }else{
            //return false
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
      //return a function that takes in a string that ends with outer function param
      return function(string){
        //determine if string ends with outer param, case insensitive
        if(string[string.length-1].toUpperCase() === endsWith.toUpperCase()){
            //return true
            return true;
            //else
        }else{
            //return false
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //creat a output array to collect results
    var output = [];
    //iterate through input array
    for(let i = 0; i < strings.length; i++){
        //push in function call with strings index passed in it
        output.push(modify(strings[i]));
    }//return output
    return output;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //create a variable and use reduce on input array
    var num = strings.reduce(function(acc, curr){
       //determine if all strings pass the test
        if(test(curr)){
         //increase accumulator
         acc++;
        }
        //return acc
        return acc;
    }, 0);
    //determine if num is equal to strings length
    if(num === strings.length){
        //return true
        return true;
    }else{//else
       // return false
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
