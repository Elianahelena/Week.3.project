// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
console.log(ages[ages.length-1] - ages[0]);
ages.push(30);
console.log(ages);


var sum = 0
for (var i = 0; i < ages.length; i++) {
sum = sum + ages[i]
}
average = sum / ages.length

console.log(average)

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var sum = 0
for(let i = 0; i < names.length; i++){
sum = sum += names[i].length;
}
average = sum / names.length

console.log(average)

 let list = ""
for(let i = 0; i < names.length; i++){
    list += names[i] + " ";
}
console.log(list);

// 3.	How do you access the last element of any array? array.length - 1
// 4.	How do you access the first element of any array? Array[0]

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array

let nameLengths = [3, 5, 3, 5, 4, 3];
let length = 0
for(i = 0; i < names.length; i++){
    nameLengths[i] = names[i].length;
}
console.log(nameLengths)

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
var sum = 0
for (var i = 0; i < nameLengths.length; i++) {
sum = sum + nameLengths[i]
}
average = sum / nameLengths.length

console.log(sum)

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


function myFunction(word, n){
var con= word;
    for(i=1; i<n; i++){
        con = con.concat(word);
    }
    return con;
}
console.log(myFunction("Hello", 3));


// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function name(firstName, lastName){
    console.log(firstName + ' ' + lastName)
}
name('Hermione', 'Granger');

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
var isItGreater = [1, 5, 20, 150];
let value = isItGreater.reduce(function(accumulator, currentValue){
return accumulator, currentValue
});
if(value > 100){
    console.log(true);
}

console.log(value);


// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
var numberArray = [1, 3, 5, 12, 17];
let sums = numberArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
});
console.log(sums);

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first 
// array is greater than the average of the elements in the second array.
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
let helpMe = arr1.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
});

if(arr1 > arr2) {
    console.log(true);
} else {
    console.log(false);
}


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true 
// if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if((isHotOutside) && (moneyInPocket > 10.50)){
        return true;
    } else {
        return false;
    }
}
var isHotOutside = true;
var moneyInPocket = 5
console.log(willBuyDrink(isHotOutside, moneyInPocket));

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function shouldIGoOutToEat(isThereFoodAtHome, moneyInBank){
    if((isThereFoodAtHome) || (moneyInBank < 100.00)){
        return false;
} else {
    return true;
}
}
var isThereFoodAtHome = true;
var moneyInBank = 50;
console.log(shouldIGoOutToEat(isThereFoodAtHome, moneyInBank));