/**
 * Create the custom Polyfill for the bind method.
 * The bind method returns the new function whose this is refernced to object we pass
 * 
 * 
 */


Function.prototype.customBind=function(context={}){
    if(typeof this !=="function"){
        throw Error ("this is not callable")
    }
    context.fn=this

    return function (...args){
        return context.fn(...args)

    }
}


const obj={
    name:"Rishabh",
    age:23,
    ab:function(){
        console.log(this)
    }
}

obj.ab();


// const obj2={
//     name:"Abc",
//     age:35
// }

// function abc(){
//     console.log(`${this.name} ${this.age}`)
// }

// const b1=abc.customBind(obj)
// const b2=abc.customBind(obj2)


// b1()
// b2()

