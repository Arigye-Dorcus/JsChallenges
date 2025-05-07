function findMajorityElement(nums) {
  let counts = {};
  let threshold = nums.length / 2;
  
  for (let num of nums) {
    
    counts[num] = (counts[num] || 0) + 1;
    

    if (counts[num] > threshold) {
      return num;
    }
  }
  
  
}
console.log(findMajorityElement([1, 2, 2, 2, 2, 3, 4]));

