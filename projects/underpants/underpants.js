// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';



var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    //returns input value unchanged
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    //determine if value is an array
    if(Array.isArray(value)){
        //return array as a string
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
    }else if(typeof value === 'undefined'){
        //return undefined as a string
        return 'undefined';
        //else if value is a function
    }else if(typeof value === 'function'){
        //return function as a string
        return 'function';
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, num){
 //determine if array isnt an array
 if(!Array.isArray(array)){
    //return empty array
    return [];
 }
 //determine if number is not given
 if(num === undefined){
    //return the first element in array
    return array[0];
 }
 //determine if number is greater than the arrays length
 if(num > array.length){
    //return whole array
    return array;
 }
 //determine if number is a negative number
 if(num < 0){
    //return empty array
    return [];
 }//return array sliced
    return array.slice(0, num);
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num){
    //determine if array is an array
    if(!Array.isArray(array)){
        //return empty array
        return [];
    }//determine if number is not given
    if(num === undefined){
    //return the last element in array
    return array[array.length - 1];
    }
    //determine if number is greater than the arrays length
    if(num > array.length){
    //return whole array
    return array;
    }
    //determine if number is a negative number
    if(num < 0){
    //return empty array
    return [];
    }//return array sliced
    return array.slice(1);
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, val){
    //iterate through array
    for(let i = 0; i < array.length; i++){
        //if array[i] includes the first occurance of value
        if(array[i].includes(val)){
            //return index
            return i;
        }
     
    }//return -1 if array[i] does not include the first occurance of value
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    //ternary operator array contains value return true else return false
   return array.includes(value) ? true : false
    
  
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
    //determine if collection is an array
    if(Array.isArray(collection)){
        //iterate through collection with a for of loop(array)
        for (let i = 0; i < collection.length; i ++){
           //invoking callback func and passing in 
          //current element//current index//collection itself as arguments
           func(collection[i], i, collection);
        }
        //else collection is an object
       }else { 
         //iterate through collection with a for in loop(object)
         for (let key in collection){ //access to each key in object
          func(collection[key], key, collection);
         }
       }
   
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
 //create a new array
 var newArr = [];
 //iterate through array
 for(let i = 0; i < array.length; i++){
    //determine if the new array doesnt contain targeted value in given array
    if(newArr.indexOf(array[i]) === -1){
        //push arrray[i] into new array
        newArr.push(array[i]);
    }
 }
   //return new array
   return newArr;
}

    


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    //create a empty array
    var arr = [];
    //iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if calling func with its element, index and array passed in is true
        if(func(array[i], i, array) === true){
            //push in array[i] into new array
            arr.push(array[i]);
        }
    }
    //return arr
    return arr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    //create a new array
    var output = [];
    //iterate through array
    for(let i = 0; i < array.length; i++){
        //determine if calling func with its element, index and array passed in is false
        if(func(array[i], i, array) === false){
            //push in array[i] into new array;
            output.push(array[i]);
        }
    }
    //return output array
    return output;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
    //creat array
    var arr = [];
    //create a new array
    var arr1 = [];
    //create another array 
    var arr2 = [];
    //iterate through input array
    for(let i = 0; i < array.length; i++){
        //determine if  calling the func  and passing  in all elemnt, index and array is true 
        if(func(array[i], i, array) === true){
        //push in array[i] to arr1
        arr1.push(array[i]);
        }
        //determine if  calling the func  and passing  in all elemnt, index and array is false
        if(func(array[i], i, array) === false){
            //push in array[i] to arr2
            arr2.push(array[i]);
        }
    }//use spread operator to push in arr1 and arr2 with array literals around them into arr to create 2 sub arrays
    var subArray = [...arr, ...[arr1], ...[arr2]];
    //return subArray
    return subArray;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    //create a output array
    var output = [];
    //determine if collection is an array
         if(Array.isArray(collection)){
             //iterate through collection 
        for(let i = 0; i < collection.length; i++){
        //call function and pass in element, index and collection and push into output array
        output.push(func(collection[i], i, collection));
        //else its an object
        }
            }else {
            //iterate through collection(object)
            for(let key in collection){
            //call function and pass in its value, key and collection and push into output array
            output.push(func(collection[key], key, collection));
             }
         }       
    //return output array
    return output;
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(array, prop){
    //array is an array of objects

    //create a new array
    var arr = [];
    //iterate through array
    for(let i = 0; i < array.length; i++){
        //push array[i]and input prop into new array
        arr.push(array[i][prop]);
    }
    //return array
    return arr;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
 //determine if func was not passed in
 if(func === undefined ){
    //determine if collection is an array
    if(Array.isArray(collection)){
        //iterate through collections array
        for(let i = 0; i < collection.length; i++){
            //determine if collection[i] is false
            if(collection[i] === false){
                //return false;
                return false;
            }
        }
    } else { //else
        //iterate through object
        for(let key in collection){
            //determine if collection[key] is false
            if(collection[key] === false){
                //return false;
                return false;
            }
        }
    }

} else{ //else
//check if array is an array
    if(Array.isArray(collection)){
        //iterate through array
        for(let i = 0; i < collection.length; i++){
            //determine if calling func and passing in its current element, index and the array is false
            if(func(collection[i], i, collection) === false){
                //return false
                return false;
            }
        }
    } else{
        //else its an object
        //iterate through object usin a for in loop
        for(let key in collection){
            //determine if calling func and passing in its value, key and the object is false
            if(func(collection[key], key, collection) === false){
                //return false
                return false;
            }
        }
    }
}
//return true
return true;
}



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
    //determine if func was not passed in
 if(func === undefined ){
    //determine if collection is an array
    if(Array.isArray(collection)){
        //iterate through collections array
        for(let i = 0; i < collection.length; i++){
            //determine if collection[i] is true
            if(collection[i] === true){
                //return true;
                return true;
            }
        }
    } else { //else
        //iterate through object
        for(let key in collection){
            //determine if collection[key] is true
            if(collection[key] === true){
                //return false;
                return true;
            }
        }
    }

} else{ //else
//check if array is an array
    if(Array.isArray(collection)){
        //iterate through array
        for(let i = 0; i < collection.length; i++){
            //determine if calling func and passing in its current element, index and the array is true
            if(func(collection[i], i, collection) === true){
                //return true
                return true;
            }
        }
    } else{
        //else its an object
        //iterate through object usin a for in loop
        for(let key in collection){
            //determine if calling func and passing in its value, key and the object is true
            if(func(collection[key], key, collection) === true){
                //return true
                return true;
            }
        }
    }
}
//return false
return false;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(arr, func, seed){
      //create a result variable
      let result;
      //determine if seed was not given a value
      if(seed === undefined){
      //assign result value to first value in array
      result = arr[0];
      //iterate through input array starting at the 1 index
          for(let i = 1; i < arr.length; i++){
          //assign result to function call passing in previous result, element index, and the whole array
         result = func(result, arr[i], i, arr);
          }          //aka accumulator
      } else {
          //assign result to the seed value
          result = seed;
          //iterate through array
          for(let i = 0; i < arr.length; i++){
              //assign result to function call passing in previous result, element index, and the whole array
              result = func(result, arr[i], i, arr);
          }
      }//return result
      return result;
  }
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
//added a default parameter
_.extend = function(obj1, obj2, output={}){
//create a variable holding object.assign that aputs in all input objects inside of it;
var obj1 = Object.assign(obj1, obj2, output);
//return updated obj1;
return obj1;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
