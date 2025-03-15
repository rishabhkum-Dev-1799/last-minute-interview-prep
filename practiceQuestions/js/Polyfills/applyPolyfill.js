// In this we will be creating the apply polyfill

Function.prototype.customApply = function(context={},args=[]){
    if(typeof this !== "function"){
        throw Error("This is not callable")
    }
    context.fn=this
    context.fn(...args)
};


const obj={
    name:"Rishabh",
    age:23
}
const obj2={
    name:"Abc",
    age:35
}

function abc(){
    console.log(`${this.name} ${this.age}`)
}

abc.customApply(obj)
abc.customApply(obj2)

