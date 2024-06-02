/**Problem Statement
 * Create a chunking function which performs the Chunking task
 * function chunk([1,2,3,4,5,6,7],2)
 * output [1,2] ,[3,4] ,[5,6] ,[7]
 */
/** My Solution -- Brute Force */
function arrChunkizer(arr, chunkSize) {
  const chunkedArr = [];
  let chunkPackets = [];
  arr.forEach((elem, index) => {
    if (
      chunkPackets.length === chunkSize ||
      (index === arr.length - 1 && chunkPackets.length > 0)
    ) {
      chunkedArr.push([...chunkPackets]);
      chunkPackets = []; // Optimization note is that we are creating the new Array for each chunksize this may result in lots of dangling arrays
    }
    chunkPackets.push(elem);
  });
  return chunkedArr;
}
console.log(arrChunkizer([1, 2, 3, 4, 5, 6, 7], 4));

/**Solution with Little Bit Optimizations */
function arrChunkizer(arr, chunkSize) {
  const chunkedArr = [];
  const chunkPackets = [];
  arr.forEach((elem, index) => {
    if (
      chunkPackets.length === chunkSize ||
      (index === arr.length - 1 && chunkPackets.length > 0)
    ) {
      chunkedArr.push([...chunkPackets]);
      chunkPackets.length = 0; // Optimization note is that we are creating the new Array for each chunksize this may result in lots of dangling arrays
    }
    chunkPackets.push(elem);
  });
  return chunkedArr;
}
