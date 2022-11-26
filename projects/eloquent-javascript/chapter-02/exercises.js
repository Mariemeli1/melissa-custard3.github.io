
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //create a var that holds a empty string
  var str = '';
  //loop through num
  for(let i = 1; i <= num; i++){
  //add and assign a hashtag to str
  str += '#';
  //log str to the console
  console.log(str);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  //use a for loop to print numbers from 1 - 15
  for(let i = 1; i <= 15; i++){
    //determine if there are multiples of 3 and 5
    if(i % 3  === 0 && i % 5 === 0){
     //print FizzBuzz
     console.log('fizzbuzz');
     //else if there are multiples of 3 
    }else if(i % 3 === 0){
        //print Fizz
        console.log('fizz')
        //else if there are multiples of 5 
    }else if(i % 5 === 0){
        //print 'Buzz'
        console.log('buzz')
    } else{//else
    //print numbers 1 - 15
    console.log(i);
    }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
  //create a empty string var
  var str = '';
  for(let i = 0; i < num; i++){
    //iterate through num
    for(let j = 0; j < num; j++){
      //create a sum var
      var sum = j + i;
      //check if sum is divisible by 2
      if(sum % 2 === 0){
        //add a space to str
        str += ' ';
        //else if
      }else if(sum % 1 === 0){
        //add and assign hashtag to str
        str += '#';

      }
    }//add anew line chracter to string at each iteration
    str += '\n';
  }
  console.log(str);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
