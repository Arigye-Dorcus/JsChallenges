function findSingleNumber(nums) {
  let seen = {};
  
  for (let num of nums) {
    if (seen[num]) {
      seen[num] = 'twice';
    } else {
    
      seen[num] = 'once';
    }
  }
  
  for (let num in seen) {
    if (seen[num] === 'once') {
  
      return parseInt(num);
    }
  }
}

console.log(findSingleNumber([1, 2, 4,2,1]))