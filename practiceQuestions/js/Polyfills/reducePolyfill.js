/**
 * 
 * Question - Create the Custom Polyfill for the reduce function
 * 
 * Explanation - To the reduce function returns the summarized value of array based on the callback function passed
 * 
 * arr.reduce(()=>{},initValue)
 * 1) It takes a callback function
 * 2) An initial value
 *  */


Array.prototype.customReduce=customReduce

function customReduce(fn,optValue){
    let reducedValue = optValue
    for (let i=0;i<this.length;i++){
        reducedValue = reducedValue?fn(reducedValue,this[i]):this[0]
    }
    return reducedValue
}


const someArray=[1,2,3,4,5]

console.log(someArray.reduce((sum,elem)=>sum*elem,10))
console.log(someArray.customReduce((sum,elem)=>sum*elem,10))

