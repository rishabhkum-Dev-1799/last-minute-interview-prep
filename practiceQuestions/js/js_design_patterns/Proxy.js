/**
 * 
 * In this File we will be learning about the proxy design patterns .
 * Proxy design Pattern - 
 * As the name suggest this pattern is generally used to connect with a object via some other function , the best example of the proxy pattern is the getters and setters function . They provide a abstracted layer to get connected with the actual object.
 * 
 * Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, you’ll speak to the proxy person who will represent the person you were trying to reach. The same happens in JavaScript: instead of interacting with the target object directly, we’ll interact with the Proxy object.
 * 
 * 
 * NOTE - JAVASCRIPT HAS INBUILT PROXY OBJECT WHICH HELPS US TO IMPLEMENT THE PROXY PATTERN 
 * 
 * Proxy(object,handlers)
 * 
 * handlers are bunch of functions which are exposed to manipulate the actual object m the most common and most used are 
 * get and set functions
 * 
 * - The Proxy patterns are generally used for the checking before inserting , error handling etc 
 * 
 * Lets see the below example of Proxy
 */

const person = {
    name:'Rishabh',
    age:20,
    sex:'Male',
    uid:'1231293484940'
}

// so we can create a Proxy function which blocks user to change the uid  and also should only return the property which is present in object and should check the age should be Int literal

const personProxy=new Proxy(person,{
    get:(obj,prop)=>{
        if (Object.hasOwn(obj,prop)){
            return obj[prop]
        }else{
            throw Error(`The propery ${prop} is not present`)
        }
    },
    set:(obj,prop,value)=>{
        if (prop==='age'&& typeof(value)!=="number"){
            throw Error('The Property age should only be number')
        }else if (prop==='uid'){
            throw Error('Oops! you cannot set the uid property')
        }else{
            obj[prop]=value
        }
    }
})
console.log(personProxy.name);
personProxy.age=2323
console.log(personProxy.age);
personProxy.uid='123123123';
