function processArray(arr) {
  const result = {
    evens: [],
    odds: [],
    chars: []
  };

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    // Check if item is a number or numeric string
    if (typeof item === 'number') {
      // Use modulous to check even or odd
      if (item % 2 === 0) {
        insertSorted(result.evens, item);
      } else {
        insertSorted(result.odds, item);
      }
    } else if (typeof item === 'string') {
      const numValue = Number(item);

  
      if (!isNaN(numValue)) {
        if (numValue % 2 === 0) {
          insertSorted(result.evens, numValue);
        } else {
          insertSorted(result.odds, numValue);
        }
      } 
      
      else if (item.length === 1) {
        insertSorted(result.chars, item);
      }
    }
  }

  return result;
}

function insertSorted(arr, item) {
  if (arr.length === 0) {
    arr.push(item);
    return;
  }

  let insertIndex = 0;
  while (insertIndex < arr.length && arr[insertIndex] < item) {
    insertIndex++;
  }

  arr.splice(insertIndex, 0, item);
}

console.log(processArray([3.0, 'a', 7, 'x', '20', 'd', 4, 'f', 8]));
