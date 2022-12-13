////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, num) {
  //create an array to later return 
  let arr = [];
  //if start is equal to end
  if(start === end){
    //return array
    return arr;
  } //check if num has a value
    if(num !== undefined){
    //check if num is less than o
      if(num < 0){
      //return array
      return arr;
    }
     //iterate 
     for(let i = start;  i <= end; i += num){
      //push everything from start to end inside of array
      arr.push(i);
    }
  } else{
    //iterate 
    for(let i = start;  i <= end; i++){
    //push everything from start to end inside of array
    arr.push(i);
  }
  }
  
  //return array
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  // use reduce to iterate through the array and return the sum
  return array.reduce((a, b) => a + b, 0)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  //create a var and set it to an empty array
  var arr =[];
//iterate through array
for(let i = array.length - 1; i >= 0; i--){
  //push in elements to empty array
  arr.push(array[i])
}//return new array
return arr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
//use reverse method
return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
//change array to an list

//set a varible list to null
let list = null;
//iterate through array in reverse
    for (let i = array.length - 1; i >= 0; i--) {
      //assign list to object with key/value properties
        list = { value: array[i], rest: list };
    }//return list
    return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(obj, output=[]) {
  //check if rest is null
    if(obj.rest === null){
      //push in value to output array
      output.push(obj.value)
      //return output
      return output;
    }
    //push value into output array
    output.push(obj.value);
    //delete the value
    delete obj.value;
    //return function call passing in the value rest and the output array
  return listToArray(obj.rest , output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  //return object with value prepended to the front
  return {value, rest: list};

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  //if list is not given 
  if (!list){
    //return undefined
    return undefined;
    //else if num is equal to 0
  }else if (num == 0){
    //return list with key of value
     return list.value;
  } else{//else
    //return function call passing in list with a key of rest and passing in num minusing 1 at each iteration
     return nth(list.rest, num - 1);
  }
}


////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
    //determine if x and y are both not objects
    if (typeof x !== "object" && typeof y !== "object"){
      return x === y
    }//determinf if either x or y are both not objects
    if (typeof x !== "object" || typeof y !== "object"){
      return false;
    }
    //create array of objects keys
    let xKeys = Object.keys(x);
    let yKeys = Object.keys(x);
    //determine if both xKeys and yKeys dont have the same lengths
    if(xKeys.length !== yKeys.length){
      return false;
    }
     // iterate through xKeys to see if properties match
     for (let i = 0; i < xKeys.length; i++){
      //
      if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])){
        return false;
      }
    }//return true
    return true;
  
    };

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
