/** Here we have the task to create your own Polyfill for the Promise.allSettled
 * 
 * Brief Statement About the Promise.allSettled is whether the promise rejects or fullfills it completes all the Promises and return the results of each promise in an array of object where each object has two keys value and status
 * 
 * One Learning from which is that then takes two parameters
 * then(onFullfilled,onRejected)
 */

/**Solution 1 - Our Function should return a Promise with Promise All Generic One Not Required */
function customAllSettled(promises){
    // Promises should be array of promises
    const promisesList = promises.map((p)=>Promise.resolve(p)
    .then(
        val=>({status:'fulfilled',value:val}),
        error=>({status:'rejected',reason:error})
    ))
    return Promise.all(promisesList)
}

/**Solution 2 - Creating the Promise.allSettled polyfill with Promise.all polyfill usage  - Pending*/

function customPromiseAllSettled(promises){
    return new Promise((resolve,reject)=>{
        const promiseFullFilledList=[]
        let promiseFullFilledCount=0
        
        if (promiseFullFilledCount===promises.length){
            console.log("FulFilledList is ------->",promiseFullFilledList)
            resolve(promiseFullFilledList)
            return 
        }
        function resolutionFunction(index,status,value){
                //  This is returning the resolved promise in the same order which was initially passed in the array
                promiseFullFilledList[index]={status:status,[status==='rejected'?'reason':'value']:value}
                promiseFullFilledCount+=1
        }
        promises.forEach((p,index)=>{
            // Taking a value and immediate resolution for converting direct value to promise
            Promise.resolve(p)
            .then(val=>resolutionFunction(index,"fulfilled",val))
            .catch(error=>resolutionFunction(index,"rejected",error))
        })
    })
}

// Testing the Code -----------
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('P1 is resolved')
    },1000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('P2 is rejected')
    },100)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('P3 is resolved')
    },5000)
})

const promisesList=[p1,p2,p3]
customPromiseAllSettled(promisesList).then(data=>console.log(data))
