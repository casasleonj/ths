// Write a program to Check the given input whether Even or odd
// function evo(num){
//   if(num%2===0){
//    return num + " Odd"
//   }else {
//     return num + " Even"
// }
// }
// console.log(evo(2))

/* 
Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of
the number and for the multiples of '5' print "Buzz". If its multiple of both 3 and 5, print “FizzBuzz
 */

//  var count= 0
//  var t = 3
//  var c = 5
//  while(count<100){
//    count++
//  if(count%t===0 && count%c===0){
//   console.log("FIZZBUZZ " + count)
//  }  else if(count%t === 0){
//       console.log("Fizz " + count)
//     } else if(count%c === 0){
//         console.log("Buzz " + count)
//       }
// }

//Write a program to check whether a number is a positive number or a negative number?
// function some(num){
//   if(num > 0){
//     return "the number is positive"
//   }else if(num < 0){
//     return "the number is Negative"
//   }
// }
// console.log(some("hi"))
// Write a program to check whether the given character is vowel or consonant 

// var char = "l"

// switch(char){
//   case "a":
//     console.log('This is the vowel a')
//     break
//   case "e":
//     console.log('This is the vowel e')
//     break
//   case "i":
//     console.log('This is the vowel i')
//     break
//   case "o":
//     console.log('This is the vowel o')
//     break
//   case "u":
//     console.log('This is the vowel u')
//     break
//     default:
//       console.log("This should be a consonant")
// }


//Write a program to Check Whether the given year is a leap year or not 

// function leap_year(num){
//   return (num%4 === 0 || num%400 === 0)? `YES year ${num} is a leap year` : `NOP ${num} is not a leap year`
// }
// console.log(leap_year(1937))
// Write a program to find the largest number among the three numbers ?

// function comp(n,u,m){
//   if(n > u && u > m){
//     return `${n} is the largest number`
//   }else if(m > u && u > n){
//     return `${m} is the largest number`
//   }else {
//    return `${u} is the largest number`
//   }
// }
// console.log(comp(1243,5234,1249))

/*
 Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd
Numbers. 
1 - list all numbers < N
2 - 
*/
// Write a function that takes n and option as paramter. The n will define how many odd or even numbers will be generated a
// and option will define if it is odd or even number

// evenOrOdd(10,"even")
// evenOrOdd(10,"odd")

// var n = 20
// var ev = "Even"
// var od = "Odd"

// function eod(n, ev){
//   for(var i = 0; i < n; i++){
//     if(i%2 === 0 && ev == "Even"){
//       console.log(i )
     
//     }else if(i%2 === 1 && ev == "Odd"){
//       console.log(i )
//     }
//   }
// }
// console.log(eod(n, ev))


// var n = 10
// var ev = "Even"
// var od = "Odd"

// function eod(n , ev){
//   for(var i = 1; i < n * 2; i++){
//     if(i%2 === 0 && ev == "Even"){
//       console.log(i)
//       // return 1
    
//     }else if(i%2 === 1 && ev == "Odd"){
//       console.log(i)
//       // return 1
//     }
//   }
// }
// console.log(eod(n, od))







// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// var pr = 2;
// for(var i = 1; i <= 10 ; i++){
  
//   console.log(`${pr} * ${i} = ${pr * i} `);
// }

// Using two for loops, calculate a multiplication table from 2 to 20
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12


// Problem statement 
// Create a program to create a multiple from 2 to 20 until 10.

// Example
// 2 * 1 = 2 
// 2 * 2 = 4
// ...
// 2 * 10 = 20
// 3 * 1 = 3
// ...
// 3 * 10 = 30

// for(var i = 1; i <= 10 ; i++){
//   for(var j = 1; j <= 10 ; j++){
//     console.log(`${i} * ${j} = ${i*j}`)
//   }
  
// }


// *
// **
// ***
// ****
// *****
// ******

// var star = "*"

// for(var i = 0; i < 10; i++){ 
// console.log(star)

//   star += "*"
// }

//   console.log(star)
// Write a program to find the Sum of Array Elements.

// var arr =[1,2,3,4]
// 10

// function suar(arr){
//   var count = 0
//   for(var i = 0; i < arr.length; i++){
//    count += arr[i]
//   }return count
// }
// console.log(suar([1,2]))

// Write a program for swapping of two arrays

// swap(a,b)
// b = [1,3,4]
// a=[2,3,4]


// Step1 Loop through the array length
// Step2 Create a temp variable inside of the loop
// Step3 Swap two number using temp variable for all the array value



// function swap1(a,b){
//    var c= b.length>a.length?b.length:a.length
  
//   for(var i = 0; i<c ; i++){
//     var temp = a[i]
//     a[i] = b[i]
//     b[i] = temp
//   }
//   while(a[a.length-1] ==undefined){
//       a.pop()
//   }
//   while(b[b.length-1] ==undefined){
//     b.pop()
// }
//   console.log(a)
//   console.log(b)
  
// }
// console.log("original array")
// console.log(swap1([1,2,3,5,6,7,8,9,10],[2,3,4,5]))
// console.log(swap1([4,3,2,1],[6,7,8,9]))




// function swap(x,y){ 
// //   var c = a.slice()
// //   var d = b.slice()
// //   a=d
// //   b=c
//   for(var i = 0; i < x.length; i++){
//     // var temp = d.push(c.pop)
    
    

//     console.log(c)
//   }
//   return [x,y]
// }
// console.log(swap())
// console.log(a)
// console.log(b)


//Write a program to find the maximum number in an array using the function?
// variable to count
//iterate
// save the arr[i] values into counter
// the value in counter is > to arr[i]? if its 

