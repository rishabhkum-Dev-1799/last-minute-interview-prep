//  Now we have to implement the infinite currying problem which sum(10)(20)(30).....(n)


function sum(a){
    return function (b){
        if (b) return sum(a+b)
        return a 
    }
}

console.log(sum(10)(20)(30)(40)(50)(60)(70)())