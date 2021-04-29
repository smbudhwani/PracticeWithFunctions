console.log("Let's try out our JavaScript Skills!");


//1. Write code in the body of each function so that:
    // * `add` returns the result of `num1` plus `num2`.
    // * `subtract` returns the result of `num1` minus `num2`.
    // * `multiply` returns the result of `num1` times `num2`.
    // * `divide` returns the result of `num1` divided by `num2`.

    //Check all your work with console.log() so the answers are displayed in the browser!
    // ** BONUS ** convert all of these into Arrow Functions

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1/num2;
};
const divide1 = (num1, num2) => num1/num2;


//2. Write a FUNCTION to print each item in the following array to the console

const fruits = ['Apple', 'Banana', 'Pear', 'Strawberry', 'Canteloupe'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//3. This one has three steps, use Javascript Array methods for each part (try w3Schools for help)

let planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];

// Use an array method to remove "Venus" from the planets array, then print the changed array to the console
planets.pop();
// console.log(planets);
// Use an array method to add "Mercury" to the beginning of the planets array, then print the changed array to the console
planets.unshift('Mercury');
// console.log(planets);

// Use an array method to join the following array with the planets array, then print the new array to the console
let morePlanets = ["Pluto", "Neptune"];

const array1 = morePlanets.concat(planets);
// console.log(array1);


//4. Write code within the body of the following function to print all positive numbers from 1 to `num`, and console.log the result. (Hint: when you call this function to test it, don't forget to pass in a positive number as an argument)

const logNums = num => {
    if (Math.sign(num) > 0) {
        for (let i=1; i < num+1; i++){
            console.log(i);
        }

    }
    else { alert ('it\'s a negative number')
        }
    
}
// console.log(logNums(-6));
/*5. Create a function that accepts two parameters, num1 and num2. 
If num1 is greater than num2 print "First one wins!", 
if num1 is equal to num 2 print "It's a draw!", 
if num1 is less than num2 print "Second number prevails!".
 Test the function three times so each condition is met successfully.*/

 const ourFunc = (num1, num2) =>{

    if( num1 > num2 ){
        console.log('First one wins!');
    }
    else if( num1 === num2 )
    {
        console.log("It's a draw!");

    } 
    else {
        console.log("Second number prevails!");
        }
}
console.log(ourFunc(6,6));
console.log(ourFunc(5,6));
console.log(ourFunc(7,6));

//Bonus Challenge!
/*Write code inside the following function that accepts a string and returns `true` 
if the string is a palindrome, and `false` if the string is not a palindrome.
// --- A Palindrome is a word that is spelled the same way forwards and backwards ---
//Examples of palindromes = mom, dad, level, radar
// Hint: you can use multiple javascript array methods chained together,
 check w3schools for ideas
*/
const isPalindrome = (stringInput) => {
//write code here
let splitString = stringInput.split(""); 
// ["h", "e", "l", "l", "o"]
console.log('SplitString is ' + splitString);
// Step 2. Use the reverse() method to reverse the new created array
var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
// ["o", "l", "l", "e", "h"]
console.log('reverseArray is ' + reverseArray);
// Step 3. Use the join() method to join all elements of the array into a string
var joinArray = reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
// "olleh"
console.log('joinArray is ' + joinArray);
if (joinArray === stringInput) {
    console.log('correct');
    return true;
}
else {
    console.log('incorrect');
    return false;
};
//Step 4. Return the reversed string
//return joinArray; // "olleh"
    
};

isPalindrome("racecar"); //expects true
isPalindrome("elephant"); //expects false
