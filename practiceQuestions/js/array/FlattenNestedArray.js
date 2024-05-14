// In this Question you need to flatten the Array 
const arr= [1,2,3,[5,6,7,8,9],[[10,11]]] // flatten This Array into normalize manner 
const flattenArray = []

// using of the recurrsion and the insertion method
function flattenArrayFunc(originalArr,flattenArray){
	originalArr.forEach((elem)=>{
		if(Array.isArray(elem)){
			flattenArrayFunc(elem,flattenArray)
		}
		else{
			flattenArray.push(elem)
		}		
	})
}

// Much Better Approach using only Orginal Array
function flattenArrayOptimized(originalArr){
	let result = []
	originalArr.forEach((elem)=>{
		if (Array.isArray(elem)){
			result.push(...flattenArrayOptimized(elem))
		}
		else {
			result.push(elem)
		}
		return result;
	})
}

flattenArrayFunc(arr,flattenArray)
// Printing the Flattend Array
console.log(flattenArray)
