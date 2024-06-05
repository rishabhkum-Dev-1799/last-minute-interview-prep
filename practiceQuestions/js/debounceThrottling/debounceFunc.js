/**
 * Create the Custom Debounce Function Wrapper to handle the debouncing4
 * Statement - Debouncing is the Performance Optimization Technique to only trigger the function after the certain delay time ,which is calculated from the last user submit event
 * 
 */

/**Solution for the Debounce Functions */
function customDebounce(func,delay){
    let timerId;
    return function(...args){
        if(timerId){
            clearTimeout(timerId)
        }
        timerId = setTimeout(()=>{
            func(...args)
        },delay)
    }
}

// Random Function to Test the Debounce Function
function testFunc(){
    console.log("Debounced Function Called")
}
const debouncedWrappedFunc = customDebounce(testFunc,1000)
debouncedWrappedFunc()
debouncedWrappedFunc()
debouncedWrappedFunc()
debouncedWrappedFunc()

