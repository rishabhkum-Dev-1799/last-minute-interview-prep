/**
 * Create the Promise.All Polyfill
 *
 * Promise.all is the object which takes [array of Promises ] as arguments and return the either success of all the promises or even if any one of them fails its returns the error object
 */
const p1 = new Promise((resolve, reject) => {
  resolve('P1 is resolved');
});

const p2 = new Promise((resolve, reject) => {
  resolve('P2 is resolved');
});

const p3 = new Promise((resolve, reject) => {
  reject('P3 is rejected');
});

/** Advance Javascript Question--> Promise.All Polyfill */
function customPromiseAll(promiseArr){
    if(!Array.isArray(promiseArr)){
        throw new Error("Function Argument Should always be an array")
    }
    //  A promise.all returns a Promise
    const fullfillmentResultList=[]
    const totalPromiseFullfilled=0
    return new Promise((resolve,reject)=>{
        promiseArr.forEach((promise,index)=>{
            promise.then((data)=>{
                /**Storing the Fullfilled Result in an array based on index */
                fullfillmentResultList[index]=data
                totalPromiseFullfilled+=1
                /**The Promise Should resolve only if all the Promises are Resolved */
                if(totalPromiseFullfilled===promiseArr.length){
                    resolve(fullfillmentResultList)
                }
            })
            .catch(error=>reject(error))
        })
    })
}

const result = customPromiseAll([p1, p2, p3]);
result
  .then((data) => console.log(data))
  .catch((error) => console.log('Error occurred----->', error));

/***Best Optimized Solutions - PY approach */
function optimizedPromiseAll(promiseArr) {
  if (!Array.isArray(promiseArr)) {
    throw new Error('Only Array of Promise as A Argument Should be Allowed');
  }
  const fullfilledPromiseArr = [];
  let promiseCompleted = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((val) => {
          // Here we are not pushing because we want results to be returned in same order as they are provided the push will just add to last which can create confusion because if the last one fullfills first and order will be changed
          fullfilledPromiseArr[index] = val;
          promiseCompleted += 1;
          if (promiseCompleted === promiseArr.length) {
            //  if All the promise are fullfilled then resolve the promise
            resolve(fullfilledPromiseArr);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
const tasksList = [task(1000), task(5000), task(3000)];

/** Optimized Promise All */
optimizedPromiseAll(tasksList)
  .then((data) => console.log('Data---->', data))
  .catch((error) => console.log('Error--->', error));

/** */
function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 3000) {
        resolve('Resolved');
      } else {
        reject('Rejected');
      }
    }, time);
  });
}

const taskList = [task(1000),task(5000),task(3000)]

customPromiseAll(taskList).then(data=>console.log(data)).catch(error=>console.log(error))

