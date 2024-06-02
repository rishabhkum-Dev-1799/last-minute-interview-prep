/** What are the ways in which we can empty the single array without creating new array reference */

// Method One 1 making the length of the Array to Be Zero
const arr=[1,2,3,4,5,6,7,8]
arr.length=0
console.log(arr)

//  Method Two using the splice method to empty the array 
const arr1 = [1,2,3,4,5,6,7,8,9]
arr1.splice(0,arr1.length)
console.log(arr1)

//  Method Three using the pop method using the while loop 
const arr2 = [1,2,3,4,5,6,7,8,9,10]
while(arr2.length>0){
    arr2.pop();
}
console.log(arr2);


//  The Best way to  empty the array is method 1 and method 2 