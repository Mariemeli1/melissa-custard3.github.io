// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./melissa-custard3.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
 let males = _.filter(array, function(customer){
    return customer.gender === 'male';
 })
 return males.length;
};

var femaleCount = function(array){
 //implement _.reduce() to return number of only female customers
    let females = _.reduce(array, function(acc, current){
    ///determining if current gender is female
     if(current.gender === 'female'){
      //increment acc
       return  acc + 1;
      } else {
        //return accumulator
       return acc;
      }
        },0);//return females
        return females;
}

var oldestCustomer = function(array) {
    //implement _.reduce() to return the oldest customers name
    let old = _.reduce(array, function(acc, current){
        //if the acc age is greater than current age
        if(acc.age > current.age){
            //return acc
            return acc;
        }else {
        //return current
        return current;
        }
    });//return the variable old
    return old.name;
};

var youngestCustomer = function(array){
    let youngin = _.reduce(array, function(acc,current){
        //if the acc aage is less than current age
        if(acc.age < current.age){
            //return acc
            return acc;
        }else{
            //return current
            return current;
        }
    }); //return the variable old
    return youngin.name;
};

var averageBalance = function(array){
    let sum = _.reduce(array, function(acc, current){
        return acc += parseFloat(current.balance.replace(/[$,]/g, ""));
    }, 0)
    return sum / array.length;
};
  
//takes in a array and a letter
//outputs a number
var firstLetterCount = function(array, letter){
    //create a variable that uses reduce to get the first letter count
    let first = _.filter(array, function(customer){
        //determine if customers has  same first letter as input letter
        return customer.name[0].toLowerCase() === letter.toLowerCase();
    })
    return first.length;
};

var friendFirstLetterCount = function(array, customer, letter){
    let friend = _.filter(array, function(customer, index){
        //determine if array has a customer name
        if(array[index].name === customer){
            _.reduce(array, function(acc, current){
                if(current.friends.name[0].toLowerCase() === letter.toLowerCase());
                acc++;
            })
            return acc;
        }
    })
    return friend;
};

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
