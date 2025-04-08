/**
 * Observable patterns- Its one of the most used pattern . Where we can  subscribe a observer to another object called observable and that observable can notify all its subscribed observer
 * 
 * The observable has 3 following important parts
 * -Observer - The list of the observers
 * - subscribe(obs)- this function will add new observer 
 * - unsubscribe(obs) - this function will remove provided observer from the list observers
 * -notify(data)- this is function will invoke all the observer with the data provided
 */

class Observable{

    constructor(){
        this.observers=[]
    }
    
    subscribe(func){
        this.observers.push(func)
    }

    unsubscribe(func){
        this.observers=this.observers.filter((observer)=>observer!==func)
    }

    notify(data){
        this.observers.forEach((observer)=>observer(data))
    }
}

// Below is the implementation of the observer where we subscribe two functions and then call them using notificatins

function datelogger(data){
    console.log(`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,data)
}

function timelogger(data){
    console.log(new Date().getTime(),data)
}

// Creating new observable 
const observable = new Observable();
// subscribing these above datalogger function
observable.subscribe(datelogger);
observable.notify("Some Random Data")

// subscribing timelogger function
observable.subscribe(timelogger);
observable.notify("Some Another Random Data");

// Unsubscribing the Date Logger function
observable.unsubscribe(datelogger)
observable.notify("Some another another Random Data");
