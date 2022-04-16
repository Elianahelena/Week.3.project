// Recap: Write a loop that will prompt the user 3 times 
// and store the response in an array and console.log or alert
//  the answers when the loop is done

// const questions = [
//    "What is your name?");

//     "What is your favorite color?", 
//     "What city are you in?"
// ];
// const answers = [];

// for(let = 0; i < 3; i++){
//     const answer = prompt(questions[i]);
//     answers.push(promptAnswer);
// }

// alert(answers)



// =====================

// Write a function that takes in an the num Array.
// Remove all the odd number and multiply the rest by 3.
// Return the first number in the array

// const num = [2,5,9,10,23];
// // function getNum = [numAry]{
// // for(var i = 0; i < num.length; i++)
// // if(num % 2 === 0){
// //     num = num * 3;
// // }
// // getNum();
// function getNum(numAry){
//     const noOddNum = numAry.filter(function(number){
//         return number % 2 === 0
// });
// const multiNum = noOddNum.map(functon(number){
//     return number * 3
// });

// return multinum[0]

// console.log(getNum(num))




// ===================

// Create a function that will convert a Celsius to Fahrenheit and another 
// that will convert Fahrenheit to Celsius

// The function should take in a number and run the formula and return the converted temp

// To convert C to F: Divide by 5, then multiply by 9, then add 32
// To convert F to C: Deduct 32, then multiply by 5, then divide by 9
function convertTemp(farenheit){
   var celcius = ((farenheight - 32)*5)/9;
}
console.log(convertTemp(farenheight));

//   ========================

// Write a function to find the longest word in the array

// var words = ["cat", "pizza", "javascript"]
// function longestWord(wordsAry){
//     let currentWord = '';
//     wordsAry.forEach(function(word){
//         if(currentWord.length < word.length){
//             currentWord = word
//         }
//     })
//     return currentWord;
// }
// console.log(longestWord(words))
// var longest = 0;
// for(var i = 0; i < words.length; i++){
//     if (longest.length < words[i].length
//         longest = words[i];
//     }

// }
// console.log(longest)


// =============================

// Write a function that will take a word and/or sentence and remove all of the vowels
// and returns a new string with no spaces (please account for upper and lower case letters)
// ex: 'The Batman' should return 'thbtmn'
function vowelCheck(word){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const wordAry = word.toLowerCase().split('').filter(function(letter){
        return letter !== ' ';
    });
    const noVowels = wordAry.filter(function(letter){
        return !vowels.includes(letter)
    });
    return noVowels;
    
}
console.log(vowelCheck('The Batman'))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split