/**
 * In this task you need to create the throttle wrapper 
 * Statment - Throttling is the performance optimization techinique which limits the the number of time function is called instead of calling the function event for each event trigger , using throttling we can trigger the function at given interval of time
 */

function customThrottleFunction(func,interval){
    let lastCalled = 0;
    return function(...args){
        const now = new Date().getTime();
        if (now-lastCalled<interval) return
        lastCalled=now
        return func(...args)
    }
}

function con(){
    console.log("Throttle Function Runned")
}

const throttledCon =customThrottleFunction(con,100)

let i = 0
while(i<100000){
    throttledCon();
    i++;
}