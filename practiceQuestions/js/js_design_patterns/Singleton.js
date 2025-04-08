// Singleton Pattern - In this file we will learn all things about the singleton Design patterns
/**
 * 
 * Singleton Design Patterns - This Design pattern talks about  a class of which only a  single instance of a class can be instantiated and that instance would be referenced all through out the code . 
 * 
 * Generally used for 
 * - DB object 
 * - Api Services
 * - Injectable services 
 */

// Below is the example of the singleton classt
let instance;
let counter=0

class SingletonCounter{
 
    constructor(){
        if(instance){
            throw Error("Only one instance can be created")
        }
        instance=this
    }
    getinstance(){
        return this
    }

    increment(){
        counter++;
    }

    decrement(){
        counter--
    }

    getCounter(){
        return counter
    }
}

const counter1= Object.freeze(new SingletonCounter());
// const counter2= new SingletonCounter();

counter1.counter=20 // cannot change the property as the object is freeezed
counter1.increment() 
counter1.increment() 
counter1.increment() 
counter1.increment() 
counter1.increment() 
console.log(counter1.getCounter())// Two different singleton