// function muy(arr){
//   let counter = 0
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > counter){
//       counter = arr[i]
      
//     }
//   }
//   console.log(counter)
// }


// muy([1,2,9,7]) // 9
// muy([3,10,9,7]) // 10
// muy([12,10,9,7]) // 12
// muy([12,10,9,13]) // 13
// function max(array){
//   for( var i = 0; i < array.length; i++ ){
//     var temp = 0
//     console.log(array[i])
//   }
// }
// console.log(max([1,2,3,4])) // -> 4
// console.log(max([6,2,3,4])) // -> 6


// // Write a program that returns a array of unique values from non-unique input
// // Example [1,2,3,3,4,4,5,5,5,5,5] => [1,2,3,4,5]
// // [2,3,3,4,4,5,6,6,7,7,7] => [2,3,4,5,6,7]
// // ["Jhonnatan","Jhonnatan","Jhonnatan","Jhonnatan"] = ["Jhonnatan"]

// continue
// ! not operator
function uniqueArray(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
      var a = newArray.includes(arr[i])
      if( !a ){
        newArray.push(arr[i])
      }
      console.log(a);
        
      }
      
    console.log(newArray);
  }
  
//   uniqueArray([1, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5]);

// Write a program to print out first 20 fibonacci sequence
// 0 1
// 1 2
// 3 5
// 8 13
// 21 34 

// Make two variables that contains 0 and 1
// Make a temp variable that adds two numbers
// Swap the value of those two variables on every loop using temp


// 0 1 1 2 3 
// function fibo(num){
//   let track = 0  ;
//   let other = 1
  
//   for(let i = 0; i <= num; i++){
//     if(track < 40){
//       console.log(track)
//     }
   
//     let temp = track + other
//     track = other
//     other = temp
//   }
// }
// fibo(10)
// // fib number less 40

//Write a program to find Mean(average) of given Array Elements

// console.time("Hi")
// function av(arr){
//   let cont = 0
//   let i;
//   let len = arr.length 
//   for( i = 0; i < len; i++){
//     cont += arr[i]
//   }
//   let ave = cont/arr.length
//   return ave
// }
// // console.timeEnd("Hi")

// // console.time(av([1,2,3,4])) // 2.5)
// console.log(av([3,4,5,6])) // 4.5
// av([12,10,9,7]) // 9.5
// av([12,10,9,13,14]) // 11.6


// Problem Statement 1
// Create a function that takes two numbers as arguments (num, length) and returns 
//an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

// function jum(num, len){
//   let arr = []
//   let i;
//     for(i = 1; i <= len; i++){
//       arr.push(num * i)
//     }
//     console.log(arr)
// }



// jum(7, 5) //➞ [7, 14, 21, 28, 35]
// jum(12, 10) //➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// jum(17, 6) //➞ [17, 34, 51, 68, 85, 102]


// Problem Statement 2
// How Much is True?
// Create a function which returns the number of true values there are in an array.
// Examples
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// function countTrue(arr){
//   let i;
//   let l = arr.length
//   let cont=0;
//   //for of loop
//   for(i = 0; i < l; i++){
//     if(arr[i] === true){
//       cont++
//     }
//   }
//   return cont
// }

// console.log(countTrue([true,true])) //➞ 2
// console.log(countTrue([false, true, false, true])) //➞ 1
// console.log(countTrue([])) //➞ 0


// Problem Statement 3
// Adding Parity Bits
// Parity bits are used as a very simple checksum to ensure that binary data isn't 
// corrupted during transit. Here's how they work:
// If a binary string has an odd number of 1's, the parity bit is a 1.
// If a binary string has an even number of 1's, the parity bit is a 0.
// The parity bit is appended to the end of the binary string.
// Create a function that adds the correct parity bit to a binary string.
// Worked Example
// addParityBit("1011011") ➞ "10110111"
// There are five 1's.
// Since five is odd, the parity bit should be a 1.
// Add the parity bit to the end of the string.
// Return the result.
// Examples
// addParityBit("0010110") ➞ "00101101"
// addParityBit("1100000") ➞ "11000000"
// addParityBit("1111111") ➞ "11111111"
// Notes
// All inputs will be 7-bits long (so that the parity bit makes it a full byte)

// function addParityBit(str){
//   let i;
//   let other= str.split('')
//   let l = other.length
//   // console.log(other)
//   let cont = 0
//   for(i=0;i < l; i++){
//     // console.log(typeof other[i])
//     if(+other[i] === 1){
//       cont++
//     }  
//   }
//   if(cont%2===0){
//     other.push("0")
//   }else{
//     other.push('1')
//   }
//   // console.log(cont)
//   console.log(other.join(""))
//   // return true
// }

// console.log(addParityBit("0010110")) //"00101101"
// console.log(addParityBit("0010110")) //"00101101"
// addParityBit("111100000") //➞ "11000000"
// addParityBit("1111111") ➞ "11111111"

// const reverse = (name) => {
//   let i;
//   let na = name.split('')
//   let arr = []
//     for(i = na.length; i >= 0;i--){
//       console.log(na[i])
//     } 
//   }
  
const reverse = (name) => {
  let i;
  let na = name.split('')
  let arr = []
  let copy = na.slice()
  
    for(i = 0; i < na.length;i++){
      arr.push(copy.pop())
    }
    return arr.join('')
  }

  module.exports = reverse

// console.log(reverse('Jhonnatan'))// natannohJ

// Factorial 

// function fact(num){
//   let i;
//   let cont = 1
//   for(i = num; i > 0; i--){
//     cont *= i
//   }
//   return cont
// }
// console.log(fact(4))//24

// 11/03/2021