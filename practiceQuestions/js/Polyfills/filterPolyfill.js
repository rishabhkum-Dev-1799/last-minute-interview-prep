// This is custom filter polyfill - A most asked javascript question


Array.prototype.customFilter = customFilter


function customFilter(fn){
    //  A new Array needs to be returned
    const updatedArray=[]
    for (let i=0;i<this.length;i++){
        if (fn(this[i],i)){
            updatedArray.push(this[i])
        }
    }
    return updatedArray
}


const someArray=[1,2,3,4,5,6,7,8,9]

console.log(someArray.customFilter((elem)=>elem>3));