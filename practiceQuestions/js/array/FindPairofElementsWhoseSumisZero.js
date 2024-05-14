//we need to find first pair whose Sum is zero 
const array = [1,2,3,4,-4,-3,-2,0]

function findPairWithZeroSum(arr){
    const numSet = new Set(arr);
    for (let num of arr){
        if (numSet.has(-num)){
            return [num,-num]
        }
    }
    return null
}

const pair=findPairWithZeroSum(array);
if(!pair) console.log('No Pair with Zero Sum founded');
else console.log("Pair with Zero Sum are",pair)

