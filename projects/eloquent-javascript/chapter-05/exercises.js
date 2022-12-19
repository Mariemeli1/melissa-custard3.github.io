// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
//reduce through input array
  let flat = array.reduce(function(acc, curr){
    //create a variable that holds current concatenated to accumulator
      var arr = acc.concat(curr);
      //return arr
      return arr;
  },[]);//seed value of array
  //return flat
 return flat;
}
// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(begin, test, update, body) {
  for (let value = begin; test(value); value = update(value)) {
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(collection, func) {
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

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
//create an array that will go from left to right
let ltr = [];
//create an array that will go from right to left
let rtl = [];
//iterate through input string
for(let i = 0; i < string.length; i++){
 //create a variable and set it to the strings character code and iterate through array of script
 let scriptName = characterScript(string.charCodeAt(i));
 //if scriptName does not equal null
 if(scriptName !== null){
   //if script name direction is left to right
   if(scriptName.direction === 'ltr'){
     ///push the scriptName into the left to right array
       ltr.push(scriptName);
   } else{//else
     //oush scriptName into rtl
     rtl.push(scriptName);
   }
 }
}
//compare the lengths of the ltr/rtl arrays
if(ltr.length > rtl.length){
//return left to right
return 'ltr'
}else {///else
//return right to left
return 'rtl';
}

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
