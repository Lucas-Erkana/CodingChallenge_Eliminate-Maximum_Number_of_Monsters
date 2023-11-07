var eliminateMaximum = function(dist, speed) {
  let times = dist.map((d, i) => Math.ceil(d / speed[i])); // Calculate time for each monster
  times.sort((a, b) => a - b);   // Sort the times
  
  let count = 0;
  for(let i = 0; i < times.length; i++) {
      if(times[i] > count) {
          count++;  // If time is more than count, increment the count
      } else {
          break;   // If time is not more than count, break the loop
      }
  }
  return count;
}



let parameter = 'test data'
console.log(eliminateMaximum([1, 3, 4],[1, 1, 1])) //expected result 3
console.log(eliminateMaximum([1, 1, 2, 3],[1, 1, 1, 1])) //expected result 1
console.log(eliminateMaximum([3, 2, 4],[5, 3, 2])) //expected result 1

module.exports = eliminateMaximum;