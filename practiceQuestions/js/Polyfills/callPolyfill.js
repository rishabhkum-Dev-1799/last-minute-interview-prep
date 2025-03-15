// Write the Custom polyfill for the call function


Function.prototype.customCall=function(context={},...args){
    if(typeof this !=="function"){
        throw Error("this is not callable")
    }

    context.fn=this
    context.fn(...args)
}


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

abc.customCall(obj)
abc.customCall(obj2)