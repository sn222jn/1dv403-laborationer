"use strict";

var makePerson = function (persArr) {
    var result = {};
    var names = [];
    var age = [];
    var minAge;
    var maxAge;
    var averageAge;
    var tmp;
    var sum = 0;
    var numericExpression = /^[0-9]\d*$/;
    var dateFormat = /^\d{4}-\d{2}-\d{2}$/gi;

    persArr.forEach(function (input) {
        age[age.length] = persArr[age.length].age;// Copies each age entry in persArr to age array

        names[names.length] = persArr[names.length].name; // Copies each name entry in persArr to names array

        sum += age[age.length - 1];
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

