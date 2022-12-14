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
    let num = _.reduce(array, function(acc, current){
        // assign acc to parsefloat that returns a number and use replace to replace $ and ,.
        return acc += parseFloat(current.balance.replace(/[$,]/g, ""));
    }, 0)//seed value of 0
    //return that number divided by the length of the array to geth the balance 
    return num / array.length;
};
  
//takes in a array and a letter
//outputs a number
var firstLetterCount = function(array, letter){
    //create a variable that uses filter to get the first letter count
    let first = _.filter(array, function(customer){
        //determine if customers has  same first letter as input letter
        return customer.name[0].toLowerCase() === letter.toLowerCase();
    })//return length of first
    return first.length;
};

var friendFirstLetterCount = function(array, cust, letter){
        //create a count variable
        var count = 0;
        //loop through customers array
        for(let i = 0; i < array.length; i++){
        //determine if array has a customer name
            if(array[i].name === cust){
            //filter through the customer friends array to find customers friends with the input letter
           var friend = array[i].friends.filter(function(current){
                //determine if current customer has a friend with the same 1st letter as input letter
                    if(current.name[0].toLowerCase() === letter.toLowerCase()){
                //increment count variable
                        count++;
                    }
                })
                //return count
                return count;
            }
        }
    
    //return friend.length
    return friend.length;
};

var friendsCount = function(array, name){
    let filtered = array.filter(function(customer){
        //iterate through customers friends array
        for(let i = 0; i < customer.friends.length; i++){
        //determine if customer friends array contains the input friend
        if(customer.friends[i].name === name){
            //return true
            return true;
        }
       }
       //return false
       return false;
       //map through filtered usinga method chain
    }).map(function(customer){
        //return customers name
        return customer.name;
    });
    //return filtered
   return filtered;
};
//npm start --prefix ./melissa-custard3.github.io/projects/let-s-get-functional

var topThreeTags = function(array){
    //create an empty array to later collect every tag in 
    var tag = [];
    //iterate through input array
    for(let i = 0; i < array.length; i++){
        //iterate through tags
        for(let m = 0; m < array[i].tags.length; i++){
            //push in tags into tag array
            tag.push(array[i].tags[m]);
        }
    }
    //create empty object
    var obj = {};
    //determine if tag exists in object as a key
    if(obj[tag]){
        //if it does increment by 1
        obj[tag] += 1;
    }else {//else
        //assign it the value of 1
        obj[tag] = 1;
    }
};

var genderCount = function(array){
    let gender = array.reduce(function(acc, curr){
        //determine if object (acc) has a key of gender
        if(acc[curr.gender]){
            //increment that gender key by 1
            acc[curr.gender] += 1;
        } else{//else
            //assign that key of gender to 1
            acc[curr.gender] = 1;
        }//return acc
        return acc;
    }, {});//seed value of 0
    //return gender
    return gender;
};

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
