const reverseMyString = require("./labs")
// Create a function that takes a positives integers value and returns a binary representation

// Using for loop
// const DR = (n) => {
//   let i;
//   let remainder = 0
//   let cont = ""
//   for( i = n; i > 0; ){
//     // remainder
//     remainder = i%2
//     i = Math.floor(i/2)
//     cont += remainder

//   return reverseMyString(cont)
// }


// console.log(DR(5)) // 101
// console.log(DR(22)) // 10110
// console.log(DR(6)) // 110

// Using While loop
// const decToBin = (int) =>{
//   let i = int
//   let remainder = 0
//   let cont = ''
//   while(i > 0){
//     remainder = i%2
//     i = Math.floor(i/2)
//     cont += remainder
//   }
//   return reverseMyString(cont)
// }
// console.log(decToBin(5)) // 101
// console.log(decToBin(22)) // 10110
// console.log(decToBin(6)) // 110
// // 

// Using do while loop
const decToBin = (int) =>{
  let i = int
  let remainder = 0
  let cont = ''
  do {
    remainder = i%2
    i = Math.floor(i/2)
    cont += remainder
  }while(i > 0)
  return reverseMyString(cont)
}
console.log(decToBin(5)) // 101
console.log(decToBin(22)) // 10110
console.log(decToBin(6)) // 110