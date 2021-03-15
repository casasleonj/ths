'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700


// const getBudgets = (arr) => {
//   // let iar = arr.length
//   let i;
//   let tracker = 0
//   for( i of arr ){
//     //destructuring an object
//     // let {budget} = i;
//     //
//     tracker += i.budget
//   }
//   return tracker
// }

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])) //➞ 65700

// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])) // ➞ 62600

// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// Examples
// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

// totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

// totalVolume([1, 1, 1]) ➞ 1
// Notes
// You will be given at least one box.
// Each box will always have three dimensions included.

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));

// const totalVolume=(...args)=>{
//   let i;
//   let j;
//   let temp;
//   let cont = 0
//   for(i of args){
//     temp = 1

//     for(j of i){
//       temp *= j
//     }
//     cont += temp
//   }
//   // return cont
//   console.log(`Total Volume is ${cont}`)
// }
// console.log(totalVolume([1, 2, 3], [1, 2,3]));
// totalVolume([2, 2, 2], [2, 1,1]); // 10


// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) //➞ 63

// totalVolume([2, 2, 2], [2, 1, 1]) //➞ 10

// totalVolume([1, 1, 1]) //➞ 1



// Check if every value of two arrays are equal

// const equalArray = (arr, arr1)=>{
//   let l = arr.length
//   let i;
//   for(i = 0 ; i <= l ; i++){
//     if(arr[i] !== arr1[i]){
//       return false
//     }
//   }
//   return true;
// }

// Example
// console.log(equalArray([1,2,3],[1,2,3]))// =>true
// console.log(equalArray([1,5,3],[1,5,4])) //=>false

function getLetter(s) {
  // let s = readLine()
  let letter;
  // Write your code here
  switch(s){
      
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      console.log("A")
      break;
      case 'b':
      case 'c':
      case 'd':
      case 'f':
      case 'g':
      // return "B"
      console.log("B")
      break;
      case 'h':
      case 'j':
      case 'k':
      case 'l':
      case 'm':
      // return "C"
      console.log("C")
      break;
      case 'n':
      case 'p':
      case 'q':
      case 'r':
      case 's':
      case 't':
      case 'v':
      case 'W':
      case 'x':
      case 'y':
      case 'z': 
      // return "D"
      console.log("D")
      break;
      
  }
  return letter;
}

console.log(getLetter("adfgt"))