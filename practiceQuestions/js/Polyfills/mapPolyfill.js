// This is code snippet to create the custom map polyfill

Array.prototype.customMap = customMap


function customMap(fn){
    // map returns the custom array -RK
    const updatedArray =[] 
    for (let i=0;i<this.length;i++){
        updatedArray.push(fn(this[i],i))
    }
    return updatedArray
}

const someArray=[1,2,3,4,5,6]
console.log(someArray.customMap((elem)=>elem*2))