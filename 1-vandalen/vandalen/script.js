"use strict";

var makePerson = function (persArr) {
    var result = {};
    var names = [];
    var age = [];
    var minAge;
    var maxAge;
    var averageAge;
    var sum = 0;

    persArr.forEach(function (input) {


        age[age.length] = persArr[age.length].age;// Copies each age entry in persArr to age array

        sum += age[age.length - 1]; // Add all entries in age array

        if (typeof (sum) !== "number") {
            throw new Error("Åldern måste vara ett nummer!");
        }

        names[names.length] = persArr[names.length].name; // Copies each name entry in persArr to names array

        //if (typeof (persArr[names.length].name) !== "string") {
        //    throw new Error("Namnet måste vara en sträng!");
        //}
    })
    result.averageAge = Math.round(sum / age.length); // Calculates average and assigns it to result.averageAge
    result.maxAge = Math.max.apply(Math, age); // Gets highest age and assigns it to result.maxAge
    result.minAge = Math.min.apply(Math, age); // Gets lowest age and assigns it to result.minAge

    names.sort(function (a, b) { // Sorts names in alphabetical order 
        return a.localeCompare(b);
    });
    result.names = names.join(", "); // Joins array values and returns a string (in this case also with a comma and space)
    return result;
};
var data = [{ name: "John Häggerud", age: 37 }, { name: "Johan Leitet", age: 36 }, { name: "Mats Loock", age: 46 }];

var result = makePerson(data);

