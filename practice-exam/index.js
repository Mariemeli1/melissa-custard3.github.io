// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time){
    //concatenate inputs using template literals
    var sentence = `${greeting} ${location} ${time}`
    //log sentence to console
    console.log(sentence);
};



// 2.
var contestants = function(){
    //return length of dog contestants
    return dogs.length;
};



// 3.
var filterSpecies = dogs.filter(function(current){
    return current.species === 'dog';
})




// 4. 
var dogContestants = [...filterSpecies];



// 5. 
var dogsWithClasses = dogContestants.map(function(current){
    //if dogs weight is between 0 and 10
    if(current.weight < 11){
        //create a class of red
        current.class = 'red'
    }
    //if dogs weight is between 11 annd 20
    else if(current.weight < 21){
        //create a class of yellow
        current.class = 'yellow'
    }else {//else dogs weight is 21 and over
        //create a class of green
        current.class = 'green'
    }
    return current;
});
    


// 6.
var firstInClass = function(array, output={}){
    //base
    if(array.length === 0){
        //return output
        return output;
    }
    //recursive
    //use object.assign to assign the first index of array into output object
    Object.assign(output, array[0]);
    //slice the array at each iteration
    return firstInClass(array.slice(1), output);
}



// 7.
var votes = dogs.reduce(function(acc, current){
    //return acc with current votes added and assigned to it
    return acc += current.votes
}, 0);//seed value 0