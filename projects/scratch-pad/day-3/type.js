// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //determine if value is an array
    if(Array.isArray(value)){
        //return true
        return true;
        //else
    }else{
        //return false
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //determine if value is an array
    if(Array.isArray(value)){
        //return false
        return false;
        //else if value is not null
    }else if(value === null){
        //return false
        return false;
        //else if value is not an instance of date
    }else if(value instanceof Date){
        //return false
        return false;
        //else if value is a number
    }else if(typeof value === 'number'){
        //return false
        return false;
        //else if value is a string
    }else if(typeof value === 'string'){
        //return false
        return false;
        //else if value is a bool
    }else if(typeof value === 'boolean'){
        //return false
        return false;
        //else if value is an object
    }else if(typeof value === 'object'){
        //return true
        return true;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //determine if value is an array
    if(Array.isArray(value)){
        //return true
        return true;
        //else if value is not null
    }else if(value === null){
        //return false
        return false;
        //else if value is not an instance of date
    }else if(value instanceof Date){
        //return false
        return false;
        //else if value is a number
    }else if(typeof value === 'number'){
        //return false
        return false;
        //else if value is a string
    }else if(typeof value === 'string'){
        //return false
        return false;
        //else if value is a bool
    }else if(typeof value === 'boolean'){
        //return false
        return false;
        //else if value is an object
    }else if(typeof value === 'object'){
        //return true
        return true;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
     //determine if value is an array
     if(Array.isArray(value)){
        //return array is a string
        return 'array';
        //else if value is not null
    }else if(value === null){
        //return null as a string
        return 'null';
        //else if value is not an instance of date
    }else if(value instanceof Date){
        //return date as a string
        return 'date';
        //else if value is a number
    }else if(typeof value === 'number'){
        //return number as a string
        return 'number';
        //else if value is a string
    }else if(typeof value === 'string'){
        //return string as a string
        return 'string';
        //else if value is a bool
    }else if(typeof value === 'boolean'){
        //return boolean as a string
        return 'boolean';
        //else if value is an object
    }else if(typeof value === 'object'){
        //return object as a string
        return 'object';
        //else if value is undefined
    }else if(typeof value === undefined){
        //return undefined as a string
        return 'undefined';
        //else if value is a function
    }else if(typeof value === 'function'){
        //return function as a string
        return 'function';
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
