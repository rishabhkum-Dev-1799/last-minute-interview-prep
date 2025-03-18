/**
 * This is generally the question which is asked by the interviewer what is difference between the splice and slice
 * 
 * Both slice and splice is used to get the sub part of the array but the
 * The main difference between slice and splice is 
 * - Splice - Modifies the original array on which it is being used , it returns the spliced Array  and also modifies the original array .
 * - Slice - Creates and Returns the new Array and doesnt modify the actual array
 * 
 * Lets see the example one by one
 */

// Slice example
const someArr=[1,2,3,4,5,6]
const slicedArray=someArr.slice(0,3)
console.log(slicedArray) // sliced array
console.log(someArr) // Original one remains the same

// Splice Example
const someArr2=[1,2,3,4,5,6]
const spliceArr=someArr2.splice(0,3)
console.log(spliceArr)
console.log(someArr2)